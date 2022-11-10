import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import RoutesPage from "./components/routesPage/RoutesPage";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RoutesPage />
      </BrowserRouter>
      ,
    </div>
  );
}

export default App;
