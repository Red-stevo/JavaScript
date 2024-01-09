
//This consept allows us to assign a function 
//to a variable and treat the variable as 
//a finction.

let add = function(num1, num2)
{
    return num1 + num2;
}

/**
 * the above is an anounymous function as it 
 * does not have a name. 
 */

console.log(add(20,30));


let sum = add;

console.log(sum);