const products=[
{cat:'Mariscos',name:'Rabas Malibu',price:8500,img:'../assets/img/hero-local.png'},
{cat:'Mariscos',name:'Langostinos crocantes',price:9800,img:'../assets/img/hero-sign.png'},
{cat:'Carnes',name:'Bife con papas',price:9200,img:'../assets/img/hero-local.png'},
{cat:'Milanesas',name:'Milanesa napolitana',price:7600,img:'../assets/img/hero-sign.png'},
{cat:'Bebidas',name:'Limonada frozen',price:2800,img:'../assets/img/logo.png'},
{cat:'Bebidas',name:'Trago Malibu sunset',price:4300,img:'../assets/img/hero-local.png'},
{cat:'Postres',name:'Brownie con helado',price:3900,img:'../assets/img/hero-sign.png'},
{cat:'Postres',name:'Copa tropical',price:3600,img:'../assets/img/logo.png'}];
function money(n){return new Intl.NumberFormat('es-AR',{style:'currency',currency:'ARS',maximumFractionDigits:0}).format(n)}
function renderMenu(){const grid=document.querySelector('#menuGrid'); if(!grid)return; grid.innerHTML=products.map(p=>`<article class="product"><img src="${p.img}" alt="${p.name}"><div class="product-body"><small>${p.cat}</small><div class="product-top"><h3>${p.name}</h3><span class="price">${money(p.price)}</span></div><p>Producto demo cargado para mostrar el menú digital. Luego se edita desde el admin.</p><button class="btn">Agregar</button></div></article>`).join('')}
renderMenu();
