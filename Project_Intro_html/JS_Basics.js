document.write("External JavaScript Section. <br><br>");

//statements, comments & variable
// Variable name in camelCase
{
    document.write("*****Using Variable*****<br>")
    var a = 5;
    const b = 9;
    let result = 6;
    mul = a * b;

    document.write("Multiplication result: " + mul + "<br>");
    document.write("Concat result: " + a+b + "<br>");
}


//Conditional Statement
{
    document.write("<br>*****Conditional Statement*****<br>");
    let minValue=5,maxValue=8;
    if(minValue<maxValue)
    {
        document.write("Minimum value<br>")
    }
    else
    {
        document.write("Maximum value<br>")
    }
}


//Loop Statement
{
    document.write("<br>*****Loop Statement*****<br>");
    for(let i=0;i<5;i++)
    {
        document.write(`loop value: ${i}<br>`);
    }
}


//Function 
{
    document.write("<br>*****Using Function*****<br>");
    function myFunction(m)
    {
        document.write("Function output: " + m +"<br>");
        return 5;
    }

    returnValue=myFunction("ICE");
    document.write(`function return value: ${returnValue}<br>`)
}


//Array & Object
{
    document.write("<br>*****Using Array & Object*****<br>");
    const nameArray=["Sabbir","Umair"];
    const nameObject =
    {
        father:"Sabbir Ejaz", 
        son:"Umair Ejaz",
        cousin: "Shifat",

        family:function()
        {
            document.write(this.father + "&" + this.son+"<br>");
        }
    };

    document.write("Array Element print: " + nameArray[0] + "<br>");
    document.write("Object Element print: " + nameObject.cousin +"<br>");
    nameObject.family();
}


// Class 
{
    document.write("<br>*****Using Class*****<br>");
    class ice7thBatch
    {
        constructor(m)
        {
            this.studentNumber=m;
        }    
        batchInfo()
        {
            let batch="ICE";
            document.write("Number of Students in " + batch +" department is : " + this.studentNumber + "<br>");
        }
    }
    let objectIce = new ice7thBatch(49);
    objectIce.batchInfo();    
}


//Math function
{
    document.write("<br>*****Using Some BuiltIn Functions*****<br>");
    
    //Math Function
    document.write("Random number 0-1 : " + Math.random());
    document.write("<br>Convert a random number into integer : "+ Math.floor(Math.random()*10));

    const student_name=["Rumon","Sabbir","Shifat","Umair"];
    document.write("<br>Sorted Output : " + student_name.sort()+"<br>");

    //String Function
    let inputSentence = "ICE 7th Batch";
    document.write("<br>Sentence length : " + inputSentence.length);
    document.write("<br>Sentence Upper : " + inputSentence.toUpperCase()+"<br>");

    //Event
    function clearAll()
    {
        document.write();
    }
}


