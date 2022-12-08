import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Footer from "./components/Footer";
// import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import NewProducts from "./components/NewProducts";

function App() {
  return(
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route/>
        <Route/>
        <Route/>
        <Route/>
      </Routes>
      <NewProducts/>
      <ItemListContainer/>
      <Footer/>
    </BrowserRouter>
  )
}
export default App;
