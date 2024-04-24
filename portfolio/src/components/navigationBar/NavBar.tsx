import { useState } from "react";
import "../components.css";
import { Link } from "react-router-dom";
import { PictureAsPdfRounded } from "@mui/icons-material";

export function Logo() {
  return (
    <div className="col-span-1">
      <Link
        to="/"
        className="logo inline-flex not-loaded:pointer-events-none flex-col font-extrabold text-secondary leading-[80%] text-logo -tracking-logo xl:fixed xl:left-md1 xl:top-md1"
      >
        <span className="flex">
          <span>GD</span>
          <span className="font-secondary max-lg:text-[16px] lg:text-[17px] block pl-xs0 max-lg:-translate-y-[15%] lg:-translate-y-[19%]">
            ©
          </span>
        </span>
        <span>DN</span>
      </Link>
    </div>
  );
}

function ContactInfo() {
  return (
    <div className="col-span-3 max-lg:hidden">
      <p
        className="font-secondary font-medium uppercase text-xs text-secondary leading-[1.3] undefined flex flex-col"
        data-text-slide="true"
        data-text-slide-lines="span > span"
        data-no-screen-padding="1"
      >
        <span className="overflow-hidden">
          <span className="block will-change-transform">Contacts:</span>
        </span>
        <span className="overflow-hidden">
          <span className="block will-change-transform">
            <a className="link" href="mailto:geralddiongzon12@gmail.com">
              geralddiongzon12@gmail.com
            </a>
          </span>
        </span>
        <span className="overflow-hidden">
          <span className="block will-change-transform">
            <a className="link" href="tel:+63 9989052051">
              +63 9989052051
            </a>
          </span>
        </span>
      </p>
    </div>
  );
}

function BioInfo() {
  return (
    <div className="col-span-2 max-lg:hidden">
      <p
        className="font-secondary font-medium uppercase text-xs text-secondary leading-[1.3] undefined flex flex-col"
        data-text-slide="true"
        data-text-slide-lines="span > span"
        data-no-screen-padding="1"
      >
        <span className="overflow-hidden">
          <span className="block will-change-transform">
            Computer Engineer Graduate
          </span>
        </span>
        <span className="overflow-hidden">
          <span className="block will-change-transform">
            Aspiring Web Developer
          </span>
        </span>
        <span className="overflow-hidden">
          <span className="block will-change-transform">
            Honing my skills in Web Development
          </span>
        </span>
      </p>
    </div>
  );
}

function CVLink() {
  return (
    <div className="col-span-1 max-lg:hidden">
      <div
        className="font-secondary text-xs font-medium uppercase text-secondary leading-[1.3] flex flex-col"
        data-text-slide="true"
        data-text-slide-lines="span > span"
        data-no-screen-padding="1"
      >
        <span className="overflow-hidden">
          <span className="block will-change-transform">Curriculum Vitae:</span>
        </span>
        <span className="overflow-hidden">
          <span className="block will-change-transform">
            <div className="flex gap-2">
              <a
                className="link no-underline"
                href="src/assets/curriculumVitae.pdf"
                target="_blank"
                aria-label="Github"
                rel="noopener noreferrer"
              >
                <PictureAsPdfRounded fontSize="small" />
              </a>
            </div>
          </span>
        </span>
      </div>
    </div>
  );
}

function NavigationLinks() {
  const [isProjectsHovered, setIsProjectsHovered] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);

  return (
    <div className="col-span-1 max-lg:hidden">
      <div
        className="flex-col items-end uppercase text-secondary font-secondary text-xs font-medium leading-[1.3] xl1:fixed xl:right-md1 xl:top-md1 flex flex-col"
        data-text-slide="true"
        data-text-slide-lines="span > span"
        data-no-screen-padding="1"
      >
        <span className="overflow-hidden">
          <span className="block will-change-transform">
            <Link
              to={"/"}
              className="group flex home-link undefined items-center"
              onMouseEnter={() => setIsProjectsHovered(true)}
              onMouseLeave={() => setIsProjectsHovered(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="7"
                viewBox="0 0 9 7"
                fill="none"
                className={`relative left-0 top-1/2 visible group-not-active:opacity-0 group-not-active:transform translate-x-1/4 will-change-transform transition-trop duration-500 mr-xs -translate-y-[12%] ${
                  isProjectsHovered ? "opacity-100" : "opacity-0"
                }`}
              >
                <path
                  d="M8.69387 3.69631C8.87294 3.51724 8.87294 3.2269 8.69387 3.04783L5.77572 0.129688C5.59665 -0.0493837 5.30632 -0.0493837 5.12725 0.129688C4.94817 0.30876 4.94817 0.599093 5.12725 0.778165L7.72115 3.37207L5.12725 5.96598C4.94817 6.14505 4.94817 6.43538 5.12725 6.61445C5.30632 6.79353 5.59665 6.79353 5.77572 6.61445L8.69387 3.69631ZM0.3396 3.83061L8.36963 3.83061L8.36963 2.91353L0.3396 2.91353L0.3396 3.83061Z"
                  fill="currentColor"
                ></path>
              </svg>

              <span aria-label="Projects"> Projects</span>
            </Link>
          </span>
        </span>
        <span className="overflow-hidden">
          <span className="block will-change-transform">
            <Link
              to={"/about"}
              className="group flex home-link undefined items-center "
              onMouseEnter={() => setIsAboutHovered(true)}
              onMouseLeave={() => setIsAboutHovered(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="7"
                viewBox="0 0 9 7"
                fill="none"
                className={`relative left-0 top-1/2 group-not-active:opacity-0 group-not-active:transform translate-x-1/4 will-change-transform transition-trop duration-500 mr-xs -translate-y-[12%] ${
                  isAboutHovered ? "opacity-100" : "opacity-0"
                }`}
              >
                <path
                  d="M8.69387 3.69631C8.87294 3.51724 8.87294 3.2269 8.69387 3.04783L5.77572 0.129688C5.59665 -0.0493837 5.30632 -0.0493837 5.12725 0.129688C4.94817 0.30876 4.94817 0.599093 5.12725 0.778165L7.72115 3.37207L5.12725 5.96598C4.94817 6.14505 4.94817 6.43538 5.12725 6.61445C5.30632 6.79353 5.59665 6.79353 5.77572 6.61445L8.69387 3.69631ZM0.3396 3.83061L8.36963 3.83061L8.36963 2.91353L0.3396 2.91353L0.3396 3.83061Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span aria-label="About">about</span>
            </Link>
          </span>
        </span>
      </div>
    </div>
  );
}

function NavBar() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
    if (!isMenuActive) {
      document.documentElement.classList.add("is-menu-active");
    } else {
      document.documentElement.classList.remove("is-menu-active");
    }
  };
  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[30] ${
          isMenuActive ? "is-menu-active" : ""
        }`}
        style={{ color: "rgb(21, 20, 23)" }}
      >
        <div className="grid grid-cols-4 lg:grid-cols-8 gap-gr1 p-md1 max-w-container mx-auto">
          <Logo />
          <div
            className="col-span-1 col-start-4 lg:hidden flex flex-col items-end cursor-pointer pointer-events-auto"
            data-menu-trigger="true"
            onClick={toggleMenu}
          >
            <div className="h-[2px] w-[20px] bg-black menu-active:rotate-45 menu-active:translate-x-[2px] menu-active:translate-y-[4px] transition-transform duration-500"></div>
            <div className="h-[2px] w-[20px] bg-black translate-y-[4px] menu-active:mt-0 menu-active:-rotate-45 menu-active:translate-x-[2px] menu-active:translate-y-[2px] transition-transform duration-500"></div>
          </div>
          <ContactInfo />
          <BioInfo />
          <CVLink />
          <NavigationLinks />
        </div>
      </nav>
      <div
        className={`fixed inset-0 bg-white z-[20] p-md1 h-screen pointer-events-none opacity-0 ${
          isMenuActive ? "opacity-100 pointer-events-auto" : ""
        } lg:hidden flex items-center justify-center transition-opacity duration-500`}
        data-menu="true"
      >
        <div className="grid grid-cols-4 gap-gr1 w-full max-w-[500px]">
          <div className="col-span-4">
            <div
              className="flex-col items-end uppercase text-secondary text-x14 font-bold leading-none flex flex-col"
              data-text-slide="true"
              data-text-slide-lines="span > span"
              data-no-screen-padding="1"
            >
              <span className="overflow-hidden">
                <span className="block will-change-transform">
                  <Link
                    to={"/"}
                    className="group flex home-link pointer-events-none menu-active:pointer-events-auto items-center is-active"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="54"
                      height="42"
                      viewBox="0 0 9 7"
                      fill="none"
                      className="relative left-0 top-1/2 group-not-active:opacity-0 group-not-active:translate-x-[25%] will-change-transform transition-trop duration-500 xs1:mr-md1 sm1:mr-xl1"
                    >
                      <path
                        d="M8.69387 3.69631C8.87294 3.51724 8.87294 3.2269 8.69387 3.04783L5.77572 0.129688C5.59665 -0.0493837 5.30632 -0.0493837 5.12725 0.129688C4.94817 0.30876 4.94817 0.599093 5.12725 0.778165L7.72115 3.37207L5.12725 5.96598C4.94817 6.14505 4.94817 6.43538 5.12725 6.61445C5.30632 6.79353 5.59665 6.79353 5.77572 6.61445L8.69387 3.69631ZM0.3396 3.83061L8.36963 3.83061L8.36963 2.91353L0.3396 2.91353L0.3396 3.83061Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <span aria-label="Project">PRJCT</span>
                  </Link>
                </span>
              </span>
              <span className="overflow-hidden">
                <span className="block will-change-transform">
                  <Link
                    to={"/About"}
                    className="group flex home-link pointer-events-none menu-active:pointer-events-auto items-center is-active"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="54"
                      height="42"
                      viewBox="0 0 9 7"
                      fill="none"
                      className="relative left-0 top-1/2 group-not-active:opacity-0 group-not-active:translate-x-[25%] will-change-transform transition-trop duration-500 xs1:mr-md1 sm1:mr-xl1"
                    >
                      <path
                        d="M8.69387 3.69631C8.87294 3.51724 8.87294 3.2269 8.69387 3.04783L5.77572 0.129688C5.59665 -0.0493837 5.30632 -0.0493837 5.12725 0.129688C4.94817 0.30876 4.94817 0.599093 5.12725 0.778165L7.72115 3.37207L5.12725 5.96598C4.94817 6.14505 4.94817 6.43538 5.12725 6.61445C5.30632 6.79353 5.59665 6.79353 5.77572 6.61445L8.69387 3.69631ZM0.3396 3.83061L8.36963 3.83061L8.36963 2.91353L0.3396 2.91353L0.3396 3.83061Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <span aria-label="About">ABT</span>
                  </Link>
                </span>
              </span>
            </div>
          </div>
          <div className="col-span-2">
            <p
              className="text-black font-medium uppercase text-xs leading-[1.3] undefined flex flex-col"
              data-text-slide="true"
              data-text-slide-lines="span > span"
              data-no-screen-padding="1"
            >
              <span className="overflow-hidden">
                <span className="block will-change-transform">
                  Available for Freelance
                </span>
              </span>
              <span className="overflow-hidden">
                <span className="block will-change-transform">
                  <a className="link" href="mailto:geralddiongzon12@gmail.com">
                    geralddiongzon12@gmail.com
                  </a>
                </span>
              </span>
              <span className="overflow-hidden">
                <span className="block will-change-transform">
                  <a className="link" href="tel:+63 99890520521">
                    +63 99890520521
                  </a>
                </span>
              </span>
            </p>
          </div>
          <div className="col-span-2">
            <p
              className="text-black font-medium uppercase text-xs leading-[1.3] undefined flex flex-col"
              data-text-slide="true"
              data-text-slide-lines="span > span"
              data-no-screen-padding="1"
            >
              <span className="overflow-hidden">
                <span className="block will-change-transform">
                  Web Developer
                </span>
              </span>
              <span className="overflow-hidden">
                <span className="block will-change-transform">
                  Minimalist / Neo-brutalism Design
                </span>
              </span>
            </p>
          </div>
          <div className="col-span-2">
            <div
              className="text-black font-medium uppercase text-xs leading-[1.3] undefined flex flex-col"
              data-text-slide="true"
              data-text-slide-lines="span > span"
              data-no-screen-padding="1"
            >
              <span className="overflow-hidden">
                <span className="block will-change-transform">Social :</span>
              </span>
              <span className="overflow-hidden">
                <span className="block will-change-transform">
                  <div className="flex gap-x-xs2">
                    <a
                      href="https://www.instagram.com/raaald1/"
                      target="_blank"
                      className="link no-underline"
                      aria-label="Instagram"
                    >
                      IG
                    </a>
                    <a
                      href="https://www.linkedin.com/in/gerald-angelo-diongzon/"
                      target="_blank"
                      className="link no-underline"
                      aria-label="LinkedIn"
                    >
                      LI
                    </a>
                    <a
                      href="https://github.com/nishimiya1"
                      target="_blank"
                      className="link no-underline"
                      aria-label="Github"
                    >
                      GH
                    </a>
                  </div>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
