
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
    document.getElementById("mmm").innerHTML = "您好，我的名字是米粒儿 ， 一款伪聊天机器人 ，关于餐馆的事情您都能问我 ，  很高兴认识您。" ;

}



