# Gloss

**Read. Annotate. Understand.**

Gloss is an open-source reading list and note-taking app that runs entirely on GitHub Pages. It's designed for people who read a lot — researchers, developers, writers, curious minds — and want a beautiful, fast way to track what they read, take notes, and let Claude do the heavy reading for them.

![Gloss](https://img.shields.io/badge/Gloss-Read.%20Annotate.%20Understand.-FF5021?style=flat-square)

## Features

- **Inbox queue** — Add articles with a URL and note, then tell Claude to process your queue
- **Claude integration** — Included skill lets Claude read, summarize, and write notes for you
- **TTS (Text-to-Speech)** — Click any analysis paragraph to hear it read aloud
- **Dark mode** — Easy on the eyes, toggle anytime
- **Contextual notes** — Tag notes to specific articles with type labels (idea, question, connection, action)
- **Voice notes** — Dictate notes with speech recognition
- **Star ratings** — Rate articles 1–5
- **Reading streaks** — Track your daily reading activity
- **Search & filter** — Find articles by title, tag, or read status
- **GitHub sync** — Save notes and queue as markdown files to your repo
- **Zero build step** — Pure HTML/CSS/JS, deploy to GitHub Pages instantly

## Quick Start

### 1. Fork this repo

Click **Fork** in the top right, or clone it:
```bash
git clone https://github.com/yourusername/gloss.git
```

### 2. Edit `config.js`

Open `config.js` and set your name, tagline, colors, and tags:
```javascript
const CONFIG = {
  name: "My Reading List",
  tagline: "Spring 2026 · AI Papers",
  subtitle: "Tracking the papers that matter.",
  content: { singular: "paper", plural: "papers", venue_label: "Conference" },
  // ... see config.js for all options
};
```

### 3. Edit `content.js`

Replace the sample articles with your own:
```javascript
const CONTENT = [
  {
    id: 1,
    title: "Your Article Title",
    relevance: "Why this matters to you.",
    pdf: "https://link-to-pdf.pdf",
    arxiv: "https://link-to-source",
    tags: ["ai", "design"],
    read: false,
    hasAnalysis: false
  },
  // ... add more
];
```

### 4. Enable GitHub Pages

Go to **Settings → Pages → Source: Deploy from a branch → Branch: main → Save**.

### 5. Visit your site

Open `https://yourusername.github.io/gloss` — you're live!

---

## Using Gloss with Claude

Gloss is designed to work with Claude as your reading assistant. Here's how the workflow works:

### The Inbox

Click **+ Add article** to drop a URL into your reading queue. Add a quick note about why you're saving it or what you want Claude to focus on. The inbox syncs to a `queue.md` file in your GitHub notes folder.

Then just tell Claude:

> **"Check my Gloss inbox and summarize everything."**

Claude will read the queue, fetch each article, analyze it using the right mode (paper, news, blog, or technical doc), and save structured notes back to your repo.

### What you can say to Claude

- *"Check my Gloss inbox"* — Process all queued articles
- *"Read this paper and save it to my Gloss"* — Analyze a single article
- *"Summarize this as a news article"* — Force a specific analysis mode
- *"Give me a quick take on this"* — Get a short 2–3 paragraph summary instead of the full analysis

### Setting up the Claude skill

1. Copy `skills/reading-companion/SKILL.md` to your Claude skills folder
2. Connect Claude to your GitHub repo (via Claude's GitHub connection)
3. Start reading!

### Skill Modes

| Mode | Best For | Depth |
|------|----------|-------|
| `research-paper` | Academic papers, proceedings | Deep (9 sections, ~13 min TTS) |
| `news-article` | News, AI updates | Quick (5 sections, ~3 min TTS) |
| `blog-post` | Essays, tutorials | Medium (5 sections, ~5 min TTS) |
| `technical-doc` | Whitepapers, API docs | Medium (5 sections, ~7 min TTS) |

---

## GitHub Sync

Save your notes and reading queue as markdown files in the repo so Claude can read them.

1. Create a [fine-grained GitHub token](https://github.com/settings/tokens?type=beta) with **read/write Contents** access scoped to your repo
2. In Gloss, click the GitHub icon → enter your token, repo, and notes path
3. Notes and queue auto-sync when you add them

### What gets synced

| File | Purpose |
|------|---------|
| `notes/README.md` | Reading progress summary |
| `notes/queue.md` | Inbox — articles waiting for Claude |
| `notes/article-01.md` | Individual article notes |
| `notes/2026-03-01-slug.md` | Ad-hoc article analysis |

---

## Configuration Reference

See `config.js` for all options. Key sections:

| Section | Controls |
|---------|----------|
| `name`, `tagline`, `subtitle` | App branding |
| `content` | Labels ("articles" vs "papers") |
| `tags` | Tag taxonomy and display labels |
| `branding` | Accent colors |
| `features` | Toggle TTS, GitHub sync, voice notes, queue, etc. |
| `github` | Default repo and notes path |
| `storage` | localStorage prefix |
| `analysis` | Analysis badge text |

## Examples

Check the `examples/` folder for ready-made configurations:
- **`examples/hci-papers/`** — HCI conference paper reading list
- **`examples/ai-news/`** — AI news and developments tracker

## Origin

Gloss was born from a CHI 2026 paper reading list built by [Ax Ali](https://github.com/thaxali). The original is at [thaxali.github.io/HCI/CHI26](https://thaxali.github.io/HCI/CHI26/).

## License

MIT — use it, fork it, make it yours.
