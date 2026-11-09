import Icon from './Icon';
import type { SportItem } from './content';

export default function SportTile({ sport }: { sport: SportItem }) {
  return (
    <div className={sport.highlight ? 'sport highlight' : 'sport'}>
      <Icon name={sport.icon} />
      {sport.name}
    </div>
  );
}
