import { motion } from "framer-motion";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import "../styles/PropertyTypes.css";

interface Property {
  id: number;
  title: string;
  description: string;
  image: string;
  features: string[];
}

const properties: Property[] = [
  {
    id: 1,
    title: "Premium PG",
    description:
      "List your PG on StayZen and get verified tenants, instant enquiries and higher occupancy with a smart vendor dashboard.",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1200&auto=format&fit=crop&q=80",
    features: [
      "Verified Listing",
      "Instant Enquiries",
      "Vendor Dashboard",
      "Higher Occupancy",
    ],
  },

  {
    id: 2,
    title: "Hostel",
    description:
      "Manage admissions, room allocation and online payments with an all-in-one hostel management platform.",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&auto=format&fit=crop&q=80",
    features: [
      "Student Management",
      "Room Allocation",
      "Online Payments",
      "Analytics",
    ],
  },

  {
    id: 3,
    title: "Apartment",
    description:
      "Publish rental apartments, receive verified enquiries and manage tenants effortlessly.",
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
      "Increase hotel bookings and reach thousands of verified customers through StayZen.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&auto=format&fit=crop&q=80",
    features: [
      "Online Reservations",
      "Business Dashboard",
      "Revenue Reports",
      "24/7 Support",
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
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span>PROPERTY TYPES</span>

          <h2>
            List Every <span>Property</span>
          </h2>

          <p>
            StayZen helps PG owners, hostels,
            apartments and hotels reach
            thousands of verified customers
            every day.
          </p>

        </motion.div>

        <div className="property-wrapper">

          {properties.map((property, index) => (

            <motion.div
              key={property.id}
              className={`property-row ${
                index % 2 === 0 ? "normal" : "reverse"
              }`}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
            >
                          {/* IMAGE */}

              <motion.div
                className="property-image"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.35 }}
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

                <h3>{property.title}</h3>

                <p>{property.description}</p>

                <ul>

                  {property.features.map((feature, i) => (

                    <li key={i}>

                      <FiCheckCircle className="check-icon" />

                      <span>{feature}</span>

                    </li>

                  ))}

                </ul>

                <button className="property-btn">

                  <span>List Your Property</span>

                  <FiArrowRight />

                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );
};

export default PropertyTypes;