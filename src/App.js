import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./components/Hero";

import { GloblaStyle } from "./globalStyles";

function App() {
  return (
    <Router>
      <GloblaStyle/>
      <Hero />
    </Router>
    
       
      
  );
}

export default App;

