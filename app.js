const PRESETS=[
  {name:'美式咖啡',category:'咖啡',volume:350,caffeine:150,emoji:'☕'},
  {name:'拿铁',category:'咖啡',volume:350,caffeine:75,emoji:'🥛'},
  {name:'手冲咖啡',category:'咖啡',volume:300,caffeine:120,emoji:'🫖'},
  {name:'水',category:'水',volume:500,caffeine:0,emoji:'💧'},
  {name:'绿茶',category:'茶',volume:400,caffeine:35,emoji:'🍵'},
  {name:'果汁',category:'果汁',volume:300,caffeine:0,emoji:'🍊'}
];
const CATEGORIES={咖啡:'☕',茶:'🍵',水:'💧',奶类:'🥛',果汁:'🍊',汽水:'🥤',其他:'🥂'};
const BUILTIN_PRODUCTS=[{id:'americano',name:'标准美式'},{id:'butter',name:'小黄油美式'},{id:'boya',name:'伯牙绝弦'},{id:'orange',name:'橙C美式'},{id:'guifu',name:'桂馥兰香'},{id:'coconut',name:'生椰拿铁'},{id:'grape',name:'多肉葡萄'},{id:'lemon',name:'冰鲜柠檬水'},{id:'mango',name:'杨枝甘露'}];
const BRAND_CATALOG=[
  {brand:'瑞幸咖啡',type:'咖啡',drinks:[['标准美式',480,150,'咖啡','americano'],['小黄油美式',480,120,'咖啡','butter'],['生椰拿铁',480,80,'咖啡','coconut'],['橙C美式',480,120,'咖啡','orange'],['酱香拿铁',480,75],['陨石拿铁',480,80],['厚乳拿铁',480,80],['抹茶好喝椰',480,30],['丝绒拿铁',480,80],['椰青冰萃',480,120]]},
  {brand:'库迪咖啡',type:'咖啡',drinks:[['潘帕斯蓝生酪拿铁',480,75],['生椰拿铁',480,80,'咖啡','coconut'],['米乳拿铁',480,75],['厚乳拿铁',480,80],['经典美式',480,150],['橙C美式',480,120]]},
  {brand:'Manner Coffee',type:'咖啡',drinks:[['冰美式',360,150],['热美式',300,150],['燕麦拿铁',360,80],['桂花拿铁',360,80],['澳白',240,110],['浓缩咖啡',60,75]]},
  {brand:'星巴克中国',type:'咖啡',drinks:[['拿铁（大杯）',473,150],['美式咖啡（大杯）',473,225],['馥芮白（大杯）',473,195],['焦糖玛奇朵（大杯）',473,150],['冷萃冰咖啡（大杯）',473,205],['抹茶星冰乐（大杯）',473,70]]},
  {brand:'Seesaw Coffee',type:'咖啡',drinks:[['长颈鹿美式',450,150],['云南风味拿铁',450,80],['椰子冷萃',450,150],['澳白',240,110]]},
  {brand:'喜茶',type:'茶',drinks:[['多肉葡萄',650,35,'茶','grape'],['芝芝莓莓',650,35],['烤黑糖波波牛乳',500,0,'奶类'],['绿妍轻乳茶',500,40],['水牛乳双拼波波',500,0,'奶类'],['椰椰芒芒',650,0,'果汁'],['芝芝绿妍茶后',500,45],['多肉桃李',650,30]]},
  {brand:'奈雪的茶',type:'茶',drinks:[['霸气芝士草莓',650,35],['霸气橙子',650,35],['茉莉初雪',500,40],['杨枝甘露',500,0],['霸气葡萄',650,35],['金色山脉珍珠奶茶',500,40]]},
  {brand:'霸王茶姬',type:'茶',drinks:[['伯牙绝弦',500,60,'茶','boya'],['桂馥兰香',500,60,'茶','guifu'],['万里木兰',500,55],['青青糯山',500,55],['花田乌龙',500,55],['去云南·玫瑰普洱',500,55],['春日桃桃',500,50],['千山雪金丝小种',500,60]]},
  {brand:'蜜雪冰城',type:'茶',drinks:[['冰鲜柠檬水',700,0,'其他','lemon'],['珍珠奶茶',500,35],['满杯百香果',700,20],['棒打鲜橙',700,0,'果汁'],['茉莉奶绿',500,35],['雪王大圣代',350,0,'奶类'],['芝士奶盖四季春',500,40],['蜜桃四季春',700,30]]},
  {brand:'茶百道',type:'茶',drinks:[['杨枝甘露',650,0,'茶','mango'],['豆乳玉麒麟',500,40],['招牌芋圆奶茶',500,35],['西瓜啵啵',650,20],['茉莉奶绿',500,40],['超级杯水果茶',700,35],['青提茉莉',650,35],['乌漆嘛黑',500,35]]},
  {brand:'CoCo都可',type:'茶',drinks:[['珍珠奶茶',500,35],['鲜芋青稞牛奶',500,0,'奶类'],['百香双响炮',650,30],['柠檬霸',650,30],['茉香奶茶',500,40],['莓莓果茶',650,25]]},
  {brand:'一点点',type:'茶',drinks:[['四季奶青',500,40],['波霸奶茶',500,35],['冰淇淋红茶',500,45],['柠檬养乐多',500,0],['红茶玛奇朵',500,45],['阿华田',500,0,'奶类']]},
  {brand:'沪上阿姨',type:'茶',drinks:[['血糯米奶茶',500,35],['杨枝甘露',650,0],['茉莉奶绿',500,40],['多肉葡萄',650,30],['芋泥波波奶茶',500,35]]},
  {brand:'古茗',type:'茶',drinks:[['超A芝士葡萄',650,35],['云岭茉莉白',500,40],['大叔奶茶',500,35],['杨枝甘露椰奶',650,0],['芝士多肉桃桃',650,30]]},
  {brand:'农夫山泉',type:'水',drinks:[['饮用天然水',550,0],['东方树叶茉莉花茶',500,0,'茶'],['东方树叶青柑普洱',500,0,'茶'],['茶π柚子绿茶',500,25,'茶'],['尖叫运动饮料',550,0,'其他'],['NFC橙汁',300,0,'果汁']]},
  {brand:'元气森林',type:'汽水',drinks:[['白桃味气泡水',480,0],['青柠味气泡水',480,0],['可乐味气泡水',480,0],['外星人电解质水',500,0,'水'],['乳茶',450,25,'奶类']]},
  {brand:'娃哈哈',type:'其他',drinks:[['AD钙奶',220,0,'奶类'],['营养快线',500,0,'奶类'],['纯净水',596,0,'水'],['非常可乐',500,45,'汽水']]},
  {brand:'统一',type:'茶',drinks:[['阿萨姆奶茶',500,35],['冰红茶',500,25],['绿茶',500,25],['鲜橙多',450,0,'果汁']]},
  {brand:'康师傅',type:'茶',drinks:[['冰红茶',500,25],['茉莉蜜茶',500,25],['茉莉清茶',500,25],['酸梅汤',500,0,'其他']]}
];
const $=s=>document.querySelector(s);const $$=s=>[...document.querySelectorAll(s)];
let entries=loadEntries();
let calendarMonth=new Date(),selectedDate=null,photoData='',productVisual='',editingId=null;
let customProducts=loadCustomProducts();
let aiCutoutRuntime=null;

function loadEntries(){try{return JSON.parse(localStorage.getItem('siplog.entries')||'[]')}catch{return []}}
function persist(){localStorage.setItem('siplog.entries',JSON.stringify(entries));renderAll()}
function localDay(value){const d=new Date(value);return `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`}
function isToday(value){return localDay(value)===localDay(new Date())}
function esc(s=''){const d=document.createElement('div');d.textContent=s;return d.innerHTML}
function toast(message){const el=$('#toast');el.textContent=message;el.classList.add('show');clearTimeout(toast.timer);toast.timer=setTimeout(()=>el.classList.remove('show'),1800)}
function formatTime(value){return new Intl.DateTimeFormat('zh-CN',{hour:'2-digit',minute:'2-digit'}).format(new Date(value))}
function dateTitle(value){const d=new Date(value),today=new Date(),yesterday=new Date();yesterday.setDate(today.getDate()-1);if(localDay(d)===localDay(today))return'今天';if(localDay(d)===localDay(yesterday))return'昨天';return new Intl.DateTimeFormat('zh-CN',{month:'long',day:'numeric',weekday:'short'}).format(d)}
function inputDate(date=new Date()){const d=new Date(date.getTime()-date.getTimezoneOffset()*60000);return d.toISOString().slice(0,16)}

function init(){
  $('#today-date').textContent=new Intl.DateTimeFormat('zh-CN',{month:'long',day:'numeric',weekday:'long'}).format(new Date());
  $('#drink-category').innerHTML=Object.keys(CATEGORIES).map(c=>`<option>${c}</option>`).join('');
  refreshBrandSelect();
  $('#quick-grid').innerHTML=PRESETS.slice(0,4).map((p,i)=>`<button class="quick-card" data-preset="${i}"><span class="emoji">${p.emoji}</span><strong>${p.name}</strong><small>${p.volume} ml</small></button>`).join('');
  $('#preset-strip').innerHTML=PRESETS.map((p,i)=>`<button type="button" class="preset-pill" data-dialog-preset="${i}"><span>${p.emoji}</span>${p.name}</button>`).join('');
  $$('.quick-card').forEach(b=>b.onclick=()=>quickAdd(PRESETS[+b.dataset.preset]));
  $$('.preset-pill').forEach(b=>b.onclick=()=>fillPreset(PRESETS[+b.dataset.dialogPreset]));
  $('#brand-select').onchange=updateBrandDrinks;
  $('#brand-drink-select').onchange=applyBrandDrink;
  $('#drink-photo').onchange=handlePhoto;
  renderProductGallery();
  $$('button[data-visual-source]').forEach(b=>b.onclick=()=>showVisualSource(b.dataset.visualSource));
  $('#save-to-library').onclick=saveToLibrary;
  $('#prev-month').onclick=()=>changeMonth(-1);
  $('#next-month').onclick=()=>changeMonth(1);
  $('#clear-date-filter').onclick=()=>{selectedDate=null;renderHistory()};
  $$('.tab[data-screen]').forEach(b=>b.onclick=()=>showScreen(b.dataset.screen));
  $('#main-add').onclick=$('#custom-add').onclick=()=>openForm();
  $('.dialog-cancel').onclick=()=>$('#drink-dialog').close();
  $('#drink-form').onsubmit=saveForm;
  $('#history-search').oninput=renderHistory;
  $('#export-button').onclick=()=>$('#backup-dialog').showModal();
  $('.backup-close').onclick=()=>$('#backup-dialog').close();
  $('#download-backup').onclick=exportBackup;
  $('#import-backup').onchange=importBackup;
  renderAll();
  if('serviceWorker'in navigator)navigator.serviceWorker.register('./service-worker.js');
}
function showScreen(name){$$('.screen').forEach(s=>s.classList.toggle('active',s.id===`${name}-screen`));$$('.tab[data-screen]').forEach(t=>t.classList.toggle('active',t.dataset.screen===name));scrollTo(0,0);if(name==='history')renderHistory();if(name==='insights')renderInsights()}
function quickAdd(p){entries.unshift({id:crypto.randomUUID(),...p,date:new Date().toISOString(),note:''});persist();toast(`已记录 ${p.name}`)}
function fillPreset(p){$('#drink-name').value=p.name;$('#drink-category').value=p.category;$('#drink-volume').value=p.volume;$('#drink-caffeine').value=p.caffeine}
function openForm(p=PRESETS[0]){editingId=null;$('#drink-dialog header h2').textContent='记录一杯';$('.dialog-save').textContent='保存';fillPreset(p);photoData='';productVisual='';$('#drink-brand').value='';$('#photo-preview').hidden=true;$('#cutout-status').textContent='';$('#drink-photo').value='';$('#brand-select').value='';$('#brand-drink-select').innerHTML='<option value="">选择饮品</option>';$('#brand-drink-select').disabled=true;$('#drink-time').value=inputDate();$('#drink-note').value='';showVisualSource('builtin');renderProductGallery();$('#drink-dialog').showModal()}
function showVisualSource(source){$$('button[data-visual-source]').forEach(b=>b.classList.toggle('active',b.dataset.visualSource===source));$('#builtin-product-gallery').hidden=source!=='builtin';$('#upload-product-panel').hidden=source!=='upload'}
function renderProductGallery(){const box=$('#builtin-product-gallery');if(!box)return;box.innerHTML=BUILTIN_PRODUCTS.map(p=>`<button type="button" class="product-thumb product-${p.id} ${productVisual===p.id?'selected':''}" data-product-id="${p.id}"><span></span><small>${p.name}</small></button>`).join('');box.querySelectorAll('[data-product-id]').forEach(b=>b.onclick=()=>selectBuiltinProduct(b.dataset.productId))}
function selectBuiltinProduct(id){if(!BUILTIN_PRODUCTS.some(p=>p.id===id))return;productVisual=id;photoData='';$('#photo-preview').hidden=true;$('#drink-photo').value='';$('#cutout-status').textContent='';showVisualSource('builtin');renderProductGallery()}
function loadCustomProducts(){try{return JSON.parse(localStorage.getItem('siplog.customProducts')||'[]')}catch{return[]}}
function catalog(){const groups={};customProducts.forEach(p=>(groups[p.brand]??=[]).push([p.name,p.volume,p.caffeine,p.category,`custom:${p.id}`]));return [...BRAND_CATALOG,...Object.entries(groups).map(([brand,drinks])=>({brand:`我的 · ${brand}`,rawBrand:brand,type:drinks[0]?.[3]||'其他',drinks}))]}
function refreshBrandSelect(){const value=$('#brand-select')?.value||'';$('#brand-select').innerHTML='<option value="">选择品牌</option>'+catalog().map((b,i)=>`<option value="${i}">${b.brand}</option>`).join('');if(value&&catalog()[+value])$('#brand-select').value=value}
function updateBrandDrinks(){const index=$('#brand-select').value,select=$('#brand-drink-select');if(index===''){select.disabled=true;select.innerHTML='<option value="">选择饮品</option>';return}const brand=catalog()[+index];select.disabled=false;select.innerHTML='<option value="">选择饮品</option>'+brand.drinks.map((d,i)=>`<option value="${i}">${d[0]}</option>`).join('')}
function applyBrandDrink(){const brandIndex=$('#brand-select').value,drinkIndex=$('#brand-drink-select').value;if(brandIndex===''||drinkIndex==='')return;const brand=catalog()[+brandIndex],drink=brand.drinks[+drinkIndex],category=drink[3]||brand.type;$('#drink-brand').value=brand.rawBrand||brand.brand.replace(/^我的 · /,'');$('#drink-name').value=drink[0];$('#drink-category').value=category;$('#drink-volume').value=drink[1];$('#drink-caffeine').value=drink[2];photoData='';productVisual=drink[4]||'';const preview=$('#photo-preview');preview.hidden=true;if(BUILTIN_PRODUCTS.some(p=>p.id===productVisual)){selectBuiltinProduct(productVisual)}else if(productVisual.startsWith('custom:')){const item=customProducts.find(p=>p.id===productVisual.slice(7));if(item?.photo){photoData=item.photo;preview.src=photoData;preview.hidden=false;showVisualSource('upload')}}else{showVisualSource('builtin');renderProductGallery()}}
async function handlePhoto(event){
  const file=event.target.files[0];if(!file)return;
  productVisual='';showVisualSource('upload');renderProductGallery();
  const status=$('#cutout-status'),preview=$('#photo-preview');
  status.textContent='正在读取本地照片…';preview.hidden=true;
  try{
    const source=await readAndResizePhoto(file,900);
    status.textContent=aiCutoutRuntime?'正在智能抠图…':'首次使用：正在下载智能抠图模型…';
    photoData=await smartCutout(source,message=>status.textContent=message);
    preview.src=photoData;preview.hidden=false;status.textContent='智能抠图完成，照片仍只保存在本机';
  }catch(error){
    try{photoData=await readAndResizePhoto(file,720);preview.src=photoData;preview.hidden=false;status.textContent='智能抠图暂时不可用，已保留原图，可正常保存'}
    catch{status.textContent='照片读取失败，请重新选择'}
    console.warn('smart cutout failed',error);
  }
}
function readAndResizePhoto(file,maxSize=900){return new Promise((resolve,reject)=>{const reader=new FileReader();reader.onerror=reject;reader.onload=()=>{const img=new Image();img.onerror=reject;img.onload=()=>{const scale=Math.min(1,maxSize/Math.max(img.width,img.height)),canvas=document.createElement('canvas'),ctx=canvas.getContext('2d');canvas.width=Math.max(1,Math.round(img.width*scale));canvas.height=Math.max(1,Math.round(img.height*scale));ctx.drawImage(img,0,0,canvas.width,canvas.height);resolve(canvas.toDataURL('image/jpeg',.86))};img.src=reader.result};reader.readAsDataURL(file)})}
async function smartCutout(source,onStatus=()=>{}){
  if(!aiCutoutRuntime){
    onStatus('首次使用：正在下载智能模型（可能需要一些时间）…');
    const {AutoModel,AutoProcessor,RawImage}=await import('https://cdn.jsdelivr.net/npm/@huggingface/transformers@4.2.0');
    const model=await AutoModel.from_pretrained('briaai/RMBG-1.4',{config:{model_type:'custom'},dtype:'q8'});
    const processor=await AutoProcessor.from_pretrained('briaai/RMBG-1.4',{config:{do_normalize:true,do_pad:false,do_rescale:true,do_resize:true,image_mean:[.5,.5,.5],feature_extractor_type:'ImageFeatureExtractor',image_std:[1,1,1],resample:2,rescale_factor:1/255,size:{width:512,height:512}}});
    aiCutoutRuntime={model,processor,RawImage};
  }
  onStatus('正在识别杯子、杯盖和吸管边缘…');
  const {model,processor,RawImage}=aiCutoutRuntime,image=await RawImage.fromURL(source),{pixel_values}=await processor(image),result=await model({input:pixel_values}),tensor=result.output||Object.values(result)[0],mask=await RawImage.fromTensor(tensor[0].mul(255).to('uint8')).resize(image.width,image.height);
  image.putAlpha(mask);const canvas=document.createElement('canvas');canvas.width=image.width;canvas.height=image.height;canvas.getContext('2d').drawImage(image.toCanvas(),0,0);return canvas.toDataURL('image/webp',.86);
}
function cutoutProduct(img){const size=360,canvas=document.createElement('canvas'),ctx=canvas.getContext('2d',{willReadFrequently:true});canvas.width=canvas.height=size;ctx.fillStyle='#fff';ctx.fillRect(0,0,size,size);const scale=Math.min((size-20)/img.width,(size-20)/img.height),w=img.width*scale,h=img.height*scale;ctx.drawImage(img,(size-w)/2,(size-h)/2,w,h);const image=ctx.getImageData(0,0,size,size),d=image.data,corners=[[0,0],[size-1,0],[0,size-1],[size-1,size-1]],bg=[0,0,0];corners.forEach(([x,y])=>{const i=(y*size+x)*4;bg[0]+=d[i];bg[1]+=d[i+1];bg[2]+=d[i+2]});bg=bg.map(v=>v/4);const seen=new Uint8Array(size*size),queue=new Int32Array(size*size*4+size*4);let head=0,tail=0;for(let x=0;x<size;x++){queue[tail++]=x;queue[tail++]=(size-1)*size+x}for(let y=1;y<size-1;y++){queue[tail++]=y*size;queue[tail++]=y*size+size-1}const dist=p=>Math.hypot(d[p*4]-bg[0],d[p*4+1]-bg[1],d[p*4+2]-bg[2]);while(head<tail){const p=queue[head++];if(seen[p]||dist(p)>72)continue;seen[p]=1;d[p*4+3]=0;const x=p%size,y=Math.floor(p/size);if(x)queue[tail++]=p-1;if(x<size-1)queue[tail++]=p+1;if(y)queue[tail++]=p-size;if(y<size-1)queue[tail++]=p+size}ctx.putImageData(image,0,0);return canvas.toDataURL('image/png')}
function saveToLibrary(){const brand=$('#drink-brand').value.trim(),name=$('#drink-name').value.trim();if(!brand||!name){toast('请先填写品牌和饮品名称');return}const item={id:crypto.randomUUID(),brand,name,category:$('#drink-category').value,volume:+$('#drink-volume').value||0,caffeine:+$('#drink-caffeine').value||0,photo:photoData};customProducts.push(item);try{localStorage.setItem('siplog.customProducts',JSON.stringify(customProducts));refreshBrandSelect();toast('已加入我的饮品库')}catch{customProducts.pop();toast('设备存储空间不足，请导出备份')}}
function changeMonth(delta){calendarMonth=new Date(calendarMonth.getFullYear(),calendarMonth.getMonth()+delta,1);selectedDate=null;renderHistory()}
function calendarVisual(item){if(!item)return '';if(item.photo)return `<img src="${item.photo}" alt="">`;if(BUILTIN_PRODUCTS.some(p=>p.id===item.productVisual))return `<div class="product-${item.productVisual}"></div>`;return `<span>${CATEGORIES[item.category]||item.emoji||'🥂'}</span>`}
function renderCalendar(){const y=calendarMonth.getFullYear(),m=calendarMonth.getMonth(),first=new Date(y,m,1),start=new Date(y,m,1-first.getDay()),days={};entries.forEach(e=>(days[localDay(e.date)]??=[]).push(e));const monthEntries=entries.filter(e=>{const d=new Date(e.date);return d.getFullYear()===y&&d.getMonth()===m}),brands=new Set(monthEntries.map(e=>e.brand).filter(Boolean)),favorites={};monthEntries.forEach(e=>favorites[e.name]=(favorites[e.name]||0)+1);const favorite=Object.entries(favorites).sort((a,b)=>b[1]-a[1])[0];$('#month-cups').textContent=monthEntries.length;$('#month-brands').textContent=brands.size;$('#month-favorite').textContent=favorite?`${favorite[0]} · ${favorite[1]} 杯`:'暂无';$('#calendar-title').textContent=`${y}年 ${m+1}月`;$('#calendar-grid').innerHTML=Array.from({length:42},(_,i)=>{const d=new Date(start);d.setDate(start.getDate()+i);const key=localDay(d),items=days[key]||[],outside=d.getMonth()!==m,item=items.at(-1);return `<button class="calendar-day${outside?' outside':''}${key===localDay(new Date())?' today':''}${key===selectedDate?' selected':''}" data-date="${key}"><span>${d.getDate()}</span>${item?`<span class="calendar-visual">${calendarVisual(item)}</span>`:''}${items.length>1?`<i class="calendar-count">${items.length}</i>`:''}</button>`}).join('');$$('.calendar-day').forEach(b=>b.onclick=()=>{selectedDate=b.dataset.date;renderHistory()});$('#clear-date-filter').hidden=!selectedDate}
function saveForm(e){e.preventDefault();const item={id:editingId||crypto.randomUUID(),brand:$('#drink-brand').value.trim(),name:$('#drink-name').value.trim(),category:$('#drink-category').value,volume:+$('#drink-volume').value||0,caffeine:+$('#drink-caffeine').value||0,date:new Date($('#drink-time').value).toISOString(),note:$('#drink-note').value.trim(),emoji:CATEGORIES[$('#drink-category').value],photo:photoData,productVisual};if(editingId){const index=entries.findIndex(e=>e.id===editingId);if(index>=0)entries[index]=item}else entries.unshift(item);persist();$('#drink-dialog').close();toast(editingId?'记录已修改':'记录已保存');editingId=null}
function visualHTML(e){if(e.photo)return `<img class="entry-photo" src="${e.photo}" alt="">`;if(BUILTIN_PRODUCTS.some(p=>p.id===e.productVisual))return `<div class="product-sticker product-${e.productVisual}"></div>`;return `<div class="entry-icon">${CATEGORIES[e.category]||e.emoji||'🥂'}</div>`}
function entryHTML(e){return `<article class="entry">${visualHTML(e)}<div class="entry-copy"><strong>${e.brand?`${esc(e.brand)} · `:''}${esc(e.name)}</strong><small>${formatTime(e.date)}${e.note?` · ${esc(e.note)}`:''}</small></div><div class="entry-values"><strong>${e.volume} ml</strong>${e.caffeine?`<small>${e.caffeine} mg 咖啡因</small>`:''}</div><button class="edit-entry" data-edit="${e.id}" aria-label="编辑 ${esc(e.name)}">编辑</button><button class="delete-entry" data-delete="${e.id}" aria-label="删除 ${esc(e.name)}">×</button></article>`}
function openEdit(id){const item=entries.find(e=>e.id===id);if(!item)return;editingId=id;$('#drink-dialog header h2').textContent='编辑记录';$('.dialog-save').textContent='完成';$('#drink-brand').value=item.brand||'';$('#drink-name').value=item.name;$('#drink-category').value=item.category;$('#drink-volume').value=item.volume;$('#drink-caffeine').value=item.caffeine||0;$('#drink-time').value=inputDate(new Date(item.date));$('#drink-note').value=item.note||'';photoData=item.photo||'';productVisual=item.productVisual||'';$('#drink-photo').value='';$('#cutout-status').textContent='';const preview=$('#photo-preview');if(photoData){preview.src=photoData;preview.hidden=false;showVisualSource('upload')}else{preview.hidden=true;showVisualSource('builtin');renderProductGallery()}$('#drink-dialog').showModal()}
function bindDeletes(root){root.querySelectorAll('[data-edit]').forEach(b=>b.onclick=()=>openEdit(b.dataset.edit));root.querySelectorAll('[data-delete]').forEach(b=>b.onclick=()=>{if(confirm('删除这条饮品记录？')){entries=entries.filter(e=>e.id!==b.dataset.delete);persist();toast('记录已删除')}})}
function renderToday(){const list=entries.filter(e=>isToday(e.date)).sort((a,b)=>new Date(b.date)-new Date(a.date));const volume=list.reduce((s,e)=>s+e.volume,0),caffeine=list.reduce((s,e)=>s+e.caffeine,0);$('#cup-count').textContent=`${list.length} 杯`;$('#total-volume').textContent=volume;$('#total-caffeine').textContent=caffeine;$('#water-progress').style.width=`${Math.min(volume/2000*100,100)}%`;$('#goal-copy').textContent=volume>=2000?'今天的饮用目标已完成，真不错。':`距离 2000 ml 目标还有 ${2000-volume} ml`;const root=$('#today-list');root.innerHTML=list.length?list.map(entryHTML).join(''):'<div class="empty"><span>☕</span><b>还没有记录</b><span>点一下下方的 ＋，记下今天的第一杯吧</span></div>';bindDeletes(root)}
function renderHistory(){renderCalendar();const query=$('#history-search').value.trim().toLowerCase();const list=entries.filter(e=>(!query||e.name.toLowerCase().includes(query)||e.category.includes(query))&&(!selectedDate||localDay(e.date)===selectedDate));const groups=Object.groupBy?Object.groupBy(list,e=>localDay(e.date)):list.reduce((a,e)=>((a[localDay(e.date)]??=[]).push(e),a),{});const root=$('#history-list');root.innerHTML=Object.entries(groups).sort(([a],[b])=>b.localeCompare(a)).map(([,items])=>`<section class="day-group"><div class="day-head"><span>${dateTitle(items[0].date)}</span><span>${items.reduce((sum,e)=>sum+e.volume,0)} ml</span></div><div class="entry-list">${items.sort((a,b)=>new Date(b.date)-new Date(a.date)).map(entryHTML).join('')}</div></section>`).join('')||'<div class="empty"><b>暂无记录</b><span>这一天还没有饮品记录</span></div>';bindDeletes(root)}
function renderInsights(){const days=[];for(let i=6;i>=0;i--){const d=new Date();d.setHours(0,0,0,0);d.setDate(d.getDate()-i);days.push(d)}const values=days.map(d=>entries.filter(e=>localDay(e.date)===localDay(d)).reduce((s,e)=>s+e.volume,0));const max=Math.max(...values,2000);$('#week-chart').innerHTML=days.map((d,i)=>`<div class="bar-column"><div class="bar" title="${values[i]} ml" style="height:${Math.max(values[i]/max*145,3)}px"></div><small>${'日一二三四五六'[d.getDay()]}</small></div>`).join('');const weekEntries=entries.filter(e=>days.some(d=>localDay(e.date)===localDay(d))),total=weekEntries.reduce((s,e)=>s+e.volume,0);$('#week-total').textContent=`共 ${total} ml`;$('#daily-average').textContent=Math.round(total/7);$('#week-caffeine').textContent=weekEntries.reduce((s,e)=>s+e.caffeine,0);const counts={};weekEntries.forEach(e=>counts[e.category]=(counts[e.category]||0)+1);$('#category-list').innerHTML=Object.entries(counts).sort((a,b)=>b[1]-a[1]).map(([c,n])=>`<div class="category-row"><span>${CATEGORIES[c]||'🥂'}</span><strong>${c}</strong><span>${n} 杯</span></div>`).join('')||'<p class="muted">记录几杯后，这里会显示你的饮用偏好。</p>'}
function renderAll(){renderToday();renderHistory();renderInsights()}
function exportBackup(){const blob=new Blob([JSON.stringify({app:'SipLog',version:2,exportedAt:new Date().toISOString(),entries,customProducts},null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`饮刻备份-${localDay(new Date()).replaceAll('-','')}.json`;a.click();URL.revokeObjectURL(a.href);toast('备份已导出')}
async function importBackup(event){const file=event.target.files[0];if(!file)return;try{const data=JSON.parse(await file.text());if(!Array.isArray(data.entries))throw Error();if(confirm(`将导入 ${data.entries.length} 条记录，是否继续？`)){entries=data.entries;customProducts=Array.isArray(data.customProducts)?data.customProducts:customProducts;localStorage.setItem('siplog.customProducts',JSON.stringify(customProducts));refreshBrandSelect();persist();$('#backup-dialog').close();toast('备份导入成功')}}catch{alert('无法读取这个备份文件')}event.target.value=''}
init();



