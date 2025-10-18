import ReactDOM from "react-dom/client";
import Header from "home/Header";
import Footer from "home/Footer";
import "./index.css";
import { useState } from "react";
import "home/styles";
const App = function () {
  const [state, setState] = useState(0);
  return (
    <>
      <Header />
      <main className="min-h-screen">
        Micro front end baaaaaaaaaaby
        <button onClick={() => setState((state) => state + 1)}>
          Click:{state}
        </button>
      </main>
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);
