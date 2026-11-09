import type { TextItem } from './content';

export default function AudienceCard({ item }: { item: TextItem }) {
  return (
    <div>
      <h3>{item.title}</h3>
      <p>{item.body}</p>
    </div>
  );
}
