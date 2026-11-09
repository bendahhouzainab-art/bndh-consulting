import Icon from './Icon';
import type { PathItem } from './content';

export default function PathCard({ path }: { path: PathItem }) {
  return (
    <a href={path.href}>
      <Icon name={path.icon} className="icon" />
      <b>{path.title}</b>
      {path.body}
    </a>
  );
}
