import './App.css';
import Home from './pages/home/Home';
import {ToastContainer} from "react-toastify";
import {Route, Routes} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import MyAccount from './pages/myAcount/MyAccount';
import User from "./pages/home/User";
import Host from "./pages/home/Host";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path={'/'} element={<Home />}>
                <Route path={'/user'} element={<User/>}></Route>
                <Route path={'/host'} element={<Host/>}></Route>
            </Route>
         </Routes>
        <ToastContainer theme={"colored"} position={"top-center"}/>

    </div>
  );
}

export default App;
