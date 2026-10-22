(function(){
var b=document.getElementById('menuBtn'),m=document.getElementById('menu');
if(b){b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o)})}
var st=document.getElementById('openNow');
if(st){var d=new Date(),w=d.getDay(),h=d.getHours()+d.getMinutes()/60;var open=w>=1&&w<=5&&h>=7&&h<16;
st.textContent=open?'Consulta general: abierto ahora':'Consulta general: cerrado ahora';st.className='status'+(st.id&&st.classList.contains('big')?' big':'')+(open?'':' closed');}
var g=document.getElementById('svcGrid');
if(g){var chips=document.querySelectorAll('.chip'),cnt=document.getElementById('count');
var upd=function(f){var n=0;g.querySelectorAll('.svc').forEach(function(c){var s=f==='todos'||c.dataset.cat===f;c.hidden=!s;if(s)n++});cnt.textContent='Mostrando '+n+' servicio(s)'};
chips.forEach(function(c){c.addEventListener('click',function(){chips.forEach(function(x){x.classList.remove('on')});c.classList.add('on');upd(c.dataset.f)})});upd('todos')}
document.querySelectorAll('.acc-btn').forEach(function(a){a.addEventListener('click',function(){var p=document.getElementById(a.getAttribute('aria-controls')),o=a.getAttribute('aria-expanded')==='true';a.setAttribute('aria-expanded',!o);p.hidden=o})});
var f=document.getElementById('frm');
if(f){f.addEventListener('submit',function(e){e.preventDefault();var t=document.getElementById('tema'),ms=document.getElementById('msg'),ok=true;
document.getElementById('e-tema').textContent='';document.getElementById('e-msg').textContent='';
if(!t.value){document.getElementById('e-tema').textContent='Seleccione un tema.';ok=false}
if(ms.value.trim().length<10){document.getElementById('e-msg').textContent='Escriba al menos 10 caracteres.';ok=false}
var o=document.getElementById('ok');
if(ok){o.textContent='Gracias. Su consulta general fue registrada de forma simulada. El centro responderá por los canales oficiales.';o.hidden=false;f.reset()}else{o.hidden=true}})}
})();