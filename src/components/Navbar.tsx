import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
  } from "../components/ui/navigation-menu"
  import { DarkModeToggle } from "./darkModeToggle";

  const Work: { title: string; href: string; description: string }[] = [
    {
      title: "All",
      href: "/properteasy",
      description:
        "Shows a preview off all my projects",
    },
    {
      title: "ProperTEasy",
      href: "/properteasy",
      description:
        "A full stack property website",
    },
    {
      title: "GameZone",
      href: "../gamezone",
      description:
        "A full stack Hire Store",
    }
  ]
  
  export default function Navbar() {
    return(
        <NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Work</NavigationMenuTrigger>
      <NavigationMenuContent>
      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {Work.map((work) => (
                <NavigationMenuLink
                  key={work.title}
                  title={work.title}
                  href={work.href}
                >
                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">{work.title}</h3>
                  {work.description}
                </NavigationMenuLink>
              ))}
            </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
          <Link href="#about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <DarkModeToggle/>
  </NavigationMenuList>
</NavigationMenu>

    )
  }