import logo from './logo.svg';
import './App.css';
import Launching from './component/Launching';
import Body from './component/Body';
import Mve from './component/Mve';
// import Trending from './component/Trending';
import Premium from './component/Premium';
// import Booking from './component/Booking';
import Footer from './component/footer';
// import Payment from './component/Payment';
function App() {
  return (
  <>
  <Launching/>
  <Body/>
  <Mve/>
  {/* <Trending/> */}
  <Premium/>
  <Footer/>
  {/* <Payment/> */}
  {/* <Booking/> */}

 </>
  );
}

export default App;
