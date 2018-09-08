var crel = require('crel')

function renderVos(vos) {
 return crel('div',
   crel('h1', vos.title),
   crel('p', vos.content),
   crel('img',vos.img)
 )
}

function renderVossen(vossen) {
 return crel('div',
   vossen.map(renderVos))
}



module.exports = renderVossen 
  


//renderHeader (navigator),
//renderVossen(vossen),
