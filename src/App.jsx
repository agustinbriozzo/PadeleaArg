import React from "react";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import NewProducts from "./components/NewProducts";

const App = () => {
  return(
    <div>
      <NavBar/>
      <ItemListContainer greeting={"¡¡Compre su Bullpadel al mejor precio en Argentina!!"}/>
      <NewProducts/>
      <Main/>
      <Footer/>
    </div>
  )
}
export default App;
