document.addEventListener("DOMContentLoaded", function () {
    let boxesNum = 1;
    boxesNum.classname = "boxesNum";
    let btn = document.createElement("button");
   
    btn.textContent = "Add Square";
    document.body.appendChild(btn);
    btn.addEventListener("click", newDiv);
      let squareContainer = document.createElement("div");
  
    function newDiv() {
      let div = document.createElement("div");
      squareContainer.appendChild(div);
      squareContainer.className = "sC"
      document.body.appendChild(squareContainer);
      div.classList.add("boxes", "div");
      div.setAttribute("id", boxesNum);
      div.addEventListener("click", setRandomColor)
      boxesNum++;
      let span = document.createElement("span");
      span.innerText = div.id;
      span.classList.add("id-display");
      div.appendChild(span)
  
      div.addEventListener("dblclick", evenOrOdd);
  
      function evenOrOdd() {
          if (div.id % 2 == 0) {
              if (div.nextElementSibling){
                  div.nextElementSibling.remove();
              }   else {
                  alert("Nothing Next!");
              }
          }  else if (div.id % 2 == 1) {
              if (div.previousElementSibling) {
                  div.previousElementSibling.remove(); 
              } else {
                  alert("Nothing Before!")
              }
          }
      }
    }
    
    function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  
    function setRandomColor(e) {
      e.target.style.backgroundColor= getRandomColor();
    }
  
  });