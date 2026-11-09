import MentorOption from './MentorOption';
import SectionHeading from './SectionHeading';
import type { TextItem } from './content';

export default function MentoringSection({ options }: { options: TextItem[] }) {
  return (
    <section className="mentoring" id="mentoring" aria-labelledby="mentoring-title">
      <div>
        <SectionHeading id="mentoring-title" title="Athlete mentoring" />
        <p>
          Moving abroad to play is a big step. Talk with a mentor who has made the move, or with a professional who
          works with athletes.
        </p>
        <a className="btn btn-ball" href="#book">
          Book a call
        </a>
      </div>
      <div className="m-opts">
        {options.map((o) => (
          <MentorOption key={o.title} option={o} />
        ))}
      </div>
    </section>
  );
}
