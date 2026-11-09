import LogoMark from './LogoMark';
import type { NavLink } from './content';

export default function SiteHeader({ links }: { links: NavLink[] }) {
  return (
    <header>
      <a className="brand" href="#">
        <LogoMark size={42} /> BNDH Consulting
      </a>
      <nav aria-label="Main">
        {links.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
