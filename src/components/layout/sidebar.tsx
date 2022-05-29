import Link from "next/link";

interface SidebarItem {
  name: string;
  title: string;
  href: string;
}

const SidebarItems: SidebarItem[] = [
  {
    name: "home",
    title: "Home",
    href: "/",
  },
  {
    name: "sec1",
    title: "Security Level 1",
    href: "/sec1",
  },
  {
    name: "sec2",
    title: "Security Level 2",
    href: "/sec2",
  },
];

interface SidebarProps {}

const Sidebar = (props: SidebarProps) => {
  return (
    <aside className="w-64 p-4 overflow-y-auto bg-stone-700 text-stone-100">
      <ul>
        {SidebarItems.map((sidebarItem) => (
          <Link href={sidebarItem.href}>
            <li
              key={`${sidebarItem.name}_sidebarItem`}
              className="hover:cursor-pointer hover:underline"
            >
              {sidebarItem.title}
            </li>
          </Link>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
