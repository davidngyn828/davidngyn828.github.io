# David Nguyen — Portfolio

Senior Full Stack AI Engineer portfolio built with **Next.js** (static export) for free hosting on **GitHub Pages**.

Live URL once deployed: `https://davidngyn828.github.io`

## Local development

```bash
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Edit your content

All profile copy lives in one file:

[`src/data/site.ts`](src/data/site.ts)

Update:

- Experience (replace the 3 mock companies)
- Projects (title, description, URL, optional `image`)
- Skills, summary, contact links

### Project images

1. Put files in `public/projects/` (e.g. `public/projects/retailgo.jpg`)
2. Set `image: "/projects/retailgo.jpg"` on that project in `site.ts`

## Deploy to GitHub Pages (free)

### Important: repo name

Your GitHub username is `davidngyn828`, so the repo **must** be named:

```text
davidngyn828.github.io
```

That gives you: https://davidngyn828.github.io

Do **not** use `davidngyn.github.io` — that name only works if the username is `davidngyn`.

### Steps

1. Create (or rename) the repo to exactly: `davidngyn828.github.io`
2. Push this project to that repo’s `main` branch
3. In the repo: **Settings → Pages → Build and deployment → Source → GitHub Actions**
4. Push (or re-run the workflow). Site will be at:
   - https://davidngyn828.github.io

```bash
cd portfolio
git remote add origin https://github.com/davidngyn828/davidngyn828.github.io.git
git branch -M main
git push -u origin main
```

### Option B — project URL

If the repo is named `portfolio`, the site will be:

- https://davidngyn828.github.io/portfolio

Then set `BASE_PATH: /portfolio` in `.github/workflows/deploy.yml` before deploying.

## Build check

```bash
npm run build
```

Static files are written to `out/`.
