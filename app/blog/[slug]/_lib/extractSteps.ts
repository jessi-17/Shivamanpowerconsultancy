export interface HowToStep {
  name: string;
  text: string;
}

const STEP_HEADING = /^(?:#{2,4}\s+)?(?:\*\*)?\s*Step\s+(\d+)\s*[:\-—]\s*([^*\n]+?)(?:\*\*)?\s*$/i;

export function extractHowToSteps(markdown: string): HowToStep[] {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const steps: HowToStep[] = [];
  let current: { name: string; bodyLines: string[] } | null = null;

  const flush = () => {
    if (!current) return;
    const text = current.bodyLines
      .join(" ")
      .replace(/\*\*/g, "")
      .replace(/\s+/g, " ")
      .trim();
    if (text) steps.push({ name: current.name, text });
    current = null;
  };

  for (const raw of lines) {
    const line = raw.trim();
    const match = line.match(STEP_HEADING);
    if (match) {
      flush();
      current = { name: match[2].trim(), bodyLines: [] };
      continue;
    }
    if (!current) continue;
    if (line === "" || line.startsWith("##") || line.startsWith("---")) {
      if (line.startsWith("##") || line.startsWith("---")) {
        flush();
      }
      continue;
    }
    current.bodyLines.push(line);
  }
  flush();

  return steps.length >= 3 ? steps : [];
}
