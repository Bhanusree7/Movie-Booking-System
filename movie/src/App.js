import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Launching from './component/Launching';
import Body from './component/Body';
import Mve from './component/Mve';
// import Trending from './component/Trending';
import Premium from './component/Premium';
// import Booking from './component/Booking';
import Footer from './component/footer';
import Payment from './component/Payment';
import Theatre from './component/Theatre'
import { Link } from "react-router-dom";
import Se from './component/Se';
function App() {
  return (
  <>
  
  <Launching/>
  <Body/>
  <Mve/>
  {/* <Trending/> */}
  <Premium/>
  <Theatre/>
  <Se/>
  <Payment/>

  <Footer/>
 

  {/* <Booking/> */}

  {/* <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Launching/>} />
          <Route path="/Theatre" element={<Theatre />} />
          <Route path="/Payment" element={<Payment />} />
        </Routes>
      </Router>
    </div> */}

 </>
  );
}

export default App;
