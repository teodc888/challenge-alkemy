import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./controllers/navBar/navbar";
import Container from "react-bootstrap/Container";
import Login from "./controllers/login/login";
import Home from "./controllers/home/home";
import Recipe from "./controllers/recipe/recipe";
function App() {
  return (
    <div className="App">
      <Container >
        <NavBar />
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/recipe/:id" element={<Recipe/>} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
