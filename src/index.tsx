import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { store } from "store/store";
import { Provider } from "react-redux";
import { ScrollToTop } from "helpers/ScrollToTop";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import "./styles/normalize.css";
import "./styles/globalStyles.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ScrollToTop />
      <App />
    </Provider>
  </BrowserRouter>
);
