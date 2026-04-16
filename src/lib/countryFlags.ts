const FLAG_MAP: Record<string, string> = {
  "UAE": "\u{1F1E6}\u{1F1EA}",
  "United Arab Emirates": "\u{1F1E6}\u{1F1EA}",
  "Saudi Arabia": "\u{1F1F8}\u{1F1E6}",
  "Saudi": "\u{1F1F8}\u{1F1E6}",
  "Qatar": "\u{1F1F6}\u{1F1E6}",
  "Kuwait": "\u{1F1F0}\u{1F1FC}",
  "Bahrain": "\u{1F1E7}\u{1F1ED}",
  "Oman": "\u{1F1F4}\u{1F1F2}",
  "Poland": "\u{1F1F5}\u{1F1F1}",
  "Romania": "\u{1F1F7}\u{1F1F4}",
  "Croatia": "\u{1F1ED}\u{1F1F7}",
  "Malta": "\u{1F1F2}\u{1F1F9}",
  "Hungary": "\u{1F1ED}\u{1F1FA}",
  "Czech Republic": "\u{1F1E8}\u{1F1FF}",
  "Germany": "\u{1F1E9}\u{1F1EA}",
  "Italy": "\u{1F1EE}\u{1F1F9}",
  "Spain": "\u{1F1EA}\u{1F1F8}",
  "Portugal": "\u{1F1F5}\u{1F1F9}",
  "Greece": "\u{1F1EC}\u{1F1F7}",
  "Cyprus": "\u{1F1E8}\u{1F1FE}",
  "India": "\u{1F1EE}\u{1F1F3}",
  "Schengen": "\u{1F1EA}\u{1F1FA}",
  "Europe": "\u{1F1EA}\u{1F1FA}",
};

const DEFAULT_FLAG = "\u{1F30D}"; // earth globe for unknown

export function flagFor(country: string | undefined | null): string {
  if (!country) return DEFAULT_FLAG;
  const trimmed = country.trim();
  return FLAG_MAP[trimmed] || DEFAULT_FLAG;
}
