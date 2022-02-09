import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavBar from "./controllers/navBar/navbar";
import Container from "react-bootstrap/Container";
import Login from "./controllers/login/login";
import Home from "./controllers/home/home";
import Recipe from "./controllers/recipe/recipe";
import Menu from "./controllers/menu/menu";
function App() {
  const [menu, setMenu] = useState([]);
  let loggedIn = localStorage.getItem('token');

  return (
    <div className="App">
      <Container>
        <NavBar />
        <Routes>
          {loggedIn ? (
            <>
              <Route path="/" element={<Home setMenu={setMenu} />} />
              <Route path="/recipe/:id" element={<Recipe />} />
              <Route path="/menu" element={<Menu menu={menu}/>} />
            </>
          ) : (
            <>
              <Route path="/" element={<Login />} />
              <Route
                path="*"
                element={
                  <>
                    <h1>no</h1>
                  </>
                }
              />
            </>
          )}
        </Routes>
      </Container>
    </div>
  );
}

export default App;
