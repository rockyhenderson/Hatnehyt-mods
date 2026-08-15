# HATNEYHT Mods

A small React/Vite website for listing Minecraft mods with descriptions and download buttons.

## Run it locally

Install Node.js 20+ if you do not already have it.

Then, inside this folder:

```bash
npm install
npm run dev
```

Vite will print a local address such as:

```text
http://localhost:5173/
```

Open that in your browser.

## Build the website

```bash
npm run build
```

The finished static site will be created in `dist/`.

## Add another mod

Open:

```text
src/data/mods.js
```

Copy a mod object and change the values.

Example:

```js
{
  id: "cool-mod",
  name: "Cool Mod",
  version: "1.0.0",
  minecraft: "1.20.1",
  loader: "Forge",
  featured: false,
  icon: "./mod-icons/default.svg",
  description: "What the mod does.",
  features: [
    "Feature one",
    "Feature two",
  ],
  downloadUrl: "./downloads/cool-mod-1.0.0.jar",
}
```

You do NOT need to create another React component. The website automatically renders every object in the `mods` array.

## Add a mod icon

Place an image or SVG in:

```text
public/mod-icons/
```

Then set:

```js
icon: "./mod-icons/your-icon.png"
```

## Download buttons

### Option 1 — store the JAR in the website

Put the file in:

```text
public/downloads/
```

Then:

```js
downloadUrl: "./downloads/millionminer-1.1.0.jar"
```

### Option 2 — GitHub Releases

Upload the JAR as a release asset in the mod's GitHub repo, then set the direct release URL:

```js
downloadUrl:
  "https://github.com/YOUR-USERNAME/YOUR-REPO/releases/download/v1.1.0/millionminer-1.1.0.jar"
```

GitHub Releases is normally the cleaner option if the mod files become large.

## Publish with GitHub Pages

This repo already includes:

```text
.github/workflows/deploy-pages.yml
```

1. Create a GitHub repository.
2. Upload/push all these files to the `main` branch.
3. On GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **GitHub Actions** as the source.
5. Push a commit or manually run the workflow from the **Actions** tab.
6. GitHub will deploy the website and show its URL.

## Main files

```text
src/data/mods.js          Mod information — edit this most often.
src/components/ModCard.jsx
src/App.jsx
src/styles.css
```
