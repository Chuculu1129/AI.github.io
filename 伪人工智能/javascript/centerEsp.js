const imagen = document.getElementById("imagen");
let verdad = true;

function intro(){
    
    if(verdad){
        imagen.src = "./imagen/mili2.png";
        return verdad = false;
    }
    else{
        imagen.src = "./imagen/mili.png";
        return verdad = true;
    }
 
    

}
setInterval(intro,1000);


// 开场白
var title = document.getElementById("titulo").innerHTML;
var esp = "AI Mili";

    


setTimeout(saludo , 2000);

function saludo(){
    document.getElementById("mmm").innerHTML = "Hola , soy Mili una inteligencia artificial no tan inteligente , cualquier cosa que quisieras saber sobre nuestro restaurante , me puedes preguntar a mi . " ;

}



