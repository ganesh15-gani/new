import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiPlus,
  FiMinus,
  FiHelpCircle,
  FiShield,
  FiClock,
  FiDollarSign,
  FiCheckCircle,
  FiUsers,
} from "react-icons/fi";

import "../styles/Faq.css";

const faqs = [
  {
    icon: <FiUsers />,
    question: "Who can list their property on StayZen?",
    answer:
      "PG owners, hostels, co-living spaces, serviced apartments and rental properties can easily register and start receiving bookings."
  },
  {
    icon: <FiDollarSign />,
    question: "Are there any registration charges?",
    answer:
      "No. Listing your property is completely free. You only pay according to the selected vendor subscription plan."
  },
  {
    icon: <FiShield />,
    question: "How does StayZen verify my property?",
    answer:
      "Our verification team reviews your submitted documents, property details and images before approving your listing."
  },
  {
    icon: <FiClock />,
    question: "How long does approval take?",
    answer:
      "Most properties are verified within 24–48 hours after all required documents are submitted."
  },
  {
    icon: <FiCheckCircle />,
    question: "Can I manage bookings from one dashboard?",
    answer:
      "Yes. StayZen provides a powerful vendor dashboard where you can manage bookings, availability, pricing and customer requests."
  },
  {
    icon: <FiHelpCircle />,
    question: "Is customer support available?",
    answer:
      "Absolutely. Our dedicated support team is available whenever you need assistance with your property or bookings."
  }
];

export default function FAQ() {

  const [active, setActive] = useState<number | null>(0);

  return (

<section className="faq-section" id="faq">

<div className="faq-container">
        {/* LEFT SIDE */}

      <motion.div
        className="faq-image-side"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className="faq-tag">
          <FiHelpCircle />
          Frequently Asked Questions
        </span>

        <h2>
          Everything You Need to Know About
          <span> StayZen Vendor Platform</span>
        </h2>

        <p>
          Still have questions? Explore the most common queries from PG owners,
          hostel managers, apartments, and property vendors before joining
          StayZen.
        </p>

        <div className="faq-image-wrapper">
          <img
            src="/assets/faq-image.png"
            alt="StayZen FAQ"
            className="faq-image"
          />

          <div className="floating-card card-one">
            <FiCheckCircle />
            <div>
              <h4>500+</h4>
              <span>Verified Properties</span>
            </div>
          </div>

          <div className="floating-card card-two">
            <FiShield />
            <div>
              <h4>100%</h4>
              <span>Secure Verification</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* RIGHT SIDE */}

      <motion.div
        className="faq-right"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {faqs.map((item, index) => {
          const open = active === index;

          return (
            <motion.div
              layout
              key={index}
              className={`faq-card ${open ? "active" : ""}`}
              transition={{ duration: 0.35 }}
            >
              <button
                className="faq-question"
                onClick={() => setActive(open ? null : index)}
              >
                <div className="faq-left">
                  <span className="faq-icon">
                    {item.icon}
                  </span>

                  <h3>{item.question}</h3>
                </div>

                <span className="faq-toggle">
                  {open ? <FiMinus /> : <FiPlus />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    className="faq-answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  >
                    <p>{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>
          </div>
  </section>
  );
}