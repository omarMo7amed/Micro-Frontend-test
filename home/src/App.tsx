import ReactDOM from "react-dom/client";

import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => (
  <>
    <Header />
    <main className="min-h-screen">Micro front end baaaaaaaaaaby</main>
    <Footer />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);
