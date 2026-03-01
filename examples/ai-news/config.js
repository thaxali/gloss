// Example: AI News Tracker
const CONFIG = {
  name: "AI News Digest",
  tagline: "2026 · AI & ML News",
  subtitle: "Tracking the developments that matter in artificial intelligence.",
  content: { singular: "article", plural: "articles", venue_label: "Source" },
  tags: {
    llm:         ['tag-primary',   'LLMs'],
    agents:      ['tag-highlight', 'Agents'],
    research:    ['tag-secondary', 'Research'],
    industry:    ['tag-muted',     'Industry'],
    safety:      ['tag-primary',   'Safety'],
    tools:       ['tag-highlight', 'Tools'],
  },
  branding: { accent: "#6366F1", accent_hover: "#4F46E5", teal: "#0F766E" },
  features: { tts: true, github_sync: true, voice_notes: true, ratings: true, streaks: true, dark_mode: true },
  github: { default_repo: "", default_path: "notes" },
  storage: { prefix: "ainews-" },
  analysis: { badge: "AI News Analysis" },
};
