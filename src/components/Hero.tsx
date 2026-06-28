import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCheckCircle,
  FiHome,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";

import "../styles/Hero.css";

const stats = [
  {
    icon: <FiHome />,
    number: "500+",
    label: "Verified Properties",
  },
  {
    icon: <FiUsers />,
    number: "20K+",
    label: "Happy Tenants",
  },
  {
    icon: <FiTrendingUp />,
    number: "95%",
    label: "Occupancy Rate",
  },
];

const Hero = () => {
  return (
    <section
      className="hero"
      id="home"
    >
      {/* Background */}

      <div className="hero-bg">
        <span className="blob blob1"></span>
        <span className="blob blob2"></span>
        <span className="grid-bg"></span>
      </div>

      <div className="hero-container">

        {/* ================= LEFT ================= */}

        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <FiCheckCircle />
            India's Trusted PG Vendor Platform
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Grow Your
            <span> PG Business </span>
            With StayZen
          </motion.h1>

          <motion.p
            className="hero-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            List your PG, Hostel, Apartment or Hotel on StayZen
            and reach thousands of verified students and
            professionals. Manage bookings, receive secure
            payments and increase occupancy with one smart
            platform.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >

            <button className="primary-btn">
              Enroll Now
              <FiArrowRight />
            </button>

            <button className="secondary-btn">
              Explore Properties
            </button>

          </motion.div>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >

            {stats.map((item, index) => (

              <div
                className="stat-card"
                key={index}
              >

                <div className="stat-icon">
                  {item.icon}
                </div>

                <h3>{item.number}</h3>

                <p>{item.label}</p>

              </div>

            ))}

          </motion.div>

        </motion.div>

        {/* ================= RIGHT ================= */}

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >

          {/* Hero Image */}

          <motion.div
            className="hero-image-wrapper"
            whileHover={{
              rotateY: 6,
              rotateX: -3,
              scale: 1.03,
            }}
          >

            <img
              className="hero-image"
              src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1600&q=80"
              alt="Premium PG Room"
            />

          </motion.div>

          {/* Card 1 */}

          <motion.div
            className="floating-card card-one"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
          >

            <span>Total Bookings</span>

            <h2>245+</h2>

            <p>This Month</p>

          </motion.div>

          {/* Card 2 */}

          <motion.div
            className="floating-card card-two"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
          >

            <span>Revenue</span>

            <h2>₹2.4L</h2>

            <p>Monthly Earnings</p>

          </motion.div>

          {/* Card 3 */}

          <motion.div
            className="floating-card card-three"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3.5,
            }}
          >

            <FiCheckCircle />

            <div>

              <h4>Verified</h4>

              <p>100% Trusted</p>

            </div>

          </motion.div>

          {/* Glow Rings */}

          <span className="ring ring-one"></span>

          <span className="ring ring-two"></span>

        </motion.div>

      </div>

    </section>
  );
};

export default Hero;