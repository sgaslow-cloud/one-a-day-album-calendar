const albums={
"2026-09-13":{title:"Harry Styles",artist:"Harry Styles",genre:"Pop",rating:"7.3",track:"Sign of the Times",release:"May 12, 2017",tracks:"10",length:"40 min",recommended:"—",singles:["Sign of the Times","Two Ghosts","Kiwi","Sweet Creature"],cover:"https://www.officialcharts.com/sites/default/files/styles/content_column_mobile/public/legacy_images/media/652652/harry-styles-album-artwork.jpg?itok=VTBt75Md"},
"2026-09-14":{title:"NEVER ENOUGH",artist:"Daniel Caesar",genre:"Contemporary R&B",rating:"8.3",track:"Always",release:"April 7, 2023",tracks:"15",length:"54 min",recommended:"—",singles:["Do You Like Me?","Let Me Go"],cover:"https://i.ebayimg.com/images/g/DdMAAeSwzzdotIHl/s-l1200.jpg"},
"2026-09-15":{title:"Blonde",artist:"Frank Ocean",genre:"Alternative R&B",rating:"7.7",track:"Godspeed",release:"August 20, 2016",tracks:"17",length:"51 min",recommended:"Ryan Gigs",singles:["Nikes"],cover:"https://i.pinimg.com/originals/fc/5b/ff/fc5bffebeb977cbd99d49afb97e7fd0f.jpg"},
"2026-09-16":{title:"Oh yeah?",artist:"Steve Lacy",genre:"Alternative",rating:"7.6",track:"Doom",release:"2025",tracks:"—",length:"—",recommended:"—",singles:["Nice Shoes"],cover:"https://lunchboxrecords.com/cdn/shop/files/SteveLacyOhyeah_LP_580x%402x.jpg?v=1781006823"},
"2026-09-17":{title:"Requiem",artist:"keshi",genre:"Pop",rating:"8.3",track:"Say",release:"February 7, 2025",tracks:"13",length:"43 min",recommended:"Mia Wei",singles:["Soft Spot","Dream","Say","Texas"],cover:"https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a6/a3/20/a6a32054-f43f-12b3-4019-1f201b6c56b2/24UMGIM70300.rgb.jpg/1200x630bb.jpg"},
"2026-09-18":{title:"August and Everything After",artist:"Counting Crows",genre:"Alt Rock",rating:"8.2",track:"Round Here",release:"September 14, 1993",tracks:"11",length:"51 min",recommended:"Dad",singles:["Mr. Jones","Round Here","Omaha","Rain King","A Murder of One"],cover:"https://cdn.prod.website-files.com/5fda4244c42e015b06d2fd8d/5fda462b0dcfee387c3ccf87_august-and-everything-after_album.avif"},
"2026-09-19":{title:"The Bends",artist:"Radiohead",genre:"Alt Rock",rating:"8.1",track:"Fake Plastic Trees",release:"March 13, 1995",tracks:"12",length:"48 min",recommended:"—",singles:["My Iron Lung","High and Dry","Fake Plastic Trees","Just","Street Spirit (Fade Out)"],cover:"https://coverartarchive.org/release/b2002626-ea4f-47d4-972d-1aa229335321/front-1200.jpg"},
};
const pad=n=>String(n).padStart(2,"0");
const key=d=>`${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
const todayKey=()=>key(new Date());
let selected=todayKey();
let view=new Date(new Date().getFullYear(),new Date().getMonth(),1);
let imageCache={};

function getCover(a){return a?.cover||null}
function openCalendar(){document.getElementById("calendarModal").hidden=false;document.getElementById("calendarModal").classList.add("open");document.getElementById("calendarModal").setAttribute("aria-hidden","false");renderCalendar()}
function closeCalendar(){document.getElementById("calendarModal").classList.remove("open");document.getElementById("calendarModal").hidden=true;document.getElementById("calendarModal").setAttribute("aria-hidden","true")}
function renderCalendar(){
 document.getElementById("monthLabel").textContent=view.toLocaleString("en-US",{month:"long",year:"numeric"});
 const cal=document.getElementById("calendar");cal.innerHTML="";
 const first=new Date(view.getFullYear(),view.getMonth(),1),start=new Date(first);start.setDate(1-first.getDay());
 for(let i=0;i<42;i++){
  const d=new Date(start);d.setDate(start.getDate()+i);const k=key(d),a=albums[k],el=document.createElement("button");
  el.className="day"+(d.getMonth()!==view.getMonth()?" other":"")+(a?" has-album":"")+(k===selected?" selected":"");
  el.innerHTML=`<div class="date-num">${d.getDate()}</div>${a?`<div class="album-mini"><strong>${a.title}</strong><span>${a.artist}</span></div>`:""}`;
  el.addEventListener("click",()=>{selected=k;renderToday();closeCalendar()});
  cal.appendChild(el);
 }
}
async function renderToday(){
 const box=document.getElementById("detail"),a=albums[selected],d=new Date(selected+"T12:00:00"),isToday=selected===todayKey();
 if(!a){box.innerHTML=`<div class="empty"><div class="big">♫</div><div class="date">${d.toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric"})}${isToday?'<span class="today-label">TODAY</span>':""}</div><h2>No album yet</h2><p>This day is ready for its one-a-day album.</p></div>`;return}
 box.innerHTML=`<div class="cover-wrap"><div class="cover-fallback">${a.artist.slice(0,2).toUpperCase()}</div></div><div class="info"><div class="date">${d.toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric"})}${isToday?'<span class="today-label">TODAY</span>':""}</div><h2>${a.title}</h2><div class="artist">${a.artist}</div><div class="rating">★ <b>${a.rating}</b> / 10</div><div class="meta"><div><label>Genre</label><div>${a.genre}</div></div><div><label>Best track</label><div>${a.track}</div></div><div><label>Released</label><div>${a.release}</div></div></div><div class="recommend">Recommended by: <strong>${a.recommended}</strong></div></div><aside class="singles"><div class="section-kicker">SINGLES</div><div class="single-list">${(a.singles||[]).map((x,n)=>`<div class="single"><span class="single-number">${String(n+1).padStart(2,"0")}</span><strong>${x}</strong></div>`).join("")}</div><div class="single-meta"><div><label>Tracks</label><strong>${a.tracks}</strong></div><div><label>Length</label><strong>${a.length}</strong></div></div></aside>`;
 const url=getCover(a);if(url){const wrap=document.querySelector(".cover-wrap");if(wrap){const img=document.createElement("img");img.className="cover";img.alt=`${a.title} by ${a.artist} album cover`;img.src=url;img.onerror=()=>{img.remove();wrap.innerHTML=`<div class="cover-fallback">${a.artist.slice(0,2).toUpperCase()}</div>`;};wrap.replaceChildren(img)}}
}
function changeDay(offset){const d=new Date(selected+"T12:00:00");d.setDate(d.getDate()+offset);selected=key(d);renderToday();}
document.getElementById("prevDay").onclick=()=>changeDay(-1);document.getElementById("nextDay").onclick=()=>changeDay(1);document.getElementById("calendarButton").onclick=openCalendar;
document.getElementById("closeCalendar").onclick=closeCalendar;
document.getElementById("modalBackdrop").onclick=closeCalendar;
document.getElementById("prevMonth").onclick=()=>{view.setMonth(view.getMonth()-1);renderCalendar()};
document.getElementById("nextMonth").onclick=()=>{view.setMonth(view.getMonth()+1);renderCalendar()};
document.getElementById("todayButton").onclick=()=>{selected=todayKey();view=new Date(new Date().getFullYear(),new Date().getMonth(),1);renderToday();closeCalendar()};
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeCalendar()});
renderToday();
