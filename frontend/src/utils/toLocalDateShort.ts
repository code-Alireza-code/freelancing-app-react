export default function toLocaleDateShort(date: string, options = {}) {
  return new Date(date).toLocaleDateString("fa-IR", options);
}
