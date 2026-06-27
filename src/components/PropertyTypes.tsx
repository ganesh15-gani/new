import { motion } from "framer-motion";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import "../styles/PropertyTypes.css";

const properties = [
  {
    id: 1,
    title: "Premium PG",
    description:
      "Grow your PG business with verified listings, instant enquiries and a powerful vendor dashboard.",

    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1200&auto=format&fit=crop&q=80",

    features: [
      "Verified Property",
      "Online Bookings",
      "Vendor Dashboard",
      "Higher Occupancy",
    ],
  },

  {
    id: 2,
    title: "Hostel",

    description:
      "Manage hostel rooms, admissions, payments and occupancy using one smart platform.",

    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&auto=format&fit=crop&q=80",

    features: [
      "Student Management",
      "Secure Payments",
      "Room Allocation",
      "Analytics",
    ],
  },

  {
    id: 3,
    title: "Apartment",

    description:
      "Publish rental apartments, receive verified enquiries and manage tenants easily.",

    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&auto=format&fit=crop&q=80",

    features: [
      "Verified Owners",
      "Easy Listing",
      "Fast Approval",
      "Revenue Insights",
    ],
  },

  {
    id: 4,
    title: "Hotel",

    description:
      "Increase hotel visibility and receive more online reservations with StayZen.",

    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&auto=format&fit=crop&q=80",

    features: [
      "Online Reservations",
      "Business Dashboard",
      "Revenue Reports",
      "Premium Support",
    ],
  },
];

const PropertyTypes = () => {
  return (
    <section
      className="property-section"
      id="properties"
    >
      <div className="property-container">

        <motion.div
          className="property-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >

          <span>
            PROPERTY TYPES
          </span>

          <h2>

            List Every

            <span> Property</span>

          </h2>

          <p>

            StayZen helps PG owners,
            hostels, apartments and hotels
            reach thousands of verified
            customers every day.

          </p>

        </motion.div>

        <div className="property-wrapper"></div>
                {properties.map((property, index) => (

          <motion.div
            key={property.id}
            className={`property-row ${
              index % 2 === 0 ? "normal" : "reverse"
            }`}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
          >

            {/* IMAGE */}

            <motion.div
              className="property-image"
              whileHover={{
                scale: 1.03,
              }}
            >

              <img
                src={property.image}
                alt={property.title}
              />

              <div className="property-overlay"></div>

              <div className="property-tag">
                Verified Property
              </div>

            </motion.div>

            {/* CONTENT */}

            <div className="property-content">

              <h3>
                {property.title}
              </h3>

              <p>
                {property.description}
              </p>

              <ul>

                {property.features.map((feature, i) => (

                  <li key={i}>

                    <FiCheck />

                    <span>
                      {feature}
                    </span>

                  </li>

                ))}

              </ul>

              <button className="property-btn">

                List Your Property

                <FiArrowRight />

              </button>

            </div>

          </motion.div>

        ))}

      </div>

    </section>

  );
};

export default PropertyTypes;
            