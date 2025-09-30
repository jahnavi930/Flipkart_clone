import { Link } from "react-router-dom";

const BeautyDropdown = () => {
  const menu = [
    {
      heading: "Makeup",
      subCategories: ["Lipstick", "Foundation", "Kajal", "Mascara", "Blush"]
    },
    {
      heading: "Skincare",
      subCategories: ["Moisturizers", "Face Wash", "Serums", "Sunscreen"]
    },
    {
      heading: "Hair Care",
      subCategories: ["Shampoos", "Conditioners", "Hair Oils", "Hair Color"]
    },
    {
      heading: "Fragrances & Grooming",
      subCategories: ["Perfumes", "Body Mists", "Deodorants", "Personal Care"]
    },
    {
      heading: "Accessories",
      subCategories: ["Makeup Brushes", "Beauty Tools"]
    }
  ];

  return (
    <div className="absolute top-full left-0 mt-1 bg-gray-100 dark:bg-gray-900 shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity p-6 w-[900px] flex flex-wrap z-50">
      {menu.map((item, index) => (
        <div
          key={item.heading}
          className={`flex-1 min-w-[150px] pr-4 ${
            index !== menu.length - 1 ? "border-r border-gray-300 dark:border-gray-700" : ""
          }`}
        >
          <h3 className="text-red-600 font-bold mb-2">{item.heading}</h3>
          <ul className="space-y-1 text-sm text-gray-800 dark:text-gray-200">
            {item.subCategories.map((sub) => (
              <li key={sub}>
                <Link
                  to={`/${sub.toLowerCase().replace(/\s+/g, "-")}`}
                  className="hover:text-pink-500"
                >
                  {sub}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default BeautyDropdown;
