import { motion } from "framer-motion";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiSend,
  FiClock,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi";

import "../styles/Contact.css";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">

      <div className="contact-glow glow-left"></div>
      <div className="contact-glow glow-right"></div>

      <div className="contact-container">

        {/* ===========================
            LEFT SIDE
        =========================== */}

        <motion.div
          className="contact-left"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <span className="contact-tag">
            Contact StayZen
          </span>

          <h2>
            Let's Grow Your
            <span> Property Business</span>
          </h2>

          <p>
            Have questions about listing your PG, hostel, apartment,
            or hotel on StayZen? Our team is always ready to help you
            with onboarding, verification, pricing, and bookings.
          </p>

          {/* Contact Cards */}

          <div className="contact-info">

            <div className="info-card">

              <div className="info-icon">
                <FiPhone />
              </div>

              <div>
                <h4>Call Us</h4>
                <span>+91 98765 43210</span>
              </div>

            </div>

            <div className="info-card">

              <div className="info-icon">
                <FiMail />
              </div>

              <div>
                <h4>Email</h4>
                <span>support@stayzen.com</span>
              </div>

            </div>

            <div className="info-card">

              <div className="info-icon">
                <FiMapPin />
              </div>

              <div>
                <h4>Office</h4>
                <span>Hyderabad, Telangana</span>
              </div>

            </div>

            <div className="info-card">

              <div className="info-icon">
                <FiClock />
              </div>

              <div>
                <h4>Working Hours</h4>
                <span>Mon - Sat | 9 AM - 7 PM</span>
              </div>

            </div>

          </div>
                   {/* ===========================
              SOCIAL LINKS
          =========================== */}

          <div className="contact-social">

            <a href="#">
              <FiFacebook />
            </a>

            <a href="#">
              <FiInstagram />
            </a>

            <a href="#">
              <FiLinkedin />
            </a>

          </div>

        </motion.div>

        {/* ===========================
            RIGHT SIDE
        =========================== */}

        <motion.div
          className="contact-right"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <form className="contact-form">

            <div className="input-grid">

              <div className="input-group">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="input-group">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                />
              </div>

            </div>

            <div className="input-grid">

              <div className="input-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div className="input-group">
                <label>Property Type</label>

                <select>

                  <option>Choose Property</option>

                  <option>PG</option>

                  <option>Hostel</option>

                  <option>Apartment</option>

                  <option>Hotel</option>

                </select>

              </div>

            </div>

            <div className="input-group">

              <label>Your Message</label>

              <textarea
                rows={6}
                placeholder="Tell us about your property..."
              ></textarea>

            </div>

            <button
              type="submit"
              className="contact-btn"
            >
              Send Message
              <FiSend />
            </button>

          </form>

        </motion.div>
               </div>

    </section>
  );
}