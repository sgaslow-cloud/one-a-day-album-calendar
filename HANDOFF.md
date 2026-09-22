# Dylan's One-a-Day — AI Agent Handoff

## Purpose
This repository powers **Dylan's One-a-Day**, a static GitHub Pages album-of-the-day site.
- Live site: https://sgaslow-cloud.github.io/one-a-day-album-calendar/
- Repository: https://github.com/sgaslow-cloud/one-a-day-album-calendar/
- Main files: `index.html`, `style.css`, `script.js`
- Album data: the `albums` object in `script.js`

## Normal job
When Dylan gives you a new album/date, do: **Research → verify → add data → validate → commit → verify deployment**.
If Dylan gives only the date and album/artist, research the remaining fields yourself. Ask only when an essential ambiguity cannot be resolved.
Do not redesign the site or alter existing album entries unless Dylan specifically asks.

## Research every new album
Determine and verify:
- Exact album title and artist, including capitalization/punctuation
- Genre
- Rating
- Best/standout track
- Original release date
- Standard-edition track count and running time
- Recommendation, only if Dylan supplies/approves one
- 1–5 actual singles
- Stable direct album-art URL
- Exact Spotify album/release and embed URL

Prefer sources in this order: official artist/label; Spotify; MusicBrainz/Cover Art Archive; reputable music publications/databases; other reputable cross-checks.
Watch for reissues vs. original releases, deluxe vs. standard editions, incorrect track counts, running times, and similarly named releases. If sources disagree, investigate rather than guess.

### Ratings — NEVER generate one
The site rating is an editorial value out of 10. **The AI agent must never generate, estimate, infer, research-and-substitute, or otherwise choose a rating.** If Dylan supplies a rating, use it exactly. If Dylan does not supply one, leave the value as `—` (or ask Dylan if the site requires a value). Never substitute a reviewer's score or another publication's rating.

### Best track — NEVER generate one
**The AI agent must never choose or generate the Best track.** If Dylan supplies a Best track, use it exactly. If he does not supply one, leave the value as `—` (or ask Dylan if he wants to provide one). Do not select a song based on popularity, critical consensus, streaming numbers, or personal judgment.

### Recommendations — NEVER generate one
Only use a person's name when Dylan has explicitly supplied or approved it. If none exists, use `recommended:"—"`. The site hides the recommendation label automatically when the value is `—`. **Never invent, infer, research, or generate a recommendation.**

## Album data format
Add one object to the existing `albums` object. Example:

```js
"2026-09-21":{
  title:"Album Title",
  artist:"Artist",
  genre:"Alt Rock",
  rating:"8.1",
  track:"Best Track",
  release:"March 13, 1995",
  tracks:"12",
  length:"48 min",
  recommended:"—",
  singles:["Single 1","Single 2","Single 3"],
  cover:"IMAGE_URL",
  spotify:"https://open.spotify.com/embed/album/ALBUM_ID"
},
```

The ISO date key is the calendar date assigned to the album, not its release date. Preserve Dylan's requested spelling; otherwise use the artist's official spelling. For September 21, 2026, Dylan's selected Best track is **Orbiter**, which is on the 21-track extended edition *The Great Divide: The Last Of The Bugs*; the site entry keeps the displayed title **The Great Divide** while using that extended-edition Spotify release.

Use stable direct artwork URLs. MusicBrainz/Cover Art Archive is preferred when suitable. Artwork can fail because of hotlinking, so if a source is unreliable find another stable source. The site has an artist-initial fallback and should not be redesigned just because an image fails.

Spotify should normally be an exact official album embed URL. Verify the album ID. Preserve the existing Spotify player and external Spotify link behavior. Do not make the album artwork itself a Spotify link unless Dylan specifically asks.

## Missing information
If reliable research cannot establish a factual field such as release date, track count, or running time, do not guess. Use `—` when appropriate. For a pre-release album, unreleased information may legitimately remain `—` until it is known.

## Date navigation
Album dates use ISO keys in the form `YYYY-MM-DD`. The calendar and previous/next-day navigation depend on those keys. Keep the date key accurate and do not confuse it with the album's release date.

## Existing site layout/features — do not break
- Calendar opens from the top-right Calendar button; it is not permanently displayed.
- Previous and next day arrows sit beside Calendar.
- The page is designed as one desktop view without unnecessary vertical scrolling.
- Desktop structure: Album Cover | Album Information | Singles / Spotify.
- Singles are on the right.
- Metadata is exactly two rows:
  - Genre | Best track
  - Released | Tracks | Length
- Recommendation text appears only when a recommendation exists.
- Spotify player and an Open in Spotify link appear in the right column.
- Album artwork has a visible fallback if the image fails.
- Responsive behavior should remain intact.

## Safely updating the repository
1. Fetch the current `script.js` before editing it.
2. Make the smallest possible change.
3. Add the new album entry without rewriting the rest of the file.
4. Check the diff for accidental deletion or modification of existing entries.
5. Validate JavaScript with `node --check script.js`.
6. Commit to `main` with a clear message such as `Add September 21 album`.
7. Check the GitHub Pages/Actions deployment.
8. Only say the change is live after deployment has actually succeeded.

**Important:** Do not overwrite `script.js` with an old copy. A missing comma in the `albums` object can prevent the entire page from rendering, so always validate after editing.

Normally, adding a new album requires changing only `script.js`. Do not touch `index.html` or `style.css` for a normal data entry.

## Correcting existing data
Fetch the current file first. Change only the incorrect field(s), validate, commit, and verify deployment. Do not clean up unrelated entries unless Dylan asks.

## Design changes
If Dylan specifically requests a layout/design change, inspect the current HTML/CSS/JS first. Preserve all existing functionality and make the smallest change that accomplishes the request. Validate JavaScript after any JS change and verify deployment.

## Current project decisions
- Site name: **Dylan's One-a-Day**
- Tagline: **One album. One day.**
- Calendar uses a modal date picker.
- Previous/next arrows are beside Calendar.
- Singles are on the right.
- Tracks and Length are in the main metadata section.
- Artwork is not a Spotify link.
- Spotify embed plus external Spotify link are present.
- No recommendation means no recommendation label.
- September 17 recommendation: **Mia W.**
- September 19: **The Bends — Radiohead**.
- September 20: **Love Deluxe — Sade**.

## Current album dates
- September 13, 2026 — Harry Styles — *Harry Styles*
- September 14 — Daniel Caesar — *NEVER ENOUGH*
- September 15 — Frank Ocean — *Blonde*
- September 16 — Steve Lacy — *Oh yeah?*
- September 17 — keshi — *Requiem*
- September 18 — Counting Crows — *August and Everything After*
- September 19 — Radiohead — *The Bends*
- September 20 — Sade — *Love Deluxe*
- September 21 — Noah Kahan — *The Great Divide*
- Next expected day: September 22, 2026

## Deployment
GitHub Pages is configured to deploy from the `main` branch, repository root. The live URL is:

https://sgaslow-cloud.github.io/one-a-day-album-calendar/

A GitHub commit is not the same thing as a successful deployment. Check the deployment workflow before reporting that a change is live.

## Historical implementation notes
- A missing comma in the `albums` object once caused the entire JavaScript file to fail and left the live page showing only the header. Always run `node --check script.js` after data edits.
- Album artwork has an explicit fallback because external image hosts can fail.
- The Spotify player required width/layout fixes; preserve its current right-column placement and sizing unless Dylan requests a redesign.
- The metadata layout was intentionally changed to two rows: Genre/Best track, then Released/Tracks/Length. Do not collapse it into one row when adding data.

## Golden rule
**Research carefully → change only what is necessary → validate → commit → verify deployment → report clearly.**

This is Dylan's ongoing personal music project. The AI agent is the maintainer, not the designer.