function changeSentence()
{
    document.getElementById('para1').innerHTML='Noakhali Science and Technology University'
}

function changeImg()
{
    //document.getElementsByClassName('img1').src="image/img1";
    document.getElementById("img1").src="image/img1.png";
}


function swapNameTag()
{
    document.getElementById("fatherName").innerHTML = document.getElementsByTagName("p")[2].innerHTML;
}


function swapNameClass()
{
    const elementClass = document.getElementsByClassName("vBatch").innerHTML;
    document.getElementById("cBatch").innerHTML = elementClass[0];
}

function changeTextStyle()
{
    document.getElementById("sText").className="newClass";
}

function moveCar()
{
    const element= document.getElementById("carAnimation");
    let position = 0;

    const interval = setInterval(frame,5);

    function frame()
    {
        if(position==500)
        {
            //position=0;
            clearInterval(interval);
        }
        else
        {
            position++;
            element.style.left = position + "px"
        }
    }    
}
