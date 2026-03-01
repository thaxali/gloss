// ══════════════════════════════════════════════════
// Gloss Configuration
// Edit this file to customize your reading list.
// ══════════════════════════════════════════════════

const CONFIG = {
  // ── Identity ──
  name: "Gloss",
  tagline: "Reading List",
  subtitle: "Your curated reading list with analysis, notes, and TTS.",

  // ── Content Labels ──
  content: {
    singular: "article",      // Used in: "1 article"
    plural: "articles",       // Used in: "25 articles"
    venue_label: "Source",    // Or: "Conference", "Publication", "Venue"
  },

  // ── Tags ──
  // Define your tag taxonomy. Each tag maps to [css-class, display-label].
  // Content items reference tags by key (e.g., "ai", "design").
  // Tags found in content but not listed here get auto-generated buttons.
  tags: {
    ai:        ['tag-primary',   'AI'],
    design:    ['tag-secondary', 'Design'],
    research:  ['tag-muted',     'Research'],
    tools:     ['tag-highlight', 'Tools'],
  },

  // ── Branding ──
  branding: {
    accent: "#FF5021",         // Primary CTA color
    accent_hover: "#E8481D",
    teal: "#2C5F6F",           // Secondary / teal
  },

  // ── Features (toggle on/off) ──
  features: {
    tts: true,
    github_sync: true,
    voice_notes: true,
    ratings: true,
    streaks: true,
    dark_mode: true,
    queue: true,            // Inbox queue for Claude to process
  },

  // ── GitHub Integration ──
  github: {
    default_repo: "",          // e.g., "yourusername/gloss"
    default_path: "notes",     // Subfolder for note files
  },

  // ── Storage ──
  storage: {
    prefix: "gloss-",          // localStorage key prefix
  },

  // ── Analysis ──
  analysis: {
    badge: "Article Analysis · TTS Optimized",
  },
};
