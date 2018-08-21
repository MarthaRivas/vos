function init() {
    Tabletop.init({
      key: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQDD_v6rLSluOU0K5-7pbuTtvKAOoc9-B9wVMK199nKMb-3RRgMLq_FuEDU4T0rCpZIB_QU83BUGIJJ/pubhtml',

      
      callback: function (tabletopData, tabletop) {
        console.log(tabletopData)
   
        var app4 = new Vue({
          el: '#app-4',
          data: {
            list: tabletopData,
          }
        })
      },
      simpleSheet: true
    })
   }
   
   window.addEventListener('DOMContentLoaded', init)