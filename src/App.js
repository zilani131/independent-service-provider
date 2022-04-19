import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Pages/Login/Login";
import AboutMe from "./Components/Pages/AboutMe/AboutMe";
import Blog from "./Components/Pages/Blog/Blog";
import Registration from "./Components/Pages/Registration/Registration";
import Page404 from "./Components/Pages/Page404/Page404";

import RequiredAuth from "./RequiredAuth/RequiredAuth";

import CheckOut from "./Components/Pages/CheckOut/CheckOut";
function App() {
  return (
    <div className="App">
      <NavBar ></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/registration"
          element={<Registration></Registration>}
        ></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/about" element={<AboutMe></AboutMe>}></Route>
        <Route
          path='/checkout/:serviceId'
          element={
        <RequiredAuth ><CheckOut></CheckOut></RequiredAuth>  
          }
        ></Route>
        <Route path="*" element={<Page404></Page404>}></Route>
      </Routes>
    <Footer></Footer>
    </div>
  );
}
export default App;
