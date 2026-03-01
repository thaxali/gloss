// Example: HCI Conference Papers
const CONFIG = {
  name: "CHI 2026 Reading List",
  tagline: "CHI 2026 · Research Reading List",
  subtitle: "Curated papers from the CHI'26 preprint collection.",
  content: { singular: "paper", plural: "papers", venue_label: "Venue" },
  tags: {
    interviews:     ['tag-primary',   'Interviews'],
    qual:           ['tag-secondary', 'Qual Analysis'],
    behavior:       ['tag-primary',   'Behavior'],
    agents:         ['tag-highlight', 'Agents'],
    bias:           ['tag-muted',     'LLM Bias'],
  },
  branding: { accent: "#FF5021", accent_hover: "#E8481D", teal: "#2C5F6F" },
  features: { tts: true, github_sync: true, voice_notes: true, ratings: true, streaks: true, dark_mode: true },
  github: { default_repo: "", default_path: "notes" },
  storage: { prefix: "chi26-" },
  analysis: { badge: "HCI Paper Analysis · TTS Optimized" },
};
