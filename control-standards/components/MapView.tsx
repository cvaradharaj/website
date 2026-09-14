'use client';

import { MapContainer, TileLayer, CircleMarker, Tooltip, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Real-world coordinates (lat, lng) — using an actual map means every point
// is geographically accurate with no manual pixel calibration required.
const hub: { name: string; pos: [number, number] } = {
  name: 'Bengaluru, India (HQ)',
  pos: [12.9716, 77.5946],
};

const locations: { name: string; pos: [number, number] }[] = [
  { name: 'Kenya', pos: [-1.2921, 36.8219] },
  { name: 'Nigeria', pos: [6.5244, 3.3792] },
  { name: 'Bahrain', pos: [26.2285, 50.586] },
  { name: 'Bangladesh', pos: [23.8103, 90.4125] },
  { name: 'China', pos: [39.9042, 116.4074] },
  { name: 'Colombia', pos: [4.711, -74.0721] },
  { name: 'Egypt', pos: [30.0444, 31.2357] },
  { name: 'France', pos: [48.8566, 2.3522] },
  { name: 'Germany', pos: [52.52, 13.405] },
  { name: 'Hungary', pos: [47.4979, 19.0402] },
  { name: 'Indonesia', pos: [-6.2088, 106.8456] },
  { name: 'Iran', pos: [35.6892, 51.389] },
  { name: 'Italy', pos: [41.9028, 12.4964] },
  { name: 'South Korea', pos: [37.5665, 126.978] },
  { name: 'Malaysia', pos: [3.139, 101.6869] },
  { name: 'Pakistan', pos: [33.6844, 73.0479] },
  { name: 'Peru', pos: [-12.0464, -77.0428] },
  { name: 'Philippines', pos: [14.5995, 120.9842] },
  { name: 'Poland', pos: [52.2297, 21.0122] },
  { name: 'Portugal', pos: [38.7223, -9.1393] },
  { name: 'Russia', pos: [55.7558, 37.6173] },
  { name: 'Singapore', pos: [1.3521, 103.8198] },
  { name: 'South Africa', pos: [-26.2041, 28.0473] },
  { name: 'Sri Lanka', pos: [6.9271, 79.8612] },
  { name: 'Taiwan', pos: [25.033, 121.5654] },
  { name: 'Thailand', pos: [13.7563, 100.5018] },
  { name: 'Turkey', pos: [39.9334, 32.8597] },
  { name: 'UAE', pos: [25.2048, 55.2708] },
  { name: 'UK', pos: [51.5072, -0.1276] },
  { name: 'USA', pos: [38.9072, -77.0369] },
  { name: 'Vietnam', pos: [21.0285, 105.8542] },
];

// Build a curved "flight route" style arc between two lat/lng points by
// bulging a quadratic-bezier control point away from the straight midpoint,
// always toward the north so every route arcs consistently upward on screen.
function curvedRoute(
  start: [number, number],
  end: [number, number],
  segments = 48
): [number, number][] {
  const [lat1, lng1] = start;
  const [lat2, lng2] = end;
  const midLat = (lat1 + lat2) / 2;
  const midLng = (lng1 + lng2) / 2;
  const dLat = lat2 - lat1;
  const dLng = lng2 - lng1;
  const dist = Math.max(Math.hypot(dLat, dLng), 0.0001);

  // perpendicular unit vector, forced to point north (positive lat)
  let perpLat = -dLng / dist;
  let perpLng = dLat / dist;
  if (perpLat < 0) {
    perpLat = -perpLat;
    perpLng = -perpLng;
  }

  const bulge = dist * 0.18;
  const ctrlLat = midLat + perpLat * bulge;
  const ctrlLng = midLng + perpLng * bulge;

  const points: [number, number][] = [];
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const inv = 1 - t;
    const lat = inv * inv * lat1 + 2 * inv * t * ctrlLat + t * t * lat2;
    const lng = inv * inv * lng1 + 2 * inv * t * ctrlLng + t * t * lng2;
    points.push([lat, lng]);
  }
  return points;
}

export default function MapView() {
  return (
    <MapContainer
      center={[18, 45]}
      zoom={2}
      minZoom={2}
      maxZoom={6}
      scrollWheelZoom={false}
      worldCopyJump
      style={{ height: '560px', width: '100%', background: '#0b1220' }}
      attributionControl={false}
      className="cs-dark-tiles"
    >
      {/* Standard OpenStreetMap raster tiles — free, no API key ever required.
          A CSS filter (below, in globals.css) inverts + tints it to match the
          site's dark theme instead of relying on a keyed dark-tile provider. */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        subdomains="abc"
      />

      {locations.map((loc, i) => (
        <Polyline
          key={`line-${loc.name}`}
          positions={curvedRoute(hub.pos, loc.pos)}
          pathOptions={{
            color: '#22d3ee',
            weight: 1.4,
            opacity: 0.45,
            className: `route-line route-delay-${i % 10}`,
          }}
        />
      ))}
      {locations.map((loc, i) => (
        <Polyline
          key={`pulse-${loc.name}`}
          positions={curvedRoute(hub.pos, loc.pos)}
          pathOptions={{
            color: '#e0f7ff',
            weight: 1.6,
            opacity: 0.85,
            className: `route-pulse route-delay-${i % 10}`,
          }}
        />
      ))}

      {locations.map((loc) => (
        <CircleMarker
          key={loc.name}
          center={loc.pos}
          radius={4}
          pathOptions={{ color: '#ffffff', weight: 1, fillColor: '#22d3ee', fillOpacity: 1 }}
        >
          <Tooltip permanent direction="top" offset={[0, -2]} className="cs-map-label">
            {loc.name}
          </Tooltip>
        </CircleMarker>
      ))}

      <CircleMarker
        center={hub.pos}
        radius={7}
        pathOptions={{ color: '#ffffff', weight: 1.5, fillColor: '#3b82f6', fillOpacity: 1 }}
      >
        <Tooltip permanent direction="right" offset={[8, 0]} className="cs-map-label cs-map-hub-label">
          {hub.name}
        </Tooltip>
      </CircleMarker>
    </MapContainer>
  );
}
