import { Button } from "./ui/button";
import "./jobCategory.css";

function JobCategories() {
  const categories = [
    "Technology",
    "Healthcare",
    "Finance",
    "Education",
    "Marketing",
    "Sales",
    "Customer Service",
    "Engineering",
    "Design",
    "Human Resources",
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Explore Job Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category) => (
            <button
              key={category}
              className="button button-outline bg-white hover:bg-indigo-50 text-gray-700 hover:text-indigo-600"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default JobCategories;
