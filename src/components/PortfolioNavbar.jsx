import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Image,
} from "@nextui-org/react";

export default function PortfolioNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      {/*
      //  The hambruger menu does not work right now
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
  </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>
      */}
      <NavbarBrand className="">
        <Link color="foreground" href="/" className="">
          <img
            alt="Gordon Lei"
            src="/img/profile.png"
            className="h-10 w-10 mx-4"
          />
          <p className="font-bold text-inherit">Gordon Lei</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/about">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/experiences" aria-current="page">
            Experiences
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/projects">
            Projects
          </Link>
        </NavbarItem>
        {/* 
        <NavbarItem>
          <Link color="foreground" href="/resume">
            Resume
          </Link>
        </NavbarItem>
        */}
        <NavbarItem>
          <Link color="foreground" href="/contact">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      {
        //  IDK WHY THIS DOES NOT WORK
        /*
        <NavbarMenu>
        {menuItems.map((item, index) => {
          console.log(item);
          return (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color={
                  index === 2
                    ? "warning"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                href="#"
                size="lg"
              >
                PINEAPPLE
                {item}
              </Link>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
      */
      }
    </Navbar>
  );
}
