let pass1=prompt("Enter the first password")
let pass2=prompt("Enter the second password")
let comp=pass1.localeCompare(pass2)

if (comp){
  console.log("The passwords are not the same")
}
else {
  console.log("The passwords are the same")
}