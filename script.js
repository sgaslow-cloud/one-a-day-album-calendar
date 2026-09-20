const albums={
"2026-09-13":{title:"Harry Styles",artist:"Harry Styles",genre:"Pop",rating:"7.3",track:"Sign of the Times",release:"May 12, 2017",tracks:"10",length:"40 min",recommended:"—",mark:"HS"},
"2026-09-14":{title:"NEVER ENOUGH",artist:"Daniel Caesar",genre:"Contemporary R&B",rating:"8.3",track:"Always",release:"April 7, 2023",tracks:"15",length:"52 min",recommended:"—",mark:"NE"},
"2026-09-15":{title:"Blonde",artist:"Frank Ocean",genre:"Alternative R&B",rating:"7.7",track:"Godspeed",release:"August 20, 2016",tracks:"17",length:"51 min",recommended:"Ryan Gigs",mark:"BL"},
"2026-09-16":{title:"Oh yeah?",artist:"Steve Lacy",genre:"Alternative",rating:"7.6",track:"Doom",release:"2025",tracks:"—",length:"—",recommended:"—",mark:"OY"},
"2026-09-17":{title:"Requiem",artist:"keshi",genre:"Pop",rating:"8.3",track:"Say",release:"February 7, 2025",tracks:"13",length:"43 min",recommended:"Mia Wei",mark:"RQ"}
};
let view=new Date(2026,8,1),selected="2026-09-13";
const pad=n=>String(n).padStart(2,"0"),key=d=>`${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
function render(){
 document.getElementById("monthLabel").textContent=view.toLocaleString("en-US",{month:"long",year:"numeric"});
 const cal=document.getElementById("calendar");cal.innerHTML="";
 const first=new Date(view.getFullYear(),view.getMonth(),1),start=new Date(first);start.setDate(1-first.getDay());
 for(let i=0;i<42;i++){const d=new Date(start);d.setDate(start.getDate()+i);const k=key(d),a=albums[k],el=document.createElement("button");
 el.className="day"+(d.getMonth()!==view.getMonth()?" other":"")+(a?" album":"")+(k===selected?" selected":"");
 el.innerHTML=`<div class="date-num">${d.getDate()}</div>${a?`<div class="album-mini"><strong>${a.title}</strong><span>${a.artist}</span></div>`:""}`;
 el.addEventListener("click",()=>{selected=k;render();show(k)});cal.appendChild(el)}
}
function show(k){
 const a=albums[k],box=document.getElementById("detail");
 if(!a){box.innerHTML='<div class="detail-empty">No album is recorded for this day yet.</div>';return}
 const d=new Date(k+"T12:00:00");
 box.innerHTML=`<div class="detail"><div class="detail-date">${d.toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric"})}</div><div class="art">${a.mark}</div><h2>${a.title}</h2><div class="artist">${a.artist}</div><div class="meta"><div><label>Genre</label><div>${a.genre}</div></div><div><label>Rating</label><div>${a.rating}/10</div></div><div><label>Best track</label><div>${a.track}</div></div><div><label>Released</label><div>${a.release}</div></div><div><label>Tracks</label><div>${a.tracks}</div></div><div><label>Length</label><div>${a.length}</div></div></div><div class="recommend">Recommended by: <strong>${a.recommended}</strong></div></div>`}
document.getElementById("prevMonth").onclick=()=>{view.setMonth(view.getMonth()-1);render();show(selected)};
document.getElementById("nextMonth").onclick=()=>{view.setMonth(view.getMonth()+1);render();show(selected)};
render();show(selected);