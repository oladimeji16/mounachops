import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { GloblaStyle } from "./globalStyles";

function App() {
  return (
    <Router>
      <GloblaStyle/>
      <NavBar/>
    </Router>
    
       
      
  );
}

export default App;

