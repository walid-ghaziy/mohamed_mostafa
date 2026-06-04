import {
 FaYoutube,
 FaFacebook,
 FaTwitter,
 FaInstagram,
 FaLinkedin
} from "react-icons/fa";

import "./Footer.css";

function Footer() {
 return (
  <footer className="footer">

    <h1 className="logo">Mohamad Mostafa</h1>
{/* 
   <h2>Follow Us</h2>

   <div className="social-icons">
    <FaYoutube />
    <FaFacebook />
    <FaTwitter />
    <FaInstagram />
    <FaLinkedin />
   </div> */}

   <div className="newsletter">
    <h2 style={{left:"5px"}}> Stay in the Know</h2>

    <p>
      Get the latest lessons and updates.
    </p>

    <input
      type="email"
      placeholder="Email"
    />

    <button>
      Subscribe
    </button>
   </div>
    <br />

    <p>Developed By  < a href="https://www.instagram.com/walid_ghaziy/">Walid Ghazi Ali</a> </p>
    


   <p className="footer-text">
     Educational content only.
   </p>

   <div className="footer-links">
      <a href="/">Privacy Policy</a>
      <a href="/">Terms & Conditions</a>
   </div>

  </footer>
 );
}

export default Footer;