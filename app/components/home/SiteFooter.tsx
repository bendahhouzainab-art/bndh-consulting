import LogoMark from './LogoMark';

export default function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <LogoMark size={26} />
        BNDH Consulting
        <span className="end">
          <a href="#">Privacy</a>
          <a href="#">Contact</a>
        </span>
      </div>
    </footer>
  );
}
