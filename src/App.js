import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./components/Hero";
import Products from './components/Products/index'
import { productData, productData2 } from "./components/Products/Data";

import { GloblaStyle } from "./globalStyles";
import Feature from "./components/Feature/Index";

function App() {
  return (
    <Router>
      <GloblaStyle/>
      <Hero />
      <Products
      heading='Choose your Favorite'
      data={productData}
       />
       <Feature />
       <Products
      heading='Treats For You'
      data={productData2}
       />

    </Router>
    
       
      
  );
}

export default App;

