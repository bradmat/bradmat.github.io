// Function to go from mat to matthews
function firstStep()
{
    current = document.getElementById("last").innerHTML;
    goal = "matthews";

    for(i=current.length; i<goal.length; i++)
    {
        (function (i) {
            setTimeout(function () {
                current += goal.charAt(i);
                document.getElementById("last").innerHTML = current;
            }, 250*i);
        })(i);
    };
}

// Function to go from matthews to mat
function secondStep()
{
    current = document.getElementById("last").innerHTML;
    goal = "mat";

    for(i=current.length; i>goal.length; i--)
    {
        (function (i){
            setTimeout(function () {
                current = current.slice(0, -1);
                document.getElementById("last").innerHTML = current;
            }, 100*i);
        })(i);
    };
}

// Function to continuously repeat both functions
function loop()
{
    if (document.getElementById("last").innerHTML == "mat")
    {
        firstStep();
    }
    else if (document.getElementById("last").innerHTML == "matthews")
    {
        secondStep();
    }

    setTimeout(loop, 4000);
}

// Executed code
loop();
