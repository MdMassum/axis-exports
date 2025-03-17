import { HashLink } from "react-router-hash-link";

export default function Footer() {
  const quickLinks = [
    { label: "HOME", href: "#home" },
    { label: "CATEGORY", href: "#category" },
    { label: "ABOUT US", href: "#aboutUs" },
    { label: "ENQUIRY", href: "/enquiry" },
    { label: "ADMIN LOGIN", href: "/admin/login" },
  ];

  return (
    <footer className="bg-[#278800] text-white py-6 px-5 md:px-24">
      <div className="flex md:flex-row flex-col md:gap-16 gap-6">
        {/* First Column - Address */}
        <div className="flex flex-col">
          <h3 className="font-bold text-lg">Address</h3>
          <p className="text-sm mt-2">123 Street Name, City, Country</p>
          <p className="text-sm">Email: example@email.com</p>
          <p className="text-sm">Phone: +123 456 7890</p>
        </div>

        {/* Second Column - Quick Links */}
        <div className="flex flex-col">
          <h3 className="font-bold text-lg">Quick Links</h3>
          <ul className="mt-2 ">
            {quickLinks.map((link, index) => (
              <li key={index}>
                {link.href.startsWith("#") ? (
                  <HashLink smooth to={`/${link.href}`} className="hover:underline">
                    {link.label}
                  </HashLink>
                ) : (
                  <a href={link.href} className="hover:underline">
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
