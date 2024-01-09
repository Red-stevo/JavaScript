let alien = {
    name : "stephen Muiru",
    tech : "Java Script",
    'work exp' : "5 years",
    laptop : {
        brand : "HP",
        ram : "8GB",
        HDD : "500GB",
        CPU : "Core I5"
    }
}


//to access the values we used the . or [] operators.

console.log(alien.laptop)

console.log(alien['work exp'])


for(let variable in alien)
{
    console.log(variable, alien[variable]);
}

//using a for loop to print an inner object

console.log(
    `
    Alien's laptop
`)
for(let key in alien.laptop)
{
    console.log(key, alien.laptop[key]);
}