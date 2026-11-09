import Icon from './Icon';

export default function BookingPanel({ points }: { points: string[] }) {
  return (
    <aside className="booking" id="book" aria-label="Book a consultation">
      <div className="panel">
        <h2>Book a consultation</h2>
        <p className="sub">Meet one-on-one with a sports-abroad expert, virtually or in person.</p>
        <ul>
          {points.map((item) => (
            <li key={item}>
              <Icon name="check" />
              {item}
            </li>
          ))}
        </ul>
        <a className="btn btn-ball" href="#how-it-works">
          Book a consultation
        </a>
        <p className="help">You&apos;ll answer a few short questions so your expert can prepare.</p>
      </div>
    </aside>
  );
}
