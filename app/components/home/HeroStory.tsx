import LogoMark from './LogoMark';
import PathChooser from './PathChooser';
import SiteHeader from './SiteHeader';
import type { NavLink, PathItem } from './content';

export default function HeroStory({ links, paths }: { links: NavLink[]; paths: PathItem[] }) {
  return (
    <div className="story">
      <SiteHeader links={links} />
      <div className="bigmark" aria-hidden="true">
        <LogoMark size={200} />
      </div>
      <h1>Sports consulting to play and study abroad.</h1>
      <p className="lede">
        An expert in your corner for US college scholarships and tennis academies, so you can make the right
        decision, especially the financial one.
      </p>
      <PathChooser paths={paths} />
    </div>
  );
}
