import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import animation library

const sectionsData = [
  { id: "product-details", title: "Product Details", content: "Product details content..." },
  { id: "how-to-apply", title: "How To Apply", content: "How to apply content..." },
  { id: "ingredient", title: "Ingredient", content: "Ingredients content..." },
  { id: "what-makes-it-advance", title: "What Makes It Advance", content: "Advanced features content..." },
  { id: "product-specification", title: "Product Specification", content: "Product specs content..." },
];

const FAQ = () => {
  const [activeSection, setActiveSection] = useState("product-details");

  const handleClick = (id) => {
    setActiveSection(id);
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Navigation Bar */}
      <ul className="flex justify-between font-semibold list-none  w-full border-b-[1px] border-gray-400 sticky top-0 bg-white z-10">
        {sectionsData.map((section) => (
          <li key={section.id}>
            <button
              className={`px-4 py-2 transition-all duration-300 ${
                activeSection === section.id ? "py-2 border-b-2 border-black" : ""
              }`}
              onClick={() => handleClick(section.id)}
            >
              {section.title}
            </button>
          </li>
        ))}
      </ul>

      {/* Animated Section Transition */}
      <div className="w-full mt-6 relative">
        <AnimatePresence mode="wait">
          {sectionsData
            .filter((section) => section.id === activeSection)
            .map((section) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 50, scale: 0.95 }} // Start position
                animate={{ opacity: 1, y: 0, scale: 1 }} // Animation effect
                exit={{ opacity: 0, y: -50, scale: 0.95 }} // Exit animation
                transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth transition
                className="w-full p-6 bg-gray-100 rounded-lg shadow-lg mb-4"
              >
                <h4 className="font-semibold text-lg mb-4">{section.title}</h4>
                <p className="leading-relaxed text-gray-700">{section.content}</p>
              </motion.div>
            ))}
        </AnimatePresence>

        {/* Other Sections Stay Below */}
        {sectionsData
          .filter((section) => section.id !== activeSection)
          .map((section) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.75, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-full p-6 bg-gray-50 rounded-lg shadow-md mb-4"
            >
              <h4 className="font-semibold text-lg mb-4">{section.title}</h4>
              <p className="leading-relaxed text-gray-600">{section.content}</p>
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default FAQ;
