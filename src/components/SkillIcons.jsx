import {
  siAndroid,
  siApple,
  siCss,
  siFlutter,
  siGoogle,
  siGooglecloud,
  siHtml5,
  siJavascript,
  siMysql,
  siPhp,
  siWordpress,
} from "simple-icons";

const BRAND = {
  HTML: siHtml5,
  CSS: siCss,
  JS: siJavascript,
  PHP: siPhp,
  WordPress: siWordpress,
  MySQL: siMysql,
  Flutter: siFlutter,
  iOS: siApple,
  Android: siAndroid,
  GCP: siGooglecloud,
  "Google Apps": siGoogle,
};

const CROSSHAIR = (
  <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
    <circle cx="12" cy="12" r="5.5" />
    <path d="M12 2.5V6" />
    <path d="M12 18v3.5" />
    <path d="M2.5 12H6" />
    <path d="M18 12h3.5" />
  </g>
);

const GLYPHS = {
  MJML: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
      <rect x="3" y="6.5" width="18" height="11.5" />
      <path d="M3 6.5l9 5 9-5" />
      <path d="M10 13.8l-1.4 1.4 1.4 1.4" />
      <path d="M14 13.8l1.4 1.4-1.4 1.4" />
    </g>
  ),
  "REST APIs": (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
      <circle cx="5" cy="6.5" r="2.2" />
      <circle cx="5" cy="17.5" r="2.2" />
      <circle cx="18.5" cy="12" r="2.6" />
      <path d="M7 7.6l9.2 3.4" />
      <path d="M7 16.4l9.2-3.4" />
    </g>
  ),
  SOAP: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
      <rect x="3" y="6.5" width="18" height="11.5" />
      <path d="M3 6.5l9 7 9-7" />
    </g>
  ),
  AWS: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
      <rect x="5.5" y="11.5" width="13" height="8.5" />
      <path d="M5.5 14.5h13" />
      <path d="M12 8.5V3" />
      <path d="M9.3 5.7L12 3l2.7 2.7" />
    </g>
  ),
};

const GROUP_GLYPHS = {
  "G-01": (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
      <path d="M8.5 6L3.8 12l4.7 6" />
      <path d="M15.5 6l4.7 6-4.7 6" />
      <path d="M13.6 4.6l-3.2 14.8" />
    </g>
  ),
  "G-02": (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
      <rect x="4" y="4" width="16" height="6.5" />
      <rect x="4" y="13.5" width="16" height="6.5" />
      <path d="M7 7.25h.01" />
      <path d="M7 16.75h.01" />
      <path d="M14 7.25h3" />
      <path d="M14 16.75h3" />
    </g>
  ),
  "G-03": (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
      <ellipse cx="12" cy="5.7" rx="7" ry="2.7" />
      <path d="M5 5.7v12.6" />
      <path d="M19 5.7v12.6" />
      <path d="M5 12a7 2.7 0 0 0 14 0" />
      <path d="M5 18.3a7 2.7 0 0 0 14 0" />
    </g>
  ),
  "G-04": (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
      <rect x="7" y="3" width="10" height="18" />
      <path d="M10.5 6.2h3" />
      <path d="M11 17.8h2" />
    </g>
  ),
  "G-05": (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </g>
  ),
};

export function SkillGlyph({ name, className }) {
  const brand = BRAND[name];
  if (brand) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d={brand.path} />
      </svg>
    );
  }
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      {GLYPHS[name] || CROSSHAIR}
    </svg>
  );
}

export function GroupGlyph({ id, className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      {GROUP_GLYPHS[id] || CROSSHAIR}
    </svg>
  );
}
