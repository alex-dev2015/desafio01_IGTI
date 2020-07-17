window.addEventListener('load', start)

var input_r = 0;
var input_g = 0;
var input_b = 0;

  function start(){
    preventFormSubmit();
    transactionRgb();
  }  

  function preventFormSubmit(){
      function handleFormSubmit(event){
          event.preventDefault();
      }

      
      var form = document.querySelector('form');
      form.addEventListener('submit', handleFormSubmit);
  }

  function transactionRgb(){
    function updateInput(r,g,b){
        var red     = document.querySelector("#input_r");
        var green   = document.querySelector("#input_g");
        var blue    = document.querySelector("#input_b");
        red  .value = r;
        green.value = g;
        blue .value = b;
        
    }

      var input = document.querySelectorAll("input");
      
      for(var i = 0; i < input.length; i++){
          input[i].addEventListener("input", function(){
              var red  = document.getElementById("red").value,
                green  = document.getElementById("green").value,
                 blue  = document.getElementById("blue").value;
             
              var cubo = document.getElementById("cubo");
              cubo.style.background = "rgb("+ red +", " + green + ", "+ blue +")";    

             
              updateInput(red, green, blue);

          })
      } 
      
  }