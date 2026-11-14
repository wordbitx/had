'use client';

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Interactive Leaflet map — real OpenStreetMap streets, zoomed on our
// three London areas. Client-only (loaded with next/dynamic ssr:false),
// so the static export never tries to render Leaflet on the server.
const LOCATIONS = [
  { name: 'Walthamstow', lat: 51.5908, lng: -0.0168, flip: false },
  { name: 'Ilford', lat: 51.5588, lng: 0.0747, flip: true },
  { name: 'Barking', lat: 51.539, lng: 0.081, flip: true },
] as const;

const PIN_SVG =
  '<svg viewBox="0 0 24 24" aria-hidden="true">' +
  '<path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7z" fill="#ffd303" stroke="#004925" stroke-width="1.6"/>' +
  '<circle cx="12" cy="9" r="2.6" fill="#004925"/>' +
  '</svg>';

// Teardrop pin in brand colours, label pill beside the tip. `flip` puts
// the label on the left (for pins near the right edge of the map).
// The markers are non-interactive so they never block panning the map.
function makeIcon(label: string, flip: boolean) {
  return L.divIcon({
    className: 'hcd-marker',
    html:
      '<span class="hcd-pin' +
      (flip ? ' flip' : '') +
      '"><span class="pin">' +
      PIN_SVG +
      '</span><span class="lbl">' +
      label +
      '</span></span>',
    iconSize: [30, 30],
    iconAnchor: [15, 28],
  });
}

export default function InteractiveMap() {
  const elRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el || mapRef.current) return;

    const map = L.map(el, {
      scrollWheelZoom: false, // page scrolling must never be hijacked
      zoomControl: true,
      attributionControl: true,
      minZoom: 10,
      maxZoom: 17,
      zoomSnap: 0.5,
    });
    mapRef.current = map;

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);

    const bounds = L.latLngBounds(LOCATIONS.map((l) => [l.lat, l.lng] as [number, number]));
    LOCATIONS.forEach((l) => {
      L.marker([l.lat, l.lng], {
        icon: makeIcon(l.name, l.flip),
        keyboard: false,
        interactive: false,
      }).addTo(map);
    });

    // Fit all three areas with generous padding so no pin (or label) is
    // ever cut off; maxZoom stops it zooming in too far on wide screens.
    map.fitBounds(bounds, { padding: [56, 56], maxZoom: 13 });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div
      ref={elRef}
      className="interactive-map"
      role="application"
      aria-label="Interactive map of East London showing our areas: Walthamstow, Ilford and Barking. Drag to move the map, use the plus and minus buttons to zoom."
    />
  );
}
