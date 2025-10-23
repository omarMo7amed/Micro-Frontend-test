const API_SERVER = "http://localhost:8000";

export const getProducts = async () => {
  return (await fetch(`${API_SERVER}/products`)).json();
};

export const getProductById = async (id: number) => {
  return (await fetch(`${API_SERVER}/products/${id}`)).json();
};

export const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});
