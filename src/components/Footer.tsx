import "../styles/footer.css";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-left">
          <h2>StayZen</h2>
          <p>
            Premium platform for PG owners, hostels, apartments and hotels
            to manage bookings and grow faster.
          </p>

          <div className="footer-contact">
            <span><FiMail /> support@stayzen.com</span>
            <span><FiPhone /> +91 7337474361</span>
            <span><FiMapPin /> India</span>
          </div>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#properties">Properties</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </div>

        {/* SERVICES */}
        <div className="footer-links">
          <h3>Services</h3>
          <a>Property Listing</a>
          <a>Verification</a>
          <a>Booking Management</a>
          <a>Vendor Dashboard</a>
        </div>

        {/* RIGHT */}
        <div className="footer-newsletter">
          <h3>Stay Updated</h3>
          <p>Get latest updates about StayZen features.</p>

          <div className="footer-input">
            <input type="email" placeholder="Enter email" />
            <button>Subscribe</button>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2026 StayZen. All Rights Reserved.</p>
      </div>

    </footer>
  );
}