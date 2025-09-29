// /lib/utm.js
export function getStoredUTMs() {
  const utms = ["utm_source","utm_medium","utm_campaign","utm_term","utm_content","gclid"];
  const result = {};

  utms.forEach(param => {
    result[param] = localStorage.getItem(param) || null; // read from localStorage
  });

  return result;
}
