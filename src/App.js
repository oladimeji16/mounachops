import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./components/Hero";
import Products from './components/Products/index'
import { productData } from "./components/Products/Data";

import { GloblaStyle } from "./globalStyles";

function App() {
  return (
    <Router>
      <GloblaStyle/>
      <Hero />
      <Products
      heading='Choose your Favorite'
      data={productData}
       />
    </Router>
    
       
      
  );
}

export default App;

