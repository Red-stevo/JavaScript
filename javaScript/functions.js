function isEven(number)
{
    if(Boolean(number % 2))
    {
        return false;
    }
    else
    {
        return true;
    }
}


let value = isEven(1);

console.log(value);