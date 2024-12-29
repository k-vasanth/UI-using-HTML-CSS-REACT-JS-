import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./section.css";

function HeroSection() {
  return (
    <div className="bg-gradient-to-r text-white py-16">
      <div className="container">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Find Your Dream Job Today
        </h1>
        <p className="text-xl mb-8 text-center">
          Over 10,000 job opportunities waiting for you
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="flex gap-2 mb-6">
            <input
              type="text"
              placeholder="Job title, keywords, or company"
              className="input flex-1"
            />
            <button className="bg-yellow-400 text-gray-900 hover:bg-yellow-500 text-lg px-4 py-2">
              <Search className="w-5 h-5 mr-2" />
              Search Jobs
            </button>
          </div>

          <div className="text-center pt-3">
            <button className="text-gray-600">
              Popular: Web Developer, Data Analyst, Project Manager
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
