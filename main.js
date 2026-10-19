/* donyapainted: shared script for every page */
const $=s=>document.querySelector(s),pg=document.body.dataset.page;
/* Placeholder content: this is the data a CMS will edit later. */
const works=[
 {t:"Late Night",c:"Originals",p:"£350",s:"50 x 70 cm"},
 {t:"Room 01",c:"Prints",p:"From £20",s:"A4 to A2"},
 {t:"The Boy Is Mine",c:"Canvas Prints",p:"From £60",s:"3 sizes"},
 {t:"Vibe",c:"Originals",p:"£300",s:"40 x 50 cm"},
 {t:"Pink Hour",c:"Prints",p:"From £20",s:"A4 to A2"},
 {t:"After Dark",c:"Canvas Prints",p:"From £60",s:"3 sizes"},
 {t:"Sunday",c:"Originals",p:"£420",s:"60 x 90 cm"},
 {t:"Static",c:"Prints",p:"From £20",s:"A4 to A2"}];
const sketches=["Sketch title one","Sketch title two","Sketch title three"];
const mail=t=>"mailto:donyapainted@gmail.com?subject="+encodeURIComponent("Reserve: "+t);
const W=$("#works");
if(W){
 const fixed=W.dataset.cat,chips=$(".chips");
 const draw=f=>{W.innerHTML=works.map((w,i)=>({w,i})).filter(o=>(fixed||f==="All"||o.w.c===f)&&(!fixed||o.w.c===fixed)).map(({w,i})=>`<article class="card"><div class="art a${i%4+1}">Artwork</div><h3>${w.t}</h3><p>${w.c} · ${w.p} · ${w.s}</p></article>`).join("");
  document.querySelectorAll(".chip").forEach(c=>c.classList.toggle("on",c.textContent===f))};
 if(chips){chips.innerHTML=["All","Originals","Prints","Canvas Prints"].map(c=>`<button class="chip">${c}</button>`).join("");chips.addEventListener("click",e=>e.target.matches(".chip")&&draw(e.target.textContent))}
 draw("All");
}
const S=$("#sketches");
if(S)S.innerHTML=sketches.map((t,i)=>`<article class="card"><div class="art a${i+2}">Rough sketch</div><h3>${t}</h3><p>No. ${i+1} in the queue</p><a class="btn" href="${mail(t)}">Reserve</a></article>`).join("");
document.querySelectorAll("nav a").forEach(a=>a.classList.toggle("on",a.dataset.page===pg));
const hd=$("header"),nav=$("#nav"),bg=$("#burger");
if(pg==="home")addEventListener("scroll",()=>hd.classList.toggle("solid",scrollY>60),{passive:true});
bg.onclick=()=>{const o=nav.classList.toggle("open");bg.setAttribute("aria-expanded",o)};
/* Mailing list: opens an email for now. Swap for a mailing-list service before launch. */
const M=$("#mail");
if(M)M.addEventListener("submit",e=>{e.preventDefault();const on=[...M.querySelectorAll(".sw input:checked")].map(i=>i.parentElement.textContent.trim());
 location.href="mailto:donyapainted@gmail.com?subject="+encodeURIComponent("Mailing list sign-up")+"&body="+encodeURIComponent("Please add "+M.email.value.trim()+" to the mailing list.\n\nNotify me when:\n- "+(on.join("\n- ")||"nothing yet"));
 $("#mailmsg").textContent="Thanks! Your email app should open with your sign-up ready to send."});
const WA=$("#wa");
if(WA)WA.onclick=()=>{navigator.clipboard&&navigator.clipboard.writeText("donyaghad");$("#wa span").textContent="donyaghad (copied)"};
