# Food Idea Planner (free version)

A static site: no build step, no packages. Vercel serves it as-is.

## Files
- `index.html` — the page, styles, and app logic
- `foods.js` — the 12 foods and all idea content (edit ideas here)
- `assets/foodology-logo.png` — the logo

## Before you deploy: update your links
Open `index.html`, find the `CONFIG` block near the bottom, and paste in the real URLs:
- `fipUrl` — the free 5-day Food Introduction Protocol landing page
- `vaultUrl` — the Mission Vault sales page
- `websiteUrl` — already set to foodologyfeedingtherapy.com

## Deploy on Vercel
1. Create a new GitHub repository (for example, `food-idea-planner`) and upload these files, keeping the `assets` folder.
2. In Vercel, choose Add New > Project and import the repository.
3. Leave Framework Preset as "Other" with no build command, then click Deploy.
4. Link to your Vercel URL from your website and Kajabi (or add a custom subdomain like `ideas.foodologyfeedingtherapy.com` under Project > Settings > Domains).

## Editing ideas
In `foods.js`, each idea looks like:
`{ t: "Strawberry coins", tip: "Slice into rounds...", l: "e", r: "strawberry popsicles" }`
- `l: "e"` shows the Easy win tag, `l: "s"` shows Bigger stretch.
- `r` is optional. When set, the card shows a "Find a recipe" link that opens a Google search for those words plus "recipe kid friendly".
- Counts on the page update automatically.
- To add a food, copy an existing food block and give it a new `slug` (lowercase, hyphens only) and `aliases` (other words parents might search).

## Nutrition highlights
Each food in `foods.js` has a `nutrition` list with three items (`h` = heading, `p` = short line). These show in the dark hero at the top of each food page under "What's great about...".
