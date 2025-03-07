export default function Footer() {
  const quickLinks = ["HOME", "CATEGORY", "ABOUT US", "LOGIN", "REGISTER"];

  return (
    <footer className="bg-green-800 text-white py-6 px-5 md:px-24">
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
                <a href="#" className="hover:underline">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </footer>
  );
}
