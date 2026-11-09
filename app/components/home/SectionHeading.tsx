export default function SectionHeading({ id, title, lede }: { id: string; title: string; lede?: string }) {
  return (
    <>
      <h2 id={id} className="section-title">
        {title}
      </h2>
      {lede ? <p className="section-lede">{lede}</p> : null}
    </>
  );
}
