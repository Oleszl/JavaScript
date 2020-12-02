
class Button1 {
    handleEvent(event) {
      switch(event.type) {
        case 'mousedown':
          elem.innerHTML = "Нажата клавіша миші";
          break;
        case 'mouseup':
          elem.innerHTML = "Віджата клавіша миші";
         break;
      }
    }    
  }



  let button1 = new Button1();
 


  elem.addEventListener('mousedown', button1);
  elem.addEventListener('mouseup', button1);

  let div = document.getElementById("div");
  let form = document.getElementById("form");
  let input = document.getElementById("input");
  let mymenu = document.getElementById("mymenu");
  
  
  div.addEventListener('scroll',function(){
    console.log("Scrolling");
  });

  form.addEventListener('reset',function(){
    console.log("The form was reset");
  });

  input.addEventListener('focus',function(){
    input.style.background = "blue";
  }); 
  mymenu.addEventListener('contextmenu',function(){
    alert("You right-clicked inside the div!");

  });