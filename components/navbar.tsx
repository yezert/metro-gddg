import Link from "next/link";
import ThemeChanger from "./theme-changer";
import { X, XIcon } from "lucide-react";
import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

type NavItem = {
  label: string;
  href: `/${string}` | `${"http" | "https"}://${string}`;
};

export default function Navbar() {
  const navigation: NavItem[] = [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Essay", href: "/essay" },
  ];

  return (
    <div className="w-full border border-b">
      <nav className="container relative flex flex-wrap items-center justify-between p-4 mx-auto lg:justify-between xl:px-8">
        <Link href="/">
          <span className="flex items-center dark:text-gray-100 space-x-2 text-xl font-medium">
            <span className="leading-6 px-2 pb-2 pt-1 mr-1 border-primary bg-transparent border-2 rounded-br-none rounded-lg">
              blog-site
            </span>
            Demo
          </span>
        </Link>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link
                  href={menu.href}
                  className="inline-block px-4 py-2 text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                >
                  {menu.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          {/* twitter, github icon */}
          <Button variant="ghost" size="icon">
            <TwitterLogoIcon className="h-[1.2rem] w-[1.2rem]" />
          </Button>
          <Button variant="ghost" size="icon">
            <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem]" />{" "}
          </Button>
          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
}
