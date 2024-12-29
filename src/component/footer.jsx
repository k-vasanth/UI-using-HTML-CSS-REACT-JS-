import Link from "next/link";
import "./footer.css";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container">
        <div className="grid md:grid-cols-4">
          <div>
            <h3>JobNexus</h3>
            <p className="text-sm text-gray-400">
              Connecting talent with opportunities.
            </p>
          </div>
          <div>
            <h4>For Job Seekers</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/search"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Search Jobs
                </Link>
              </li>
              <li>
                <Link
                  href="/create-profile"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Create Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/job-alerts"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Job Alerts
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>For Employers</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/post-job"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Post a Job
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Resources
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          © 2023 JobRinger. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
