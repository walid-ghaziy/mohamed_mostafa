import { BrowserRouter, Route,Routes} from "react-router-dom";
import Header from "./componet/Header";
import Footer from "./componet/Footer";
import Home from "./pages/Home"
import Chemistry from "./pages/chemistry";
import Pharmacy from "./pages/pharmacy";
import Contact from "./pages/Contact";
import Cours from "./pages/Cours";
function App() {
  return (
 < >
   <BrowserRouter>
  <Header/>
     <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="Chemistry" element={<Chemistry/>}/>
    <Route path="Pharmacy" element={<Pharmacy/>}/>
    <Route path="Contact" element={<Contact/>}/>
    <Route path="cours/:cod" element={<Cours/>}/>
  </Routes>
   </BrowserRouter>
  <Footer/>
     {/* <BrowserRouter>
          <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chemistry" element={<Chemistry />} />
        <Route path="/pharmacy" element={<Pharmacy />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
     </BrowserRouter> */}
 

    
    
 </>

  );
}

export default App;