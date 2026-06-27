import { motion } from "framer-motion";
import {
  FaPlayCircle,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

import "../styles/Videos.css";

/* Replace with your own videos */

import registerVideo from "../assets/video1.mp4";
import dashboardVideo from "../assets/video2.mp4";
import successVideo from "../assets/video3.mp4";

const videos = [
  {
    title: "Property Registration",
    description:
      "Learn how to register your PG, hostel or apartment on StayZen in just a few minutes.",
    video: registerVideo,
    duration: "02:45",
  },
  {
    title: "Dashboard Walkthrough",
    description:
      "Explore the StayZen dashboard and manage bookings, rooms and payments effortlessly.",
    video: dashboardVideo,
    duration: "03:18",
  },
  {
    title: "Vendor Success Story",
    description:
      "See how property owners increased occupancy and revenue using StayZen.",
    video: successVideo,
    duration: "02:10",
  },
];

const VendorVideos = () => {
  return (
    <section className="vendor-videos">

      <div className="videos-glow glow-left"></div>
      <div className="videos-glow glow-right"></div>

      <motion.div
        className="videos-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .7 }}
      >

        <span className="videos-tag">
          <FaCheckCircle />
          Product Demo
        </span>

        <h2>
          See
          <span> StayZen </span>
          In Action
        </h2>

        <p>
          Watch how StayZen helps PG owners register properties,
          manage bookings, receive secure payments and grow
          their business through one intelligent platform.
        </p>

      </motion.div>

      <div className="videos-grid">
                {videos.map((item, index) => (
          <motion.div
            key={index}
            className="video-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            whileHover={{
              y: -8,
            }}
          >

            {/* Video */}

            <div className="video-wrapper">

              <video
                className="video-player"
                controls
                preload="metadata"
                playsInline
              >
                <source src={item.video} type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>

              {/* Play Overlay */}

              <div className="play-overlay">

                <div className="play-btn">
                  <FaPlayCircle />
                </div>

              </div>

              {/* Duration */}

              <span className="video-duration">
                {item.duration}
              </span>

            </div>

            {/* Content */}

            <div className="video-content">

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <button className="video-btn">

                Watch Demo

                <FaArrowRight />

              </button>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default VendorVideos;