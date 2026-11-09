import SectionHeading from './SectionHeading';
import SportTile from './SportTile';
import type { SportItem } from './content';

export default function SportsSection({ sports }: { sports: SportItem[] }) {
  return (
    <section id="college" aria-labelledby="sports-title">
      <SectionHeading
        id="sports-title"
        title="We advise on the sports US colleges recruit most."
        lede="And on the school side too: grades, English tests and admissions deadlines."
      />
      <div className="sports">
        {sports.map((s) => (
          <SportTile key={s.name} sport={s} />
        ))}
      </div>
    </section>
  );
}
