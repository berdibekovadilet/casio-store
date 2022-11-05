import ReactDOM from "react-dom/client";
import "./styles/normalize.css";
import "./styles/globalStyles.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
