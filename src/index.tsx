import ReactDOM from "react-dom/client";
import "./index.scss";
import "./styles/index.scss";
import "semantic-ui-css/semantic.min.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
<App />
</BrowserRouter>);


