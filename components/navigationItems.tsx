import { NavbarItem } from "@heroui/navbar";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@heroui/dropdown";
import NextLink from "next/link";
import clsx from "clsx";
import { link as linkStyles } from "@heroui/theme";
import { useState } from "react";
import { mosqueMockup } from "@/config/mosqueMockup";
import { projectMockup } from "@/config/projectMockup";
import Link from "next/link";
import { useRouter } from "next/router";

export const NavigationItems = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const router = useRouter();

  const devrekani = mosqueMockup.mosque.filter(
    (item) => item.local === "Devrekani"
  );
  const göl = mosqueMockup.mosque.filter((item) => item.local === "Göl");
  const akkaya = mosqueMockup.mosque.filter((item) => item.local === "Akkaya");
  const kuzyaka = mosqueMockup.mosque.filter(
    (item) => item.local === "Kuzyaka"
  );

  return (
    <div className="hidden lg:flex gap-6 justify-start ml-2">
      <NavbarItem>
        <NextLink
          className={clsx(
            linkStyles({ color: "foreground" }),
            "data-[active=true]:text-primary data-[active=true]:font-medium"
          )}
          href="/home"
        >
          Ana Sayfa
        </NextLink>
      </NavbarItem>

      <NavbarItem>
        <NextLink
          className={clsx(
            linkStyles({ color: "foreground" }),
            "data-[active=true]:text-primary data-[active=true]:font-medium"
          )}
          href="/about"
        >
          Hakkımızda
        </NextLink>
      </NavbarItem>
      <div
        className="relative"
        onMouseEnter={() => setOpenDropdown(2)}
        onMouseLeave={() => setOpenDropdown(null)}
      >
        <Dropdown isOpen={openDropdown === 2}>
          <DropdownTrigger>
            <Link
              href={"/tubitak"}
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium cursor-pointer"
              )}
            >
              Proje
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-default-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownSection
              className="cursor-pointer"
              onClick={() => router.push("/tubitak")}
              title="Tübitak-1002A Projesi"
            >
              {projectMockup.project.map((item) => (
                <DropdownItem key={item.id} href={`/project/${item.id}`}>
                  {item.name}
                </DropdownItem>
              ))}
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
      </div>
      <div
        className="relative"
        onMouseEnter={() => setOpenDropdown(0)}
        onMouseLeave={() => setOpenDropdown(null)}
      >
        <Dropdown isOpen={openDropdown === 0}>
          <DropdownTrigger>
            <NextLink
              href="/divanlar"
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium cursor-pointer"
              )}
            >
              Divanlar
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-default-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </NextLink>
          </DropdownTrigger>
          <DropdownMenu className="max-h-72 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
            <DropdownSection title="Devrekani">
              {devrekani.map((item) => (
                <DropdownItem href={`/detail/${item.id}`} key={item.id}>
                  {item.name}
                </DropdownItem>
              ))}
            </DropdownSection>
            <DropdownSection title="Göl">
              {göl.map((item) => (
                <DropdownItem href={`/detail/${item.id}`} key={item.id}>
                  {item.name}
                </DropdownItem>
              ))}
            </DropdownSection>
            <DropdownSection title="Akkaya">
              {akkaya.map((item) => (
                <DropdownItem href={`/detail/${item.id}`} key={item.id}>
                  {item.name}
                </DropdownItem>
              ))}
            </DropdownSection>
            <DropdownSection title="Kuzyaka">
              {kuzyaka.map((item) => (
                <DropdownItem href={`/detail/${item.id}`} key={item.id}>
                  {item.name}
                </DropdownItem>
              ))}
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
      </div>
      <NavbarItem>
        <NextLink
          className={clsx(
            linkStyles({ color: "foreground" }),
            "data-[active=true]:text-primary data-[active=true]:font-medium"
          )}
          href="/somut"
        >
          Somut Olmayan Miras Değeri
        </NextLink>
      </NavbarItem>
      <NavbarItem>
        <NextLink
          className={clsx(
            linkStyles({ color: "foreground" }),
            "data-[active=true]:text-primary data-[active=true]:font-medium"
          )}
          href="/roportaj"
        >
          Röportajlar
        </NextLink>
      </NavbarItem>

      <div
        className="relative"
        onMouseEnter={() => setOpenDropdown(1)}
        onMouseLeave={() => setOpenDropdown(null)}
      >
        <Dropdown isOpen={openDropdown === 1}>
          <DropdownTrigger>
            <p
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium cursor-pointer"
              )}
            >
              Yayınlar
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-default-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </p>
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownSection title="Yayınlar">
              <DropdownItem key={1}>Yayın 1</DropdownItem>

              <DropdownItem key={2}>Yayın 2</DropdownItem>
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
      </div>

      <NavbarItem>
        <NextLink
          className={clsx(
            linkStyles({ color: "foreground" }),
            "data-[active=true]:text-primary data-[active=true]:font-medium"
          )}
          href="/contact"
        >
          İletişim
        </NextLink>
      </NavbarItem>
    </div>
  );
};
