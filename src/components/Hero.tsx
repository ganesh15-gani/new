import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCheckCircle,
  FiHome,
  FiUsers,
  FiTrendingUp,
} from "react-icons/fi";
import "../styles/Hero.css";

const Hero = () => {
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

  return (
    <section id="home" className="hero">

      {/* Animated Background */}

      <div className="hero-bg">
        <span className="blob blob1"></span>
        <span className="blob blob2"></span>
        <span className="grid-bg"></span>
      </div>

      <div className="hero-container">

        {/* ===========================
            LEFT CONTENT
        ============================ */}

        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <motion.span
            className="hero-badge"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .3 }}
          >
            <FiCheckCircle />
            India's Smart PG Vendor Platform
          </motion.span>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .5 }}
          >
            List Your
            <span> PG Property </span>
            & Grow Your Business Faster
          </motion.h1>

          <motion.p
            className="hero-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .8 }}
          >
            Join thousands of verified property owners on
            StayZen. Manage bookings, increase occupancy,
            receive secure payments and reach more students
            with one powerful platform.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <button className="primary-btn">
              Enroll Now
              <FiArrowRight />
            </button>

            <button className="secondary-btn">
              View Properties
            </button>
          </motion.div>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            {stats.map((item, index) => (
              <div
                className="stat-card"
                key={index}
              >
                <div className="stat-icon">
                  {item.icon}
                </div>

                <h2>{item.number}</h2>

                <p>{item.label}</p>
              </div>
            ))}
          </motion.div>

        </motion.div>
                {/* ===========================
            RIGHT SIDE
        ============================ */}

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          {/* Floating Card 1 */}

          <motion.div
            className="floating-card card-one"
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
          >
            <h4>Bookings</h4>
            <h2>+245</h2>
            <span>This Month</span>
          </motion.div>

          {/* Floating Card 2 */}

          <motion.div
            className="floating-card card-two"
            animate={{
              y: [0, 15, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
          >
            <h4>Revenue</h4>
            <h2>₹2.4L</h2>
            <span>Monthly</span>
          </motion.div>

          {/* Floating Card 3 */}

          <motion.div
            className="floating-card card-three"
            animate={{
              y: [0, -12, 0],
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

          {/* Hero Image */}

          <motion.div
            className="hero-image-wrapper"
            whileHover={{
              rotateY: 8,
              rotateX: -5,
              scale: 1.03,
            }}
            transition={{
              duration: .4,
            }}
          >

            <img
              src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=900&q=80"
              alt="StayZen PG"
              className="hero-image"
            />

          </motion.div>

          {/* Glow Rings */}

          <div className="ring ring-one"></div>
          <div className="ring ring-two"></div>

        </motion.div>

      </div>

    </section>
  );
};

export default Hero;