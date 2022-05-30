var contador = 0;

function addCounter(){
    contador = contador +1;
    let mensaje = "";
  
  if (contador ==1){
    mensaje = "Has hecho click 1 vez"
  } else {
    mensaje = "Has hecho click " + contador + " veces";
  }
  document.getElementById("counter").innerHTML = mensaje;
}

function aumentartalla(){
  
   switch (contador){
     case 1:
        document.querySelector(".balloon").style.width="250px";
        document.querySelector(".balloon").style.height="230px";
       
        break;
      
      case 2:
        document.querySelector(".balloon").style.width="350px";
        document.querySelector(".balloon").style.height="330px";
       
        break;
       
       case 3:
        document.querySelector(".balloon").style.width="400px";
        document.querySelector(".balloon").style.height="380px";
       
        break;
       
       case 4:
        document.querySelector(".balloon").style.width="460px";
        document.querySelector(".balloon").style.height="400px";
       
        break;
       
        case 5:
        document.querySelector(".balloon").style.display= "none";
        document.querySelector(".botonclick").style.display= "none";
        document.querySelector(".congratulation").style.display= "flex";
        
      
    
 } 
}

function main(){
    addCounter();
    aumentartalla();
}
