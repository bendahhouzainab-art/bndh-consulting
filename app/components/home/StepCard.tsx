import type { TextItem } from './content';

export default function StepCard({ step, number }: { step: TextItem; number: number }) {
  return (
    <div>
      <span className="n">{number}</span>
      <h3>{step.title}</h3>
      <p>{step.body}</p>
    </div>
  );
}
