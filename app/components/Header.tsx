'use client'
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    // ==== for menu scroll
    const pageLink = document.querySelectorAll<HTMLAnchorElement>(".ud-menu-scroll");
  
    pageLink.forEach((elem) => {
      elem.addEventListener("click", (e: MouseEvent) => {
        e.preventDefault();
        const href = elem.getAttribute("href");
        if (!href) return;
        
        const target = document.querySelector<HTMLElement>(href);
        target?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    });
  
    const onScroll = () => {
      const sections = document.querySelectorAll<HTMLAnchorElement>(".ud-menu-scroll");
      const scrollPos = window.scrollY;
  
      sections.forEach((currLink) => {
        const val = currLink.getAttribute("href");
        if (!val) return;
        
        const selector = val.startsWith('#') ? val : `#${val}`;
        const refElement = document.querySelector<HTMLElement>(selector);
        if (!refElement) return;
        
        const rect = refElement.getBoundingClientRect();
        const offsetTop = rect.top + window.scrollY;
        const scrollTopMinus = scrollPos + 73;
  
        if (offsetTop <= scrollTopMinus &&
            offsetTop + rect.height > scrollTopMinus) {
          document.querySelectorAll<HTMLElement>(".ud-menu-scroll")
            .forEach(link => link.classList.remove("active"));
          currLink.classList.add("active");
        } else {
          currLink.classList.remove("active");
        }
      });
    };
  
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#team", label: "Team" },
    { href: "#mission", label: "Mission" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];


  return (
    <header className="ud-header sticky left-0 top-0 z-40 flex w-full items-center bg-transparent">
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <Link href="#hero" className="navbar-logo block w-full py-5">
              <Image
                src="/images/logo-black.svg"
                alt="Logo"
                width={160}
                height={40}
                className="header-logo w-full"
                priority
              />
            </Link>
          </div>

          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={toggleNavbar}
                aria-label="Toggle navigation"
                className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
              >
                {[0, 1, 2].map((i) => (
                  <span key={i} className="relative my-[6px] block h-[2px] w-[30px] bg-white" />
                ))}
              </button>

              <nav className={`absolute right-4 top-full ${navbarOpen ? 'block' : 'hidden'} w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:py-0 lg:shadow-none dark:lg:bg-transparent`}>
                <ul className="block lg:flex 2xl:ml-20">
                  {navLinks.map(({ href, label }) => (
                    <li key={label} className="group relative">
                      <Link
                        href={href}
                        className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:group-hover:opacity-70"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="flex items-center justify-end pr-16 lg:pr-0">
            <div className="hidden sm:flex">
            <a
                  href="#contact"
                  className="ud-menu-scroll signUpBtn rounded-md bg-white bg-opacity-20 px-6 py-2 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
                >
                  Contact
                </a>
            </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;