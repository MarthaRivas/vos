
workers = [
    { name: "paul", alive: true, salary: 5000, password: jjjj, retype:jjjj},
    { name: "rob", alive: false, salary: 3000, password: kkkk, retype:kkkk},
    { name: "anton", alive: false, salary: 5000,password: llll,retype:llll },
    { name: "steven", alive: true, salary: 2000,password: aaaa,retype:aaaa },
    { name: "tom", alive: true, salary: 10000, password: pppp, retype:pppp },
   ]
   
   // send a card to every dead workers family
   function sendCards(workers) {
    for (var i = 0; i < workers.length; i++) {
      var worker = workers[i];
      if (worker.alive == false) {
        console.log("sending card to the beloved family of", worker.name)
      }
    }
   }
   
   // totale loonkost per maand
   function loonkost(workers) {
    var total = 0
    for (var i = 0; i < workers.length; i++) {
      var worker = workers[i];
      if (worker.alive) {
        total = total + worker.salary
      }
    }
    return total
   }
   
   function gemiddelde(workers) {
    return 4000
   }
   
   sendCards(workers)
   console.log(loonkost(workers))

   function validatePassword(password, retype) {

    if (password == "")
     return false

    if (retype )
     console.log(validatePassword("","")
(""))
console.log ( validatiePasswoord ("true", "") )
   }