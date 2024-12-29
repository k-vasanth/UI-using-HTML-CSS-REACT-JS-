import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import "./searchSection.css";

function SearchSection() {
  const jobTags = [
    "Fresher",
    "Work From Home",
    "WFH",
    "IT",
    "HR",
    "Back Office",
    "BPO Jobs",
    "ITES",
    "Finance",
    "Accounts",
    "Medical",
    "Pharma",
    "Manager",
    "Developer",
    "Marketing",
    "Engineering",
    "Non Government Jobs",
  ];

  return (
    <div className="bg-gradient-to-r py-8">
      <div className="container">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-blue-900 mb-2">
            BRINGING YOU THE PERFECT JOB!
          </h1>
          <p className="text-blue-800">11,000+ JOBS to Apply</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search Jobs Now"
              className="input flex-1"
            />
            <button className="bg-yellow-400 text-black hover:bg-yellow-500">
              Search
            </button>
          </div>

          <div className="flex justify-center gap-2">
            <button className="bg-white">View Jobs</button>
            <button className="bg-yellow-400 text-black hover:bg-yellow-500">
              Register For FREE
            </button>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {jobTags.map((tag) => (
            <span
              key={tag}
              className="bg-white/80 px-3 py-1 rounded-full text-sm text-blue-800 hover:bg-white cursor-pointer"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
