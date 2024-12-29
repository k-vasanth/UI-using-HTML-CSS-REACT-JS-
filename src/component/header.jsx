import Link from "next/link";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="head">
          <Link href="/" className="logo">
            JobRinger
          </Link>

          <nav>
            <Link href="/jobs" className="nav-link">
              Find Jobs
            </Link>
            <Link href="/employers" className="nav-link">
              For Employers
            </Link>
            <Link href="/resources" className="nav-link">
              Resources
            </Link>
          </nav>

          <div className="button-container">
            <Button variant="ghost" size="sm" className="ghost">
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
            <Button variant="outline" size="sm" className="outline">
              Sign In
            </Button>
            <Button size="sm" className="default">
              Post a Job
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
