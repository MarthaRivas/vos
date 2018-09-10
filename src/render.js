var crel = require('crel')

function renderHeader (navigator) {
  console.log (navigator)
  return crel ('div',
  crel ('img', src="vossensoorten-over-de-hele-wereld-1478798209.jpg" )
  )
}


function renderVos(vos) {
 
  return crel ('div',
  crel ('h1', vos.naam),
  crel ('h2', vos.soort ),
  crel ('p', vos.Kenmerken),
  crel ('p2', vos.beschrijving),
  crel ('img',{src : vos.img}),
  )
  
}


function renderVossen(vossen) {
 
 return crel ('div',
 vossen.map(renderVos))
 
}




module.exports = renderVossen
  


//renderHeader (navigator),
//renderVossen(vossen),
