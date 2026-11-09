import '../../home.css';
import AudienceSection from './AudienceSection';
import CtaBand from './CtaBand';
import HeroSplit from './HeroSplit';
import HowItWorksSection from './HowItWorksSection';
import MentoringSection from './MentoringSection';
import SiteFooter from './SiteFooter';
import SportsSection from './SportsSection';
import { AUDIENCE, BOOKING_POINTS, MENTOR_OPTIONS, NAV_LINKS, PATHS, SPORTS, STEPS } from './content';

export default function LandingPage() {
  return (
    <div className="bndh">
      <HeroSplit links={NAV_LINKS} paths={PATHS} bookingPoints={BOOKING_POINTS} />
      <main className="wrap">
        <SportsSection sports={SPORTS} />
        <AudienceSection audience={AUDIENCE} />
        <MentoringSection options={MENTOR_OPTIONS} />
        <HowItWorksSection steps={STEPS} />
        <CtaBand />
      </main>
      <SiteFooter />
    </div>
  );
}
