// Targeted artwork fixes for the Oct. 11–13 entries.
const verifiedArtworkFixes={
  "2026-10-13":"https://cdn.awsli.com.br/2500x2500/330/330862/produto/325971037/3d3b72b3-3ce7-4a22-859c-5103a3389db9-mua0wzsbdy.jpeg",
  "2026-10-12":"https://cdn.albumoftheyear.org/album/196-the-end_052952.jpg",
  "2026-10-11":"https://cdn2.albumoftheyear.org/375x0/album/2046822-cross-the-line_193302.jpg"
};
Object.keys(verifiedArtworkFixes).forEach(k=>{if(albums[k])albums[k].cover=verifiedArtworkFixes[k]});
// The pryme! album is confirmed on Spotify, but its album URI is not exposed by the indexed sources.
// Keep the verified Spotify search destination rather than inventing an album ID.
if(albums["2026-10-11"]){albums["2026-10-11"].spotify="https://open.spotify.com/search/pryme%21%20cross%20the%20line"}
renderToday();
