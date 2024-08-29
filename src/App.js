import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import ListProduct from "./component/ListProduct";
import AddProduct from "./component/AddProduct";
import UpdateProduct from "./component/UpdateProduct";
import DetailProduct from "./component/DetailProduct";

function App() {
  return (
    <>
      <Routes>
        <Route element={<ListProduct/>} path={'home'}></Route>
        <Route element={<AddProduct/>} path={'create'}></Route>
        <Route element={<UpdateProduct/>} path={'update/:id'}></Route>
        <Route element={<DetailProduct/>} path={'detail/:x'}></Route>
      </Routes>
    </>
  );
}

export default App;
