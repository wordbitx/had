// Food Hygiene Rating badge — a clean inline-SVG component reproducing
// the OFFICIAL Food Standards Agency online-rating badge (style 1,
// 428 x 102). Built from the official format, not from any image:
// green panel with "FOOD HYGIENE RATING" and the 0–5 circles (5 filled
// black), black panel with "VERY GOOD". The whole badge links to the
// business's official FSA rating page (opens in a new tab).
// Verified 18 Nov 2026: Rating 5 — Very Good, Redbridge, inspected
// 6 July 2026 (ratings.food.gov.uk/business/1966853/halal-corn-dog).
import { useId } from 'react';
import { FSA_RATING_URL } from '@/lib/site';

const CIRCLES = [0, 1, 2, 3, 4, 5] as const;
const CENTRES = [26, 67, 108, 149, 190, 231] as const;
const CY = 66;
const R = 17;

export default function FhrsBadge({ size = 'compact' }: { size?: 'large' | 'compact' | 'small' }) {
  // Unique clip id per instance — the badge appears up to twice per page
  // (page + footer), and duplicate SVG ids would be invalid.
  const clipId = useId();
  return (
    <a
      className={`fhrs-badge fhrs-badge--${size}`}
      href={FSA_RATING_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Food Hygiene Rating 5 — Very Good. See our official rating on ratings.food.gov.uk (opens in a new tab)"
    >
      <svg viewBox="0 0 428 102" role="img" aria-label="Food Hygiene Rating 5 — Very Good">
        <defs>
          <clipPath id={clipId}>
            <rect x="0" y="0" width="428" height="102" rx="8" />
          </clipPath>
        </defs>
        <g clipPath={`url(#${clipId})`}>
          <rect x="0" y="0" width="260" height="102" fill="#84BD00" />
          <rect x="260" y="0" width="168" height="102" fill="#000000" />
          <text
            x="130"
            y="29"
            textAnchor="middle"
            fontSize="20"
            fontWeight="800"
            fill="#000000"
            style={{ fontFamily: 'var(--font-archivo), Arial, Helvetica, sans-serif' }}
          >
            FOOD HYGIENE RATING
          </text>
          {CIRCLES.map((n, i) => (
            <g key={n}>
              <circle
                cx={CENTRES[i]}
                cy={CY}
                r={R}
                fill={n === 5 ? '#000000' : '#84BD00'}
                stroke="#000000"
                strokeWidth="2.5"
              />
              <text
                x={CENTRES[i]}
                y={CY + 7}
                textAnchor="middle"
                fontSize="20"
                fontWeight="800"
                fill={n === 5 ? '#FFFFFF' : '#000000'}
                style={{ fontFamily: 'var(--font-archivo), Arial, Helvetica, sans-serif' }}
              >
                {n}
              </text>
            </g>
          ))}
          <text
            x="344"
            y="46"
            textAnchor="middle"
            fontSize="22"
            fontWeight="800"
            fill="#FFFFFF"
            style={{ fontFamily: 'var(--font-archivo), Arial, Helvetica, sans-serif' }}
          >
            VERY
          </text>
          <text
            x="344"
            y="74"
            textAnchor="middle"
            fontSize="22"
            fontWeight="800"
            fill="#FFFFFF"
            style={{ fontFamily: 'var(--font-archivo), Arial, Helvetica, sans-serif' }}
          >
            GOOD
          </text>
        </g>
      </svg>
    </a>
  );
}
