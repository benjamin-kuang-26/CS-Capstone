var p = document.querySelector("#changeMe");

p.innerHTML = "OnClick";
p.style.background = "blue";
p.style.color= "purple";
p.style.textAlign = "center";

function maketextGreen()
{
    p.style.background = 'green';
}

function maketextRed()
{
    p.style.background = 'red';
}

function changecolor()
{   
   
    p.onclick = maketextGreen;
    p.onclick = maketextRed;
}

changecolor();
// To uncomment a line, use "Ctrl+/"