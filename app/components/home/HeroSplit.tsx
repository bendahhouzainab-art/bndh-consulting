import BookingPanel from './BookingPanel';
import HeroStory from './HeroStory';
import type { NavLink, PathItem } from './content';

export default function HeroSplit({
  links,
  paths,
  bookingPoints,
}: {
  links: NavLink[];
  paths: PathItem[];
  bookingPoints: string[];
}) {
  return (
    <div className="split">
      <HeroStory links={links} paths={paths} />
      <BookingPanel points={bookingPoints} />
    </div>
  );
}
