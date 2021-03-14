let cities=[]
let i=0
let city=prompt("Enter a city, if you want to end the program type STOP")

while(city!='STOP') {
  cities.push(city)
  city=prompt("Enter a city, if you want to end the program type STOP")
}

while (i<cities.length){
  console.log(cities[i].toLowerCase())
  i++
}