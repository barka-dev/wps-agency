'use client'

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Handle theme changes
    const handleThemeChange = () => {
      setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    };

    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#pricing", label: "Pricing" },
    { href: "#team", label: "Team" },
    { href: "#contact", label: "Contact" }
  ];

  const pageLinks = [
    { href: "/about", label: "About Page" },
    { href: "/pricing", label: "Pricing Page" },
    { href: "/contact", label: "Contact Page" },
    { href: "/blog", label: "Blog Grid Page" },
    { href: "/blog/details", label: "Blog Details Page" },
    { href: "/signup", label: "Sign Up Page" },
    { href: "/signin", label: "Sign In Page" },
    { href: "/404", label: "404 Page" }
  ];

  return (
    <header className="ud-header absolute left-0 top-0 z-40 flex w-full items-center bg-transparent">
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <Link href="/" className="navbar-logo block w-full py-5">
              <Image
                src="/images/logo-white.svg"
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
                        className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:opacity-70"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}

                  <li className="submenu-item group relative">
                    <button className="relative mx-8 flex w-full items-center justify-between py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-8 lg:inline-flex lg:py-6 lg:pl-0 lg:pr-4 lg:text-white lg:group-hover:opacity-70">
                      Pages
                      <svg className="ml-2 h-5 w-5 fill-current" viewBox="0 0 20 20">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                    </button>
                    <div className="submenu invisible absolute left-0 top-full hidden w-[250px] rounded-sm bg-white p-4 transition-all group-hover:visible group-hover:block dark:bg-dark-2 lg:shadow-lg">
                      {pageLinks.map(({ href, label }) => (
                        <Link
                          key={label}
                          href={href}
                          className="block rounded px-4 py-[10px] text-sm text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary"
                        >
                          {label}
                        </Link>
                      ))}
                    </div>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center justify-end pr-16 lg:pr-0">
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="inline-flex cursor-pointer items-center"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>

              <div className="hidden sm:flex">
                <Link
                  href="/signin"
                  className="loginBtn px-[22px] py-2 text-base font-medium text-white hover:opacity-70"
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="signUpBtn rounded-md bg-white bg-opacity-20 px-6 py-2 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;