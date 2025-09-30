import { Link } from "react-router-dom";

const WomenDropdown = () => {
  const menu = [
    {
      heading: "Western Wear",
      subCategories: ["Tops", "T-Shirts", "Shirts", "Sweatshirts", "Blazers", "Jackets"]
    },
    {
      heading: "Indian Wear",
      subCategories: ["Sarees", "Lehenga Cholis", "Kurtas", "Anarkalis", "Salwar Suits"]
    },
    {
      heading: "Bottomwear",
      subCategories: ["Jeans", "Trousers", "Skirts", "Shorts", "Track Pants", "Leggings"]
    },
    {
      heading: "Footwear",
      subCategories: ["Flats", "Heels", "Sandals", "Sports Shoes", "Boots"]
    },
    {
      heading: "Cosmetics",
      subCategories: ["Lipsticks", "Foundation", "Kajal", "Mascara", "Blush"]
    },
    {
      heading: "Beauty & Personal Care",
      subCategories: ["Shampoos", "Hair Care", "Body Care", "Deodorants", "Skincare"]
    },
    {
      heading: "Jewelry & Accessories",
      subCategories: ["Watches", "Bags", "Belts", "Jewelry", "Sunglasses"]
    },
    {
      heading: "Sports & Activewear",
      subCategories: ["Active Tops", "Track Pants", "Leggings", "Sports Shoes", "Gym Accessories"]
    },
    {
      heading: "Gadgets",
      subCategories: ["Fitness Bands", "Earphones", "Smart Watches"]
    }
  ];

  return (
    <div className="absolute top-full left-0 mt-1 bg-gray-100 dark:bg-gray-900 shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity p-6 w-[1000px] flex flex-wrap z-50">
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

export default WomenDropdown;
