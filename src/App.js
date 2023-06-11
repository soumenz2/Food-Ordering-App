
import { BrowserRouter,Routes,Link,Route } from "react-router-dom";
import "./App.css";

/* 
  Implement the logic for loading the views 
*/

import ViewBooking from "./ViewBooking"
import AllBooking from "./AllBookings"
import BookingComponent from "./CreateBooking";
import Container from "./body";
import Header from "./Header";
import Aboutus from "./Aboutus";
import Home from "./Home";
import Contact from "./Contact";
const App = () => {
  return (
    // <BrowserRouter>
    //   <div>
    //     <nav
          
    //       className="h-16 w-full bg-slate-500 overflow-hidden flex justify-around items-center"
    //     >
    //       <span className=" font-bold text-4xl text-white">BOUQUET OF LOVE</span>
    //       <ul className="flex p-4">
    //         <li className="mx-4 text-orange-500 hover:text-white">
    //           <Link className="nav-link"  to="/">
    //             Book Bouquet
    //           </Link>
    //         </li>
    //         <li className="mx-4 text-orange-500 hover:text-white">
    //           <Link
    //             className="nav-link"
                
    //             to="/viewBookings"
    //           >
    //             View Bookings
    //           </Link>
    //         </li>
    //         <li className="mx-4 text-orange-500 hover:text-white">
    //           <Link
    //             className="nav-link"
                
    //             to="/allBookings"
    //           >
    //             View All Bookings
    //           </Link>
    //         </li>
    //       </ul>
    //     </nav>

    //     <Routes>
    //       <Route path="/" element={<BookingComponent/>}/>
    //       <Route path="/viewBookings" element={<ViewBooking />}/>
    //       <Route path="/allBookings" element={<AllBooking />}/>
    //       {/*configure the Route's */}

    //     </Routes>
    //   </div>
    // </BrowserRouter>
    <BrowserRouter>
    <div>
      <Header />
      <Routes>
            <Route path="/" element={<Container />} />
            <Route path="/home" element={<Container/>}/>
            <Route path="/aboutus" element={<Aboutus />}/>
            <Route path="/contact" element={<Contact />}/>
           
        </Routes>
        </div>
        </BrowserRouter>
    
  );
};

export default App;
