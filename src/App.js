import './App.css';
import Home from './pages/home/Home';
import {ToastContainer} from "react-toastify";
import {Route, Routes} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import MyAccount from './pages/myAcount/MyAccount';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path={'/'} element={<Home />}></Route>
         </Routes>
        <ToastContainer theme={"colored"} position={"top-center"}/>

    </div>
  );
}

export default App;
