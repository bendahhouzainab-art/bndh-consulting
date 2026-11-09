import AudienceCard from './AudienceCard';
import SectionHeading from './SectionHeading';
import type { TextItem } from './content';

export default function AudienceSection({ audience }: { audience: TextItem[] }) {
  return (
    <section id="academies" aria-labelledby="audience-title">
      <SectionHeading
        id="audience-title"
        title="Who we help"
        lede="From anywhere in the world, including the USA. Whether you're aiming for a college scholarship or a professional tennis career through an academy."
      />
      <div className="audience">
        {audience.map((a) => (
          <AudienceCard key={a.title} item={a} />
        ))}
      </div>
    </section>
  );
}
