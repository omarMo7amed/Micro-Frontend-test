import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { Product, products } from 'src/products';

interface CartItem extends Product {
  quantity: number;
}

interface Cart {
  items: CartItem[];
}

const initializeCart = (indexes: number[]): Cart => {
  return {
    items: indexes.map((index) => ({ ...products[index], quantity: 1 })),
  };
};

@Controller('cart')
export class CartController {
  private carts: Record<number, Cart> = {
    1: initializeCart([0, 2]),
    2: initializeCart([1, 3]),
  };
  constructor() {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async index(@Request() req): Promise<Cart> {
    return this.carts[req.user.userId] ?? { items: [] };
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Request() req, @Body() { id }: { id: string }): Promise<Cart> {
    const userId = req.user.userId;
    if (!this.carts[userId]) {
      this.carts[userId] = { items: [] };
    }
    const product = products.find((p) => p.id === parseInt(id));
    if (product) {
      const cart = this.carts[userId];
      const existingItem = cart.items.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.items.push({ ...product, quantity: 1 });
      }
    }
    return this.carts[userId];
  }

  @Delete()
  @UseGuards(JwtAuthGuard)
  async remove(@Request() req): Promise<Cart> {
    const userId = req.user.userId;
    this.carts[userId] = { items: [] };
    return this.carts[userId];
  }
}
