import PathCard from './PathCard';
import type { PathItem } from './content';

export default function PathChooser({ paths }: { paths: PathItem[] }) {
  return (
    <div className="choose">
      {paths.map((p) => (
        <PathCard key={p.title} path={p} />
      ))}
    </div>
  );
}
