export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export const event = ({ action, category, label, value }) => {
  try {
    if (typeof window === "undefined" || typeof window.gtag !== "function") return;
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value,
    });
  } catch (e) {
    // noop
  }
};
