const COOKIE_NAME = "SCHLATECH_CTA_VAR";
const COOKIE_MAX_DAYS = 30;

function readCookie(name) {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
}

function setCookie(name, value, days) {
  if (typeof document === "undefined") return;
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
}

export function getVariant() {
  const existing = readCookie(COOKIE_NAME);
  return existing || null;
}

export function assignVariant() {
  // Return existing assignment if present
  let v = getVariant();
  if (v) return v;

  // Respect URL override if provided (/?cta=alt)
  try {
    const params = new URLSearchParams(window.location.search);
    const q = params.get("cta");
    if (q === "alt") {
      v = "alt";
      setCookie(COOKIE_NAME, v, COOKIE_MAX_DAYS);
      return v;
    }
    if (q === "control") {
      v = "control";
      setCookie(COOKIE_NAME, v, COOKIE_MAX_DAYS);
      return v;
    }
  } catch (e) {
    // noop
  }

  // Otherwise assign randomly 50/50
  v = Math.random() < 0.5 ? "alt" : "control";
  setCookie(COOKIE_NAME, v, COOKIE_MAX_DAYS);
  return v;
}
