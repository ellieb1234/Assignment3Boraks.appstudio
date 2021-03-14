let cities=[]
let i=0
let print=false
<<<<<<< Updated upstream
while (i<=cities.length){
  while (print!=true){
    let city=prompt("Enter a city, if you want to end the program type x")
    if(city!="x"){
      cities.append(city)
    }
    else{
      p
    }
    }
  }
=======
while (i<cities.length || i==0) {
  while (print!=true) {
    let city=prompt("Enter a city, if you want to end the program type x")
    
    if(city!="x") {
      cities.push(city)
    }
    else {
      print=true
    }
  }
  console.log(cities[i])
  i++
}
>>>>>>> Stashed changes
