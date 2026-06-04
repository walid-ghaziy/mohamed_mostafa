import { Link } from "react-router-dom";
import "./Header.css";
import {
FaUserMinus,
FaHome,
FaDiscourse
} from "react-icons/fa";
function Header() {
  return (
    <header className="header" style={{overflow:"hidden"}}>
      <h2>My Medical Site</h2>
      <div className="minu">
        <center>   <FaUserMinus/></center>
   
      </div >
      <nav>
        
        <Link to={"/"}>Home <FaHome/></Link>
        <Link to={"/Chemistry"}>Chemistry </Link>
        <Link to={"/Pharmacy"}>Pharmacy</Link>
        <Link to={"/Contact"}>Contact</Link>
      


      </nav>
      <br /><br /><br />
    </header>
  );
}

export default Header;