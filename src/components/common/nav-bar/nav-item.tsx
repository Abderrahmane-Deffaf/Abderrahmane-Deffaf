import { clsx } from "clsx";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { PropsWithChildren } from "react";

type NavItemProps = {
  href: string;
  name: string;
  slug: null | string;
};
export default function NavItem({
  href,
  name,
  children,
  slug,
}: PropsWithChildren<NavItemProps>) {
  const segment = useSelectedLayoutSegment();
  const isActive = slug === segment;

  return (
    <Link
      className={clsx(
        "py-1 px-2 rounded-[0.75rem] hover:bg-muted hover:text-white border-transparent hover:border-white/20 border-1 flex items-center gap-1 ",
        {
          "text-white bg-muted border-1 border-white/20": isActive,
          "text-gray-400": !isActive,
        }
      )}
      prefetch
      href={href}
    >
      {children}
      <span className=" capitalize hidden lg:block">{name}</span>
    </Link>
  );
}
