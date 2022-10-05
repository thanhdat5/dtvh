import "./App.scss";
import "aos/dist/aos.css";
import { BrowserRouter } from "react-router-dom";
import RenderRouter from "./routes/renderRouter";
import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  useEffect(() => {
    const handleUserKeyPress = (ev: any) => {
      ev.preventDefault();
    }
    window.addEventListener("contextmenu", handleUserKeyPress);
    return () => {
      window.removeEventListener("contextmenu", handleUserKeyPress);
    };
  }, [])
  return (
    <React.Fragment>
      <BrowserRouter>
        <div className="tbg-app">
          <RenderRouter />
        </div>
      </BrowserRouter>
      <ToastContainer />
    </React.Fragment>
  );
}

export default App;
