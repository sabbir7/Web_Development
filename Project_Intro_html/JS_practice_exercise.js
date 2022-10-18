//Ludu Game
function random_number(min,max)
{
    return Math.floor(Math.random()*(max-min+1))+min;

}


//Students name sort Alphabetically 
function sort_number()
{
    const num_arr=[2,18,1,5,7,12,3,4,9];
    num_arr.sort(function(a,b)
    {
        return a-b;
    });

    document.getElementById("input_num").innerHTML=`Sorted: ${num_arr}`;
}



