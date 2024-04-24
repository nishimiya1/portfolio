import "../components/components.css";
import { GitHub, LinkedIn, Instagram } from "@mui/icons-material";
const socialLinks = [
  {
    href: "https://www.instagram.com/raaald1/",
    label: "Instagram",
    icon: <Instagram fontSize="small" />,
    iconClass: "text-orange-600",
  },
  {
    href: "https://www.linkedin.com/in/gerald-angelo-diongzon/",
    label: "LinkedIn",
    icon: <LinkedIn fontSize="small" />,
    iconClass: "text-blue-600",
  },
  {
    href: "https://github.com/nishimiya1",
    label: "Github",
    icon: <GitHub fontSize="small" />,
  },
];

function SocialLinks() {
  return (
    <div
      className="uppercase flex items-center justify-center flex-col col-span-6 xl:col-start-2 xl1:fixed"
      data-text-slide="true"
      data-text-slide-lines="span > span"
      data-no-screen-padding="1"
    >
      <span className="overflow-hidden">
        <span className="block will-change-transform">Socials:</span>
        <span className="block will-change-transform">
          {socialLinks.map(({ href, label, icon, iconClass }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`hover:text-blue-500 transition-colors duration-300 ${iconClass}`}
            >
              {icon}
            </a>
          ))}
        </span>
      </span>
    </div>
  );
}

function FooterContent() {
  return (
    <div className="grid grid-cols-4 lg:grid-cols-8 gap-gr1 p-md1 max-w-container mx-auto">
      <div
        className="flex flex-col col-span-1 lg:col-start-1 flex flex-col xl:fixed"
        data-text-slide="true"
        data-text-slide-lines="span > span"
        data-no-screen-padding="1"
      >
        <span className="overflow-hidden">
          <span className="block will-change-transform">
            <div>built by</div>
          </span>
        </span>
        <span className="overflow-hidden">
          <span className="block will-change-transform">
            Gerald Angelo Diongzon
          </span>
        </span>
      </div>
      <SocialLinks />
      <div
        className="uppercase flex items-end flex-col col-span-3 col-start-3 lg:col-start-8 xl1:fixed xl:right-md1 xl:bottom-md1 flex flex-col"
        data-text-slide="true"
        data-text-slide-lines="span > span"
        data-no-screen-padding="1"
      >
        <span className="overflow-hidden">
          <span className="block will-change-transform">
            Personal Portfolio
          </span>
        </span>
        <span className="overflow-hidden">
          <span className="block will-change-transform">2024</span>
        </span>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer
      className="z-[30] fixed bottom-0 left-0 w-full text-xs font-medium font-secondary text-secondary uppercase leading-[1.3] max-lg:opacity-0 max-lg:pointer-events-none max-lg:transition-opacity max-lg:duration-500 max-lg:menu-active:opacity-100"
      style={{ color: "rgb(21,20,23)" }}
    >
      <FooterContent />
    </footer>
  );
}

export default Footer;
