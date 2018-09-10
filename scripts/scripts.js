// Function to go from m.at to mat
function firstStep()
{
    current = document.getElementById("last").innerHTML;

    setTimeout(function () {
        current = current.replace('.','');
        document.getElementById("last").innerHTML = current;
    }, 2000);
}

// Function to go from mat to matthews
function secondStep()
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
function thirdStep()
{
    current = document.getElementById("last").innerHTML;
    goal = "mat";

    for(i=current.length; i>goal.length; i--)
    {
        (function (i){
            setTimeout(function () {
                current = current.slice(0, -1);
                document.getElementById("last").innerHTML = current;
                // Revert to bradm.at, undecided if I like this at the moment
                // if (current == "mat")
                // {
                //     setTimeout(function () {
                //         document.getElementById("last").innerHTML = "m.at";
                //     }, 2000)
                // }
            }, 100*i);
        })(i);
    };
}

// Function to continuously repeat both functions
function loop()
{
    if (document.getElementById("last").innerHTML == "m.at")
    {
        firstStep();
    }
    else if (document.getElementById("last").innerHTML == "mat")
    {
        secondStep();
    }
    else if (document.getElementById("last").innerHTML == "matthews")
    {
        thirdStep();
    }
    setTimeout(loop, 4000);
}

// Executed code
loop();
