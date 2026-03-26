# TKC | The Kattori Chammach

Static restaurant website for **TKC (The Kattori Chammach)**.

## Pages

- `index.html` - homepage for deployment
- `main.html` - homepage backup/source copy
- `menu.html` - full menu
- `gallery.html` - dish gallery
- `about.html` - restaurant overview
- `visit.html` - contact, location, and ordering

## Tech

- HTML
- CSS
- JavaScript

No build step is required.

## Local Preview

Open `index.html` directly in a browser.

## Assets

- Restaurant and dish images are stored in `Dishes_images/`
- Shared styling is in `style.css`
- Shared interactions are in `script.js`

## Branding

- Restaurant: **TKC | The Kattori Chammach**
- Proprietorship: **Mohit Gupta**
- Website created by **Prakhar Gupta**
- Contact: `prakhar.gupta.0906@gmail.com`

## Deploy

### GitHub Pages

Because this is a plain static website, you can deploy it with GitHub Pages.

1. Push the repository to GitHub.
2. Go to `Settings -> Pages`.
3. Under `Build and deployment`, choose:
   `Source: Deploy from a branch`
4. Select:
   `Branch: main`
   `Folder: / (root)`
5. Save the settings.

`index.html` is already included, so GitHub Pages can load the site directly from the repository root.

### Netlify

1. Import the GitHub repository into Netlify.
2. Leave the build command empty.
3. Set the publish directory to the repository root.

## Notes

- The website uses local image assets only.
- Dark mode is enabled by default and can be toggled on the site.
- External links are included for Zomato, Swiggy, Instagram, Facebook, WhatsApp, and Maps.
