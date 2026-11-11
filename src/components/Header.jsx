import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Award,
  BriefcaseBusiness,
  House,
  Mail,
  Wrench,
} from "lucide-react";
import logo from "../../public/logo.svg";

const navigation = [
  { label: "Services", to: "/services", icon: Wrench },
  { label: "Projects", to: "/projects", icon: BriefcaseBusiness },
  { label: "Contact", to: "/contact", icon: Mail },
  { label: "Certificate", to: "/certificate", icon: Award },
];

const desktopLinkClass =
  "rounded-full px-4 py-2 text-gray-200 hover:bg-white/10 hover:text-amber-300 transition";

const activeMobileLinkClass = {
  "/": "bg-yellow-400/20 text-yellow-200 shadow-[0_0_16px_rgba(250,204,21,0.2)]",
  "/services": "bg-orange-400/20 text-orange-200 shadow-[0_0_16px_rgba(251,146,60,0.2)]",
  "/projects": "bg-blue-400/20 text-blue-200 shadow-[0_0_16px_rgba(96,165,250,0.2)]",
  "/contact": "bg-purple-400/20 text-purple-200 shadow-[0_0_16px_rgba(192,132,252,0.2)]",
  "/certificate": "bg-emerald-400/20 text-emerald-200 shadow-[0_0_16px_rgba(52,211,153,0.2)]",
};

const Header = () => {
  const location = useLocation();
  const mobileNavTheme = {
    "/": "bg-[#101827]/95",
    "/services": "bg-[#18251f]/95",
    "/projects": "bg-[#151d32]/95",
    "/contact": "bg-[#211a2e]/95",
    "/certificate": "bg-[#142823]/95",
  }[location.pathname] || "bg-[#101827]/95";

  return (
    <header className="absolute top-0 left-0 z-50 w-full bg-transparent px-4 py-4 text-white sm:px-6">
      <div className="relative flex items-center justify-between max-w-7xl mx-auto min-h-12">
        {/* Mobile Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-white md:hidden"
          aria-label="CV Lab home"
        >
          <img src={logo} alt="CV Lab logo" width={40} height={40} />
          <span>𝓒𝓥 𝓛𝓪𝓫</span>
        </Link>

        {/* Desktop Navigation Pill */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full border border-white/10 bg-[#111827]/65 p-1.5 text-sm shadow-xl shadow-black/20 backdrop-blur-xl md:flex lg:gap-2 lg:text-base">
          <Link
            to="/"
            className="flex shrink-0 items-center gap-2 rounded-full px-4 py-1.5 text-lg font-bold text-white transition hover:bg-white/10 hover:text-amber-300"
          >
            <img src={logo} alt="CV Lab logo" width={34} height={34} />
            <span>𝓒𝓥 𝓛𝓪𝓫</span>
          </Link>
          {navigation.map(({ label, to }) => (
            <Link key={to} to={to} className={desktopLinkClass}>
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav
        aria-label="Mobile navigation"
        className={`fixed bottom-4 left-1/2 z-50 w-max -translate-x-1/2 rounded-full border border-white/10 ${mobileNavTheme} p-2 shadow-[0_12px_35px_rgba(0,0,0,0.45)] backdrop-blur-2xl transition-colors duration-500 md:hidden`}
      >
        <div className="grid grid-cols-5 gap-1">
          <NavLink
            to="/"
            end
            aria-label="Home"
            className={({ isActive }) =>
              `flex h-12 w-12 items-center justify-center rounded-full transition ${
                isActive
                  ? activeMobileLinkClass["/"]
                  : "text-gray-400 hover:text-white"
              }`
            }
          >
            <House className="h-6 w-6" />
          </NavLink>

          {navigation.map(({ label, to, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex h-12 w-12 items-center justify-center rounded-full transition ${
                  isActive
                    ? activeMobileLinkClass[to]
                    : "text-gray-400 hover:text-white"
                }`
              }
            >
              <Icon className="h-6 w-6" />
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
