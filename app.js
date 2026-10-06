const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=s=>String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));
const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
const cats={'All':null,'Safety & Clinical':[0,1,2,5],'Discovery & AI':[3,4,8],'Quality & Analytics':[6,7]};
const tracks=['Pharmacovigilance','Clinical Research','Clinical Data Management','Drug Discovery','Computational Drug Design','BA/BE','Pharmaceutical QA','Pharmaceutical QC','AI Drug Discovery'];

/* loader, header, progress */
addEventListener('load',()=>setTimeout(()=>$('#loader').classList.add('done'),500));
const det=$('#detail'),land=$('#landing');
const hdr=$('#header'),bar=$('#progress'),toTop=$('#totop');
function onScroll(){const y=scrollY,h=document.documentElement.scrollHeight-innerHeight;bar.style.width=(y/h*100)+'%';hdr.classList.toggle('stuck',y>40||!det.hidden);toTop.classList.toggle('show',y>700)}
addEventListener('scroll',onScroll,{passive:true});onScroll();toTop.onclick=()=>scrollTo({top:0,behavior:'smooth'});
const nav=$('#nav'),mb=$('#menuBtn');
function menu(o){nav.classList.toggle('open',o);mb.setAttribute('aria-expanded',o);document.body.style.overflow=o?'hidden':''}
mb.onclick=()=>menu(!nav.classList.contains('open'));$$('a',nav).forEach(a=>a.addEventListener('click',()=>menu(false)));

/* marquee + tags */
$('#marquee').innerHTML=[...tracks,...tracks].map(t=>`<span>${t}</span>`).join('');
$('#tags').innerHTML=tracks.map(t=>`<span>${t}</span>`).join('');

/* typed roles */
const roles=['PV Associate','Clinical Research Associate','Data Manager','QA Executive','QC Analyst','AI Drug Discovery Analyst'];let ri=0,ci=0,del=false;const te=$('#typed');
(function type(){const w=roles[ri];ci+=del?-1:1;te.textContent=w.slice(0,ci);let t=del?35:75;if(!del&&ci===w.length){del=true;t=1400}else if(del&&ci===0){del=false;ri=(ri+1)%roles.length;t=350}setTimeout(type,reduce?9e9:t)})();

/* reveal + counters + active nav */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:0.01});
function observe(){$$('.reveal').forEach((el,i)=>{el.classList.add('in');el.style.setProperty('--d',(i%4)*.09+'s');io.observe(el)})}
const co=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;co.unobserve(e.target);const el=e.target,n=+el.dataset.count,t0=performance.now();(function f(t){const p=Math.min((t-t0)/1500,1);el.textContent=Math.round(n*(1-Math.pow(1-p,4)));p<1&&requestAnimationFrame(f)})(t0)}),{threshold:0.1});
$$('[data-count]').forEach(el=>co.observe(el));
const links=$$('.nav a'),so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
$$('section[id]').forEach(s=>so.observe(s));

/* spotlight hover */
document.addEventListener('pointermove',e=>{const c=e.target.closest('.spot');if(c){const r=c.getBoundingClientRect();c.style.setProperty('--mx',e.clientX-r.left+'px');c.style.setProperty('--my',e.clientY-r.top+'px')}});

/* hero 3D tilt */
const tilt=$('#tilt'),card=$('.phone-mockup');
if(tilt&&card&&!reduce&&matchMedia('(hover:hover)').matches){tilt.addEventListener('pointermove',e=>{const r=tilt.getBoundingClientRect();card.style.setProperty('--ry',((e.clientX-r.left)/r.width-.5)*22+'deg');card.style.setProperty('--rx',-((e.clientY-r.top)/r.height-.5)*18+'deg')});tilt.addEventListener('pointerleave',()=>{card.style.removeProperty('--ry');card.style.removeProperty('--rx')})}

/* molecule network canvas */
(function(){const cv=$('#net'),x=cv.getContext('2d');let W,H,P=[],m={x:-999,y:-999};
function size(){W=cv.width=cv.offsetWidth;H=cv.height=cv.offsetHeight;P=Array.from({length:Math.min(70,W/18|0)},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4,r:Math.random()*2+1}))}
addEventListener('resize',size);size();cv.parentElement.addEventListener('pointermove',e=>{const r=cv.getBoundingClientRect();m={x:e.clientX-r.left,y:e.clientY-r.top}});
function draw(){x.clearRect(0,0,W,H);P.forEach((p,i)=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;const dx=p.x-m.x,dy=p.y-m.y,d=Math.hypot(dx,dy);if(d<120){p.x+=dx/d*1.2;p.y+=dy/d*1.2}
x.beginPath();x.arc(p.x,p.y,p.r,0,7);x.fillStyle='rgba(7,56,92,.45)';x.fill();
for(let j=i+1;j<P.length;j++){const q=P[j],l=Math.hypot(p.x-q.x,p.y-q.y);if(l<130){x.strokeStyle=`rgba(7,56,92,${.12*(1-l/130)})`;x.beginPath();x.moveTo(p.x,p.y);x.lineTo(q.x,q.y);x.stroke()}}});
if(!reduce&&!document.hidden)requestAnimationFrame(draw)}
draw();document.addEventListener('visibilitychange',()=>!document.hidden&&!reduce&&draw())})();

/* programs grid */
const grid=$('#courseGrid'),empty=$('#empty'),fl=$('#filters');let cat='All';
grid.innerHTML=courses.map((c,i)=>`<button class="course-card reveal" data-i="${i}" aria-label="${esc(c.title)} details"><div class="ci"><span class="cnum">${String(i+1).padStart(2,'0')}</span><span class="badge">20 DAYS</span></div><h3>${esc(c.title)}</h3><p>${esc(c.objective)}</p><div class="cm"><span>${c.roles.split(' · ')[0]}</span><span>View details <i>→</i></span></div></button>`).join('');
fl.innerHTML=Object.keys(cats).map(k=>`<button class="${k===cat?'on':''}">${k}</button>`).join('');
function filter(){const q=$('#search').value.trim().toLowerCase();let n=0;$$('.course-card').forEach((el,i)=>{const c=courses[i],hay=(c.title+c.objective+c.roles+c.days.map(d=>d[3]).join(' ')).toLowerCase(),ok=(!cats[cat]||cats[cat].includes(i))&&(!q||hay.includes(q));el.classList.toggle('hide',!ok);ok&&n++});empty.hidden=n>0}
fl.onclick=e=>{const b=e.target.closest('button');if(!b)return;cat=b.textContent;$$('button',fl).forEach(x=>x.classList.toggle('on',x===b));filter()};
$('#search').oninput=filter;grid.onclick=e=>{const c=e.target.closest('.course-card');c&&(location.hash='program-'+(+c.dataset.i+1))};observe();

/* detail view */
function dayHTML(d,i){const key=/Mid-Course|Capstone/.test(d[1]);return `<div class="day ${key?'key':''} ${i===0?'open':''}"><button aria-expanded="${i===0}"><span class="dn">Day<b>${esc(d[0])}</b></span><span class="dt">${esc(d[1])}<small>${esc(d[2])}</small></span><span class="pl"></span></button><div class="db"><div><div class="dg"><div class="w"><small>Sub-topics</small>${esc(d[2])}</div><div><small>Tools / AI</small>${esc(d[3])}</div><div><small>Activity</small>${esc(d[4])}</div></div></div></div></div>`}
function compHTML(c){if(!c)return '';return `<div class="comp-grid">${Object.entries(c).map(([cat,list])=>`<div class="comp-box"><h4>${esc(cat)}</h4><ul>${list.map(x=>`<li>◆ ${esc(x)}</li>`).join('')}</ul></div>`).join('')}</div>`}
function showCourse(i){
  const N=courses.length, c=courses[i], p=courses[(i+N-1)%N], n=courses[(i+1)%N];
  det.innerHTML=`<div class="dw">
    <button class="back" id="backBtn">← Back to all programs</button>
    <div class="dh">
      <div>
        <div class="eyebrow">20-DAY INTENSIVE · PROGRAM ${String(i+1).padStart(2,'0')}</div>
        <h2>${esc(c.title)}</h2>
        <p>${esc(c.objective)}</p>
        <div class="dh-stats"><span>📅 20 days</span><span>🧪 Hands-on activity every day</span><span>🎯 Capstone project</span></div>
      </div>
      <div class="rolebox"><small>Target roles</small>${c.roles.split(' · ').map(r=>`<span>${esc(r)}</span>`).join('')}</div>
    </div>
    <h3 class="t">What you will learn (Track Outcomes)</h3>
    <div class="outs">${c.outcomes.map(x=>`<div>${esc(x)}</div>`).join('')}</div>
    <h3 class="t">Companies Students Can Target</h3>
    ${compHTML(c.companies)}
    <h3 class="t">20-Day Course Planner</h3>
    <div class="tl">${c.days.map(dayHTML).join('')}</div>
    <div class="pn">
      <button data-go="${(i+N-1)%N}"><small>← Previous</small><b>${esc(p.title)}</b></button>
      <button data-go="${(i+1)%N}"><small>Next →</small><b>${esc(n.title)}</b></button>
    </div>
  </div>`;
  land.hidden=true;det.hidden=false;onScroll();scrollTo({top:0,behavior:'instant'});document.title=c.title+' | Medi Mack';
  $('#backBtn').onclick=()=>{location.hash='programs'};
  $$('.pn button',det).forEach(b=>b.onclick=()=>location.hash='program-'+(+b.dataset.go+1));
  $$('.day>button',det).forEach(b=>b.onclick=()=>{const d=b.parentElement,o=d.classList.toggle('open');b.setAttribute('aria-expanded',o)})
}
function route(){const m=location.hash.match(/^#program-(\d+)$/);if(m&&courses[m[1]-1]){showCourse(m[1]-1);return}
const was=!det.hidden;det.hidden=true;land.hidden=false;onScroll();document.title='Medi Mack | Pharmacy Learning & Career Solutions';observe();
if(was){const t=document.getElementById(location.hash.slice(1))||$('#programs');setTimeout(()=>scrollTo({top:t.offsetTop-70,behavior:'instant'}),30)}}
addEventListener('hashchange',route);route();

/* contact form -> Flask API + mailto fallback */
$('#form').onsubmit=async e=>{
  e.preventDefault();
  const btn=$('#form button');
  const oldTxt=btn.textContent;
  btn.textContent='Sending...';
  const f=new FormData(e.target);
  try {
    const res=await fetch('/api/contact',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({n:f.get('n'),o:f.get('o'),t:f.get('t'),m:f.get('m')})
    });
    const data=await res.json();
    if(res.ok){
      alert(data.message||'Enquiry sent successfully!');
      e.target.reset();
      btn.textContent=oldTxt;
      return;
    }
  }catch(err){
    console.log('Flask API offline, using mailto fallback');
  }
  btn.textContent=oldTxt;
  location.href=`mailto:medimac2@gmail.com?subject=${encodeURIComponent(f.get('t')+' — '+f.get('n'))}&body=${encodeURIComponent(`Name: ${f.get('n')}\nOrganisation: ${f.get('o')}\n\n${f.get('m')}`)}`;
};
