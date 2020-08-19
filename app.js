$("#btn1").click(function(){
  alert("The message has been received. I will get back to you as soon as possible.");
});

document.getElementById("Akhil-image").onmouseover = function() {mouseOver()};

function mouseOver() {
  document.getElementById("Akhil-image").style="border-radius: 1px;box-shadow: 0px 0px 0px 4px rgba(0,0,0,0.3);"
}

document.getElementById("Akhil-image").onmouseout = function() {mouseOut()};
function mouseOut() {
  document.getElementById("Akhil-image").style= "#";
}
