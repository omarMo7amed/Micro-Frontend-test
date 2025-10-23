import ReactDOM from "react-dom/client";
import Header from "home/Header";
import Footer from "home/Footer";
import "./index.css";
import "home/styles";
import ProductContent from "./ProductContent";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = function () {
  return (
    <BrowserRouter>
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="product/:id" element={<ProductContent />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);
