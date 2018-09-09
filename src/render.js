var crel = require('crel')

function renderVos(vos) {
 return crel('div',
   crel('h1', vos.name),
   crel ('h2', vos.soort),
   crel('p', vos.Kenmerken),
   crel('p',vos.Voeden),
   crel('img',vos.src.img),
 )
}

function renderVossen(vossen) {
 return crel('div',
 crel('map', vossen.lengt),
 crel('vos',vossen [i] ),
 crel('componet', renderVos),

   vossen.map(renderVos))
}



module.exports = renderVossen
  


//renderHeader (navigator),
//renderVossen(vossen),
