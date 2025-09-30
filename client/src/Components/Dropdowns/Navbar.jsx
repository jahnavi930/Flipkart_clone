import { useState } from "react";
import MenDropdown from "./MenDropdown.jsx";
import WomenDropdown from "./WomenDropdown.jsx";
import KidsDropdown from "./KidsDropdown.jsx";
import HomeDropdown from "./HomeDropdown.jsx";
import BeautyDropdown from "./BeautyDropdown.jsx";

export default function Navbar() {
  const categories = ["Men", "Women", "Kids", "Home & Living", "Beauty", "Studio"];
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (cat) => {
    setActiveCategory((prev) => (prev === cat ? null : cat));
  };

  // Render dropdown content based on active category
  const renderDropdown = () => {
    switch (activeCategory) {
      case "Men":
        return <MenDropdown />;
      case "Women":
        return <WomenDropdown />;
      case "Kids":
        return <KidsDropdown />;
      case "Home & Living":
        return <HomeDropdown />;
      case "Beauty":
        return <BeautyDropdown />;
      default:
        return null;
    }
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 py-5 flex flex-col">

        {/* Navbar categories: side by side */}
        <div className="flex gap-12 text-gray-800 dark:text-gray-200 font-medium">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={`relative cursor-pointer border-b-2 border-transparent focus:outline-none ${
                activeCategory === cat
                  ? cat === "Men"
                    ? "border-pink-500 text-pink-500"
                    : "border-indigo-600 text-indigo-600"
                  : cat === "Men"
                  ? "hover:border-pink-500 hover:text-pink-500"
                  : "hover:border-indigo-600 hover:text-indigo-600"
              }`}
            >
              {cat}
              {cat === "Studio" && (
                <span className="text-xs text-red-600 font-bold ml-1 -translate-y-1">
                  NEW
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Dropdown panel (full width below navbar) */}
        {activeCategory && (
          <div className="mt-2 border-t border-gray-300 dark:border-gray-700 w-full bg-white dark:bg-gray-900 shadow-lg">
            <div className="container mx-auto px-4 py-4">
              {renderDropdown()}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
