import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { MapPin, Clock, DollarSign } from "lucide-react";
import "./featuredJobs.css";

const jobs = [
  {
    title: "Senior Frontend Developer",
    company: "TechCorp",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120k - $150k",
    tags: ["React", "TypeScript", "Remote"],
  },
  {
    title: "Data Scientist",
    company: "DataWorks",
    location: "New York, NY",
    type: "Full-time",
    salary: "$100k - $130k",
    tags: ["Python", "Machine Learning", "SQL"],
  },
  {
    title: "UX/UI Designer",
    company: "DesignHub",
    location: "London, UK",
    type: "Contract",
    salary: "£400 - £500 per day",
    tags: ["Figma", "Adobe XD", "Sketch"],
  },
  {
    title: "DevOps Engineer",
    company: "CloudSystems",
    location: "Remote",
    type: "Full-time",
    salary: "$110k - $140k",
    tags: ["AWS", "Docker", "Kubernetes"],
  },
];

function FeaturedJobs() {
  return (
    <div className="container pt-4">
      <h2>Featured Jobs</h2>
      <div className="grid md:grid-cols-2">
        {jobs.map((job, index) => (
          <div key={index} className="card">
            <div className="card-content">
              <h3 className="card-title">{job.title}</h3>
              <p className="card-company">{job.company}</p>
              <div className="card-details">
                <div className="card-detail">
                  <MapPin className="card-detail-icon" />
                  {job.location}
                </div>
                <div className="card-detail">
                  <Clock className="card-detail-icon" />
                  {job.type}
                </div>
                <div className="card-detail">
                  <DollarSign className="card-detail-icon" />
                  {job.salary}
                </div>
              </div>
              <div className="card-details">
                {job.tags.map((tag, i) => (
                  <span key={i} className="badge badge-secondary">
                    {tag}
                  </span>
                ))}
              </div>
              <button className="button button-primary w-full">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8 pb-4">
        <button className="button button-outline">View All Jobs</button>
      </div>
    </div>
  );
}

export default FeaturedJobs;
