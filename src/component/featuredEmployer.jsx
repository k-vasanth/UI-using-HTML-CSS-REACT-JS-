import Image from "next/image";
import "./featuredEmployer.css";

function FeaturedEmployers() {
  const employers = [
    {
      name: "TechCorp",
      logo: "src/component/WebStorm.svg",
    },

    { name: "DataWorks", logo: "src/component/Capacitor.svg" },
    { name: "DesignHub", logo: "src/component/CodeIgniter.svg" },
    { name: "CloudSystems", logo: "src/component/CoffeeScript.svg" },
    { name: "InnovateLabs", logo: "src/component/Cosmos BD.svg" },
    { name: "GlobalFinance", logo: "src/component/Gradle.svg" },
  ];

  return (
    <div className="custom-grid">
      {employers.map((employer, i) => (
        <div
          key={i}
          className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <Image
            src={employer.logo}
            alt={employer.name}
            width={150}
            height={80}
            className="w-full h-20 object-contain mb-2"
          />
          <p className="text-center text-sm font-medium">{employer.name}</p>
        </div>
      ))}
    </div>
  );
}

export default FeaturedEmployers;
