// A proper location-marker pin for the real map — a teardrop in brand
// colours, its tip on the exact % point (Mercator-computed), with a clean
// label pill beside it. `flip` puts the label on the left (for pins near
// the right edge of the map).
export default function MapPin({
  left,
  top,
  flip = false,
  label,
}: {
  left: string;
  top: string;
  flip?: boolean;
  label: string;
}) {
  return (
    <span className={`map-pin${flip ? ' flip' : ''}`} style={{ left, top }}>
      <span className="pin">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7z"
            fill="#ffd303"
            stroke="#004925"
            strokeWidth="1.6"
          />
          <circle cx="12" cy="9" r="2.6" fill="#004925" />
        </svg>
      </span>
      <span className="lbl">{label}</span>
    </span>
  );
}
