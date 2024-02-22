import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter as Router,Route,Switch,Routes} from 'react-router-dom'
import Home from "./Pages/Home";



function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>

  );
}

export default App;
