// Canvas animation: stars + petals
const canvas = document.getElementById('animationCanvas');
const ctx = canvas?.getContext('2d');

function resizeCanvas(){
  if(canvas){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Stars
const stars = [];
for(let i=0;i<100;i++){
  stars.push({x: Math.random()*window.innerWidth, y: Math.random()*window.innerHeight, r: Math.random()*2, b: Math.random()});
}

// Petals
const petals = [];
for(let i=0;i<50;i++){
  petals.push({x: Math.random()*window.innerWidth, y: Math.random()*window.innerHeight, r: 10+Math.random()*10, speed:1+Math.random()*2});
}

function animateCanvas(){
  if(!ctx) return;
  ctx.clearRect(0,0,canvas.width, canvas.height);

  stars.forEach(s=>{
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r,0, Math.PI*2);
    ctx.fillStyle = `rgba(255,255,255,${s.b})`;
    ctx.fill();
    s.b += (Math.random()-0.5)*0.05;
    if(s.b<0)s.b=0; if(s.b>1)s.b=1;
  });

  petals.forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r,0, Math.PI*2);
    ctx.fillStyle = `rgba(255,0,100,0.7)`;
    ctx.fill();
    p.y+=p.speed;
    p.x+=Math.sin(p.y/20)*2;
    if(p.y>canvas.height){ p.y=-p.r; p.x=Math.random()*canvas.width; }
  });

  requestAnimationFrame(animateCanvas);
}
animateCanvas();

// Heart animation
function createHeart(){
  const heart = document.createElement('div');
  heart.textContent='💖';
  heart.style.position='absolute';
  heart.style.left=Math.random()*window.innerWidth+'px';
  heart.style.bottom='0px';
  heart.style.fontSize=(20+Math.random()*30)+'px';
  heart.style.color=`hsl(${Math.random()*360},70%,70%)`;
  heart.style.opacity=Math.random()*0.8+0.2;
  document.body.appendChild(heart);
  let bottom=0;
  const rise = setInterval(()=>{
    bottom+=3+Math.random()*2;
    heart.style.bottom=bottom+'px';
    heart.style.left=parseFloat(heart.style.left)+Math.sin(bottom/20)*2+'px';
    if(bottom>window.innerHeight){ heart.remove(); clearInterval(rise);}
  },20);
}
document.getElementById('showHearts')?.addEventListener('click', createHeart);

// Confetti
function createConfetti(){
  const c = document.createElement('div');
  c.textContent='🎉';
  c.style.position='absolute';
  c.style.left=Math.random()*window.innerWidth+'px';
  c.style.top='-50px';
  c.style.fontSize=(20+Math.random()*30)+'px';
  c.style.color=`hsl(${Math.random()*360},80%,60%)`;
  c.style.opacity=Math.random();
  document.body.appendChild(c);
  let top=-50;
  const fall=setInterval(()=>{
    top+=3+Math.random()*3;
    c.style.top=top+'px';
    c.style.left=parseFloat(c.style.left)+Math.sin(top/15)*2+'px';
    if(top>window.innerHeight){ c.remove(); clearInterval(fall);}
  },20);
}
setInterval(createConfetti,400);

// Lightbox
const lightboxImgs = document.querySelectorAll('.lightbox');
const modal = document.getElementById('lightboxModal');
const modalImg = document.getElementById('lightboxImg');
const closeModal = document.getElementById('closeLightbox');
lightboxImgs.forEach(img=>{
  img.addEventListener('click',()=>{ modal.style.display='flex'; modalImg.src=img.src; });
});
closeModal?.addEventListener('click',()=>{modal.style.display='none';});

// Message board
const form = document.getElementById('messageForm');
const messagesList = document.getElementById('messagesList');
form?.addEventListener('submit', e=>{
  e.preventDefault();
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;
  const msgDiv = document.createElement('div');
  msgDiv.classList.add('message-item');
  msgDiv.textContent = `${name} says: ${message}`;
  messagesList.appendChild(msgDiv);
  msgDiv.style.opacity=0;
  msgDiv.style.transform='translateY(-20px)';
  setTimeout(()=>{
    msgDiv.style.transition='all 0.5s';
    msgDiv.style.opacity=1;
    msgDiv.style.transform='translateY(0)';
  },50);
  form.reset();
});

function animateCanvas3(){
  if(!ctx) return;
  ctx.clearRect(0,0,canvas.width, canvas.height);

  stars.forEach(s=>{
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r,0, Math.PI*2);
    ctx.fillStyle = `rgba(${parseInt(s.color.slice(1,3),16)},${parseInt(s.color.slice(3,5),16)},${parseInt(s.color.slice(5,7),16)},${s.b})`;
    ctx.fill();
    s.b += (Math.random()-0.5)*0.05;
    if(s.b<0)s.b=0; if(s.b>1)s.b=1;
  });

  petals.forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r,0, Math.PI*2);
    ctx.fillStyle = `rgba(255,0,100,0.8)`;
    ctx.fill();
    p.y+=p.speed;
    p.x+=Math.sin(p.y/20)*2;
    if(p.y>canvas.height){ p.y=-p.r; p.x=Math.random()*canvas.width; }
  });

  requestAnimationFrame(animateCanvas3);
}
animateCanvas3();
