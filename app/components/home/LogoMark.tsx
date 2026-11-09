export default function LogoMark({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" role="img" aria-label="BNDH Consulting">
      <circle cx="24" cy="24" r="23.5" fill="#EDFF00" />
      <path d="M5.5 9.5c8.5 6.8 8.5 22.2 0 29" fill="none" stroke="#C7D800" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M42.5 9.5c-8.5 6.8-8.5 22.2 0 29" fill="none" stroke="#C7D800" strokeWidth="1.7" strokeLinecap="round" />
      <text
        x="24"
        y="28.2"
        textAnchor="middle"
        fontFamily="Futura, 'Century Gothic', 'Avenir Next', 'Trebuchet MS', sans-serif"
        fontSize="11.5"
        fontWeight="700"
        letterSpacing=".4"
        fill="#1D2B57"
      >
        BNDH
      </text>
    </svg>
  );
}
