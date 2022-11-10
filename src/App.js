import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import RoutesPage from "./components/routesPage/RoutesPage";
import { BrowserRouter } from "react-router-dom";
import Base from "./components/Layout/Base";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Base>
          <RoutesPage />
        </Base>
      </BrowserRouter>
    </div>
  );
}

export default App;
