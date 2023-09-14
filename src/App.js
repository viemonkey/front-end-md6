import './App.css';
import Home from './pages/home/Home';
import {ToastContainer} from "react-toastify";
import {Route, Routes} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import MyAccount from './pages/myAcount/MyAccount';
import User from "./pages/home/User";
import Host from "./pages/home/Host";
import Admin from "./pages/home/Admin";
import DetailUser from "./pages/admin/detail/DetailUser";
import DetailHost from "./pages/admin/detail/DetailHost";
import ListHost from "./pages/admin/list/ListHost";
import ListUser from "./pages/admin/list/ListUser";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path={'/'} element={<Home />}>
                <Route path={'/user'} element={<User/>}></Route>
                <Route path={'/host'} element={<Host/>}></Route>
            </Route>
            <Route path={'/admin'} element={<Admin/>}></Route>
            <Route path={'/detail/user'} element={<DetailUser/>}></Route>
            <Route path={'/detail/host'} element={<DetailHost/>}></Route>
            <Route path={'/list/host'} element={<ListHost/>}></Route>
            <Route path={'/list/user'} element={<ListUser/>}></Route>
         </Routes>
        <ToastContainer theme={"colored"} position={"top-center"}/>

    </div>
  );
}

export default App;
