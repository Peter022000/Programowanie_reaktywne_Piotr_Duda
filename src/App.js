import logo from './logo.svg';
import './App.css';
import NavBar from "./components/common/navbar";
import { Outlet } from "react-router-dom";
import Posts from "./components/posts";

function App() {
  return (
      <div className="container-fluid">
          <NavBar />
          <div className="container">
              <Outlet />
          </div>
      </div>
  );
}


export default App;