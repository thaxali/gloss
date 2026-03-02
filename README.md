# Gloss

**Read. Annotate. Understand.**

Gloss is an open-source reading list app that runs on GitHub Pages and uses Claude to do the heavy lifting of reading for you. Add articles, papers, and links — Claude fetches, analyzes, and writes structured notes back to your repo. Automatically.

![Gloss](https://img.shields.io/badge/Gloss-Read.%20Annotate.%20Understand.-FF5021?style=flat-square)

## How It Works

Gloss has two ways to get articles analyzed by Claude:

**Automated (hands-off):** Add a URL to `queue.md` or use the **+ Add article** button in the app. A GitHub Action detects the change, fires up Claude Code, and Claude reads the article, writes a TTS-optimized analysis, adds it to your reading list, and commits — all without you doing anything.

**Conversational (interactive):** Paste a URL into a Claude chat thread. Claude fetches the article, auto-detects the content type, and gives you a structured analysis right in the conversation. Ask follow-up questions, go deeper on specific sections, or get a quick take — it's like having a research assistant read alongside you.

## Features

- **Automated queue processing** — Push a URL, a GitHub Action runs Claude to analyze it and commit the result
- **Inbox queue** — Add articles with a URL and note from the app, then let Claude process your queue
- **Claude integration** — Included skill file + `CLAUDE.md` instructions for both Claude chat and Claude Code
- **TTS (Text-to-Speech)** — Click any analysis paragraph to hear it read aloud
- **GitHub sync** — One-click sync button pulls and pushes notes to your repo
- **Dark mode** — Toggle anytime
- **Contextual notes** — Tag notes to specific articles with type labels (idea, question, connection, action)
- **Voice notes** — Dictate notes with speech recognition
- **Star ratings** — Rate articles 1–5
- **Reading streaks** — Track your daily reading activity
- **Search & filter** — Find articles by title, tag, or read status
- **Zero build step** — Pure HTML/CSS/JS, deploy to GitHub Pages instantly

## Quick Start

### 1. Fork this repo

Click **Fork** in the top right, or clone it:
```bash
git clone https://github.com/yourusername/gloss.git
```

### 2. Edit `config.js`

Set your name, tagline, colors, and tags:
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

## Setting Up Claude Automation

This is what makes Gloss different from every other reading list. Two setup steps and you have a fully automated reading pipeline.

### Step 1: Add your Anthropic API key

Go to your repo's **Settings → Secrets and variables → Actions → New repository secret**.

- **Name:** `ANTHROPIC_API_KEY`
- **Value:** Your API key from [console.anthropic.com](https://console.anthropic.com)

This powers the GitHub Action that processes your queue automatically.

### Step 2: Connect GitHub sync in the app

1. Create a [fine-grained GitHub token](https://github.com/settings/tokens?type=beta) with **read/write Contents** access scoped to your repo
2. In Gloss, click the GitHub icon in the header → enter your token, repo (e.g., `yourusername/gloss`), and notes path (e.g., `notes`)
3. You'll need to do this on each device/browser you use — the token is stored in localStorage

Once connected, the sync button (🔄) appears in the header. Click it to pull notes written by Claude and push any local changes.

### How the automated pipeline works

```
You add a URL (app or queue.md)
        ↓
Push hits GitHub
        ↓
GitHub Action detects queue.md change
        ↓
Claude Code reads CLAUDE.md for instructions
        ↓
Claude fetches the article, writes analysis HTML
        ↓
Claude adds it to content.js + index.html
        ↓
Claude commits and pushes → your site updates
```

The GitHub Action workflow is in `.github/workflows/process-queue.yml`. Claude Code follows the instructions in `CLAUDE.md`, which tells it how to edit your specific Gloss setup — where to insert analyses, how to structure the HTML, and what writing style to use.

---

## Using Gloss with Claude Chat

Beyond the automated pipeline, you can use Claude interactively as your reading companion.

### First-time setup

Paste this into a new Claude thread to get started:

> **Setup: Install my reading companion skill**
>
> I have a custom reading companion skill stored in my GitHub repo. Fetch and read this file so you know how to help me:
>
> `https://raw.githubusercontent.com/YOURUSERNAME/gloss/main/skills/reading-companion/SKILL.md`
>
> Read that file and follow its instructions for all future article analysis in this thread. Confirm what modes you found and that you're ready.

Replace `YOURUSERNAME` with your GitHub username.

### What you can say to Claude

- *"Read this for me: [URL]"* — Get a full structured analysis
- *"Summarize this as a news article"* — Force a specific analysis mode
- *"Give me a quick take on this"* — Get a short 2–3 paragraph summary
- *"What are the key findings?"* — Ask follow-up questions about the article
- *"How does this relate to [topic]?"* — Go deeper on connections

### Analysis Modes

Claude auto-detects the right mode based on the content:

| Mode | Best For | Depth |
|------|----------|-------|
| `research-paper` | Academic papers, conference proceedings | Deep (8 sections, ~13 min TTS) |
| `news-article` | AI/tech news, product launches | Quick (5 sections, ~3 min TTS) |
| `blog-post` | Essays, opinion pieces, tutorials | Medium (5 sections, ~5 min TTS) |
| `technical-doc` | API docs, whitepapers, specs | Medium (6 sections, ~7 min TTS) |

---

## GitHub Sync

Notes and queue sync as markdown files in your repo.

### What gets synced

| File | Purpose |
|------|---------|
| `queue.md` | Reading queue — URLs waiting for Claude to process |
| `notes/README.md` | Reading progress summary |
| `notes/queue.md` | App-synced inbox queue |
| `notes/{slug}.md` | Individual article notes and analyses |

---

## File Structure

```
index.html                          ← The app (single-file HTML/CSS/JS)
config.js                           ← Branding, tags, features, GitHub defaults
content.js                          ← Your articles (the CONTENT array)
queue.md                            ← URL queue — add URLs here to trigger automation
CLAUDE.md                           ← Instructions for Claude Code (automated processing)
notes/                              ← Synced reading notes (markdown)
skills/reading-companion/SKILL.md   ← Claude skill for interactive chat use
logo.svg                            ← Site logo
examples/                           ← Ready-made configs for different use cases
.github/workflows/process-queue.yml ← GitHub Action for automated queue processing
```

## Configuration Reference

See `config.js` for all options:

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
