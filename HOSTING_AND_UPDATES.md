# Index 2.0 on Webflow: set-up and update guide

The Webflow page holds only a two-line loader. Everything that changes (the dashboard widget, the metric lists, the Power BI
link, the chart data for CSV download) lives in a small public GitHub repo and is served by GitHub Pages. Narrative text stays
in the Webflow CMS, so search engines can read it.

```
GitHub Pages (hosted/ files)  --->  widget.js + config.json + metric_data.js + narratives.json + test.html
GitHub Pages (site/ pages)    --->  the full original pages: site/index_1024.html and site/index.html
Webflow page                  --->  <div id="idx" data-code="EN.3"></div> + <script src=".../widget.js">
Webflow CMS                   --->  narratives (Rich Text), imported from cms/indicators.csv
```

## What is published (all from one GitHub repo, `NationalIndex/webpage-widget`)

Base address: `https://nationalindex.github.io/webpage-widget/`

| Address | What it is |
|---|---|
| `widget.js`, `config.json`, `metric_data.js` | The dashboard widget and its data (what the Webflow Embed loads) |
| `narratives.json` | Narrative text used by the test page |
| `test.html?code=EN.5&metric=ind_5` | Test page: narratives plus the widget, with the dashboard kept in view while scrolling. Not a Webflow page |
| `site/index_1024.html` | The complete original site (1024 px dashboard version; recommended) |
| `site/index.html` | The complete original site (standard width) |
| `loader-embed.html` | The two-line Embed for Webflow |

The `site/` pages are the self-contained pages built by `dashboard/website/src/build_site.py` (copied from `dashboard/website/`
together with `metric_data.js` and `ask-context.json`). They can be linked to or shown in an iframe from the Webflow site
(see Option A in `DEVELOPER_BRIEF.md`), with no CMS work. Narratives in these pages are loaded by script, so search engines do not
index them; the Webflow CMS pages (Option C) do.

## Part A - Put the files online (once, about 10 minutes)

1. On github.com click **New repository**. Name it e.g. `agrifood-index-widget`, set it to **Public**, tick "Add a README".
   (GitHub Pages is free only for public repos. This repo holds only the widget files, nothing else from the project.)
2. In the new repo click **Add file -> Upload files**. Drag in the five files from
   `dashboard/webflow/hosted/` (`widget.js`, `config.json`, `metric_data.js`, `loader-embed.html`, `index.html`) and **Commit changes**.
3. **Settings -> Pages -> Build and deployment**: Source = *Deploy from a branch*, branch `main`, folder `/ (root)`, **Save**.
4. After 1-2 minutes open `https://nationalindex.github.io/webpage-widget/config.json (this project: NationalIndex/webpage-widget)`. If you see JSON text, it is live.
   Do not continue until this works.

**Shortcut after step 1 (instead of steps 2 and 4's upload):** run
`python dashboard/webflow/publish_hosted.py https://github.com/YOUR-USER/YOUR-REPO.git`. It clones the repo next to the project,
copies `hosted/` into it, commits and pushes (Git asks you to sign in to GitHub the first time). Do step 3 (Pages) once.
For every later update, just run `python dashboard/webflow/publish_hosted.py` after `build_webflow.py`.

## Part B - Connect Webflow (once; designer or site editor)

5. Open `hosted/loader-embed.html` (already points to nationalindex.github.io/webpage-widget) and copy the two lines.
6. In the Webflow Designer add an **Embed** element where the dashboard goes and paste them in.
7. Set `data-code` (e.g. `EN.3`). On the CMS template page, use **Add Field** to insert the indicator's *Code* field.
   Colours come from `config.json`, so no other attribute is needed.
8. CMS: create collections **Blocks** and **Indicators** with the field names in the CSV headers (Rich Text for the six narrative
   columns, Plain text for the rest) and use **Import CSV** with `cms/blocks.csv` and `cms/indicators.csv`.
9. Lay out the pages (band, About / Observations, Limitations / Opportunities, Notes, sticky Embed column). `preview/index.html`
   shows the intended layout.
10. Publish, then check: the dashboard loads, picking a metric changes the chart, a link with `?metric=m_3_2_2` opens that chart,
    Share works, and "Download data (CSV)" works.

Page requirements: a Webflow plan that allows custom code / external scripts in Embeds. The widget makes the Webflow page the
host, so shared links are the Webflow page address.

## Part C - Updating (no designer needed)

| What changed | What to do |
|---|---|
| New Power BI link, renamed or added metrics, new data | 1. Run `python dashboard/powerbi/AgriFood_Indicators_v2/tools/prepare_data.py` and regenerate/republish the Power BI report if the data changed. 2. Update `PBI_URL` in `dashboard/website/src/build_site.py` if the link changed. 3. Run `python dashboard/webflow/build_webflow.py`. 4. Run `python dashboard/webflow/publish_hosted.py` (or upload `hosted/config.json`, and `metric_data.js` if data changed, in the GitHub repo by hand). Live within a few minutes. |
| Widget look or behaviour | Edit `widget_template.html`, run `build_webflow.py`, then `publish_hosted.py`. |
| Look, text or behaviour of the full site (`site/` pages) | Edit `dashboard/website/src/template.html` / `template_1024.html` (or `narratives.json`), run `python dashboard/website/src/build_site.py`, then `python dashboard/webflow/publish_hosted.py`. The publish step copies `index.html`, `index_1024.html`, `metric_data.js` and `ask-context.json` from `dashboard/website/` into `site/`. Run `build_site.py` first, or the old pages are republished. |
| Narrative text | Update the narratives, run `parse_narratives.py` and `build_webflow.py`, then **Import CSV** `cms/indicators.csv` into the Indicators collection in Webflow, and publish. |
| New indicator | Add it to `build_site.py` (INDICATORS), rebuild, import the CSV, create the CMS item page content. |

Tips
- Close `cms/*.csv` in Excel before running the build (a locked file stops the rewrite).
- Browsers cache files; if a change does not appear, hard-refresh (Ctrl+F5). `config.json` is fetched with no-cache, `widget.js` may take up to ~10 minutes to refresh.
- If the hosted files cannot load, the page shows "The interactive dashboard could not be loaded". Keep a link to the Power BI report as a fallback.

## Files in this folder

| Path | Purpose |
|---|---|
| `hosted/` | Published to the repo root by `publish_hosted.py`: `widget.js`, `config.json`, `metric_data.js`, `narratives.json`, `test.html`, `loader-embed.html` |
| `../website/` (`index.html`, `index_1024.html`, ...) | Published to `site/` by `publish_hosted.py` (see "What is published") |
| `publish_hosted.py` | Copies `hosted/` and the `site/` pages into a local clone of the GitHub repo, then commits and pushes |
| `cms/blocks.csv`, `cms/indicators.csv` | Webflow CMS import files |
| `embed/` | Older all-in-one embeds (paste directly, no hosting needed; picker data is inside the Embed, so a change needs a designer) |
| `icons/` | Indicator icons (SVG) to upload to Webflow |
| `preview/` | Static preview of the intended pages (`preview/index.html`) |
| `widget_template.html`, `test_template.html`, `build_webflow.py`, `build_preview.py` | Sources and builders |
| `DEVELOPER_BRIEF.md` | One-time request to forward to the web developer |
| `README.md` | Overview of the package |

## Not included
- "Ask the Index" assistant (needs the Cloudflare proxy in `website/proxy` and its own Embed).
- French content (the site has `/fr/`; the narratives and picker names are English only for now).
- The `site/` pages and `test.html` are plain GitHub Pages pages, not Webflow pages.
- Not yet tested on Webflow itself; test steps are in Part B, step 10.
