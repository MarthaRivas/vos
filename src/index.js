var render = require ( './render')
var tabletop = require ('tabletop') 
require('./index.css')

tabletop.init({
        key: 'https://docs.google.com/spreadsheets/d/1M7NapQMWRXoc_3RsvkK-egsFvCk3UaCsv7mXvvjSdaw/pubhtml',
      callback: function(tabletopData, tabletop) {
/*        console.log("render:", render)
        console.log(tabletopData, tabletop)
  */    

        document.body.appendChild(render(tabletopData))
      
      },
      
    
      simpleSheet: true
    })