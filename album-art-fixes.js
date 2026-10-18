// Verified artwork source and Spotify fix for the Oct. 11 entry.
const verifiedArtworkFixes={
  "2026-10-13":"https://cdn.awsli.com.br/2500x2500/330/330862/produto/325971037/3d3b72b3-3ce7-4a22-859c-5103a3389db9-mua0wzsbdy.jpeg",
  "2026-10-12":"https://coverartarchive.org/release/287aeb61-87e4-4806-ad90-cd3ae89f28a5/34427730906-1200.jpg",
  "2026-10-11":"https://m.media-amazon.com/images/I/41SP0Dh8QRL.jpg"
};
Object.keys(verifiedArtworkFixes).forEach(k=>{if(albums[k])albums[k].cover=verifiedArtworkFixes[k]});
// Use a real Spotify artist embed rather than a non-embeddable Spotify search URL.
// The artist ID is verified from Spotify-linked artist data.
if(albums["2026-10-11"]){albums["2026-10-11"].spotify="https://open.spotify.com/embed/artist/4JwAOjo9XLAY0cloU0TGre"}
renderToday();
