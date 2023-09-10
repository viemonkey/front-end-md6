import './App.css';
import Home from './pages/home/Home';
import {ToastContainer} from "react-toastify";
import {Route, Routes} from "react-router-dom";
import Login from "./pages/users/login";
import Register from "./pages/users/register";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path={'/'} element={<Home></Home>}>
                <Route path={'/login'} element={<Login></Login>}></Route>
                <Route path={'/register'} element={<Register></Register>}></Route>
             </Route>
         </Routes>
        <ToastContainer theme={"colored"} position={"top-center"}/>

    </div>
  );
}

export default App;
