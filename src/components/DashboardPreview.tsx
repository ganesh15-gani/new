
import { motion } from "framer-motion";
import {
  FaCalendarCheck,
  FaRupeeSign,
  FaBed,
  FaUsers,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

import "../styles/DashboardPreview.css";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const leftVariants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const rightVariants = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const featureVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
    },
  },
};

const DashboardPreview = () => {
  return (
    <section className="dashboard-preview">

      <div className="dashboard-bg-circle circle-one"></div>
      <div className="dashboard-bg-circle circle-two"></div>

      <motion.div
        className="dashboard-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >

        {/* LEFT CONTENT */}

        <motion.div
          className="dashboard-left"
          variants={leftVariants}
        >

          <span className="dashboard-badge">
            Vendor Dashboard
          </span>

          <h2>
            Manage Your Property
            <br />
            <span>Like A Professional</span>
          </h2>

          <p>
            StayZen provides a powerful dashboard where PG owners can
            monitor bookings, manage tenants, update room availability,
            track revenue, and grow occupancy effortlessly from a
            single place.
          </p>

          <div className="dashboard-features">

            <motion.div
              className="feature-item"
              variants={featureVariants}
            >
              <FaCheckCircle />
              <span>Real-Time Booking Updates</span>
            </motion.div>

            <motion.div
              className="feature-item"
              variants={featureVariants}
            >
              <FaCheckCircle />
              <span>Revenue Analytics Dashboard</span>
            </motion.div>

            <motion.div
              className="feature-item"
              variants={featureVariants}
            >
              <FaCheckCircle />
              <span>Room Availability Tracking</span>
            </motion.div>

            <motion.div
              className="feature-item"
              variants={featureVariants}
            >
              <FaCheckCircle />
              <span>Verified Tenant Records</span>
            </motion.div>

            <motion.div
              className="feature-item"
              variants={featureVariants}
            >
              <FaCheckCircle />
              <span>Instant Notifications</span>
            </motion.div>

            <motion.div
              className="feature-item"
              variants={featureVariants}
            >
              <FaCheckCircle />
              <span>One Click Property Control</span>
            </motion.div>

          </div>

          <div className="dashboard-buttons">

            <button className="primary-btn">
              Explore Dashboard
              <FaArrowRight />
            </button>

            <button className="secondary-btn">
              Learn More
            </button>

          </div>

        </motion.div>

        {/* RIGHT SIDE STARTS IN PART 2 */}
                {/* RIGHT SIDE */}

        <motion.div
          className="dashboard-right"
          variants={rightVariants}
        >

          <motion.div
            className="dashboard-image-wrapper"
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >

            {/* Main Dashboard Image */}

            <img
              src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80"
              alt="StayZen Vendor Dashboard"
              className="dashboard-image"
            />

            {/* Floating Card - Bookings */}

            <motion.div
              className="floating-card booking-card"
              whileHover={{
                scale: 1.05,
                rotate: -2,
              }}
            >
              <div className="card-icon">
                <FaCalendarCheck />
              </div>

              <div>
                <h4>Bookings</h4>
                <h3>2,458</h3>
                <span>+18% This Month</span>
              </div>
            </motion.div>

            {/* Floating Card - Revenue */}

            <motion.div
              className="floating-card revenue-card"
              whileHover={{
                scale: 1.05,
                rotate: 2,
              }}
            >
              <div className="card-icon">
                <FaRupeeSign />
              </div>

              <div>
                <h4>Revenue</h4>
                <h3>₹8.6L</h3>
                <span>Highest Earnings</span>
              </div>
            </motion.div>

            {/* Floating Card - Rooms */}

            <motion.div
              className="floating-card rooms-card"
              whileHover={{
                scale: 1.05,
              }}
            >
              <div className="card-icon">
                <FaBed />
              </div>

              <div>
                <h4>Rooms</h4>
                <h3>96%</h3>
                <span>Occupancy</span>
              </div>
            </motion.div>

            {/* Floating Card - Tenants */}

            <motion.div
              className="floating-card tenant-card"
              whileHover={{
                scale: 1.05,
              }}
            >
              <div className="card-icon">
                <FaUsers />
              </div>

              <div>
                <h4>Tenants</h4>
                <h3>860+</h3>
                <span>Verified Users</span>
              </div>
            </motion.div>

          </motion.div>

        </motion.div>

      </motion.div>

    </section>
  );
};

export default DashboardPreview;