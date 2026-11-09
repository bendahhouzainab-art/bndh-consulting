import SectionHeading from './SectionHeading';
import StepCard from './StepCard';
import type { TextItem } from './content';

export default function HowItWorksSection({ steps }: { steps: TextItem[] }) {
  return (
    <section id="how-it-works" aria-labelledby="how-title">
      <SectionHeading id="how-title" title="How it works" />
      <div className="steps">
        {steps.map((s, i) => (
          <StepCard key={s.title} step={s} number={i + 1} />
        ))}
      </div>
    </section>
  );
}
