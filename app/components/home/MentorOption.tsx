import type { TextItem } from './content';

export default function MentorOption({ option }: { option: TextItem }) {
  return (
    <span>
      <b>{option.title}</b>
      {option.body}
    </span>
  );
}
