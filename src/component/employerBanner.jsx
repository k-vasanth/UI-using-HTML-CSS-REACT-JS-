import { Button } from "./ui/button";
import "./employerBanner.css";

function EmployerBanner() {
  return (
    <div className="gradient-bg">
      <div className="container">
        <div className="header-section">
          <div className="header-title">EMPLOYERS</div>
          <div className="flex items-center gap-4">
            <span className="text-white">
              WELCOME OFFER - FREE JOB Postings and Much More.
            </span>
            <div className="button-container">
              <Button variant="secondary" className="secondary text-sm">
                Register for FREE
              </Button>
              <Button variant="secondary" className="secondary text-sm">
                Post A Job
              </Button>
              <Button variant="secondary" className="secondary text-sm">
                Sales Enquiry
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployerBanner;
