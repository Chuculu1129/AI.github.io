// 用户输入内容
const pregunta = document.getElementById("preguntar");
const conversacion = document.getElementById("conversacion");

// 提问发送
function enviar(){
    document.getElementById("conversacion").innerHTML += `
    <div class="mensaje2">
        <p class="cliente">${pregunta.value}</p>
    </div>
    
    `;
    
    // 下面这是让输入框发送后自动清空的。
    setTimeout(responder, 800);
    pregunta.value = "";
}

// 搜寻匹配的关键词
const palabras_clave = [
    // ["你", "名字"], ["你", "岁"], ["多大了"],
    // // 你们餐馆在哪里
    // ["餐" , "在哪"], ["餐" , "地址"],
    // // 想去餐馆
    // ["我" , "去" , "餐"],  ["我" , "到" , "餐"], 
    // // 问送外卖
    // ["送" , "外卖"] , ["送" , "餐"] ,  ["送"] ,
    // // 问营业时间 开门了吗  几点开门 开店 您们几点营业 什么时候关门
    // ["开门"] , ["开店"] , ["点" , "营业"] , ["时", "营业"] , ["关门"] ,
    // // 想点餐
    // ["点" , "餐"] , ["点" , "个"] ,
    // // 问推荐菜
    // ["推荐"] , ["特色"] ,

    // nombre
    ["tu" , "nombre"] , ["como te llamas"] , 
    // edad
    ["cuantos años"] , ["edad"],
    // direcion de chifa
    ["donde" , "chifa"] , ["donde" , "restaurante"] , ["direccion"], ["dirección"],
    // delivery
    ["cobra","delivery"] , ["cobras" , "delivery"] , ["cobran" , "delivery"], ["delivery"],
    // horario de atencion 
    ["hora","abre"] , ["hora" , "abren"] , ["hora" , "abres"] , ["cuando" , "abre"] , ["hora","cierra"], ["cuando","cierra"], ["horario"],
    // pedir comida
    ["pedir"], ["pedido"],
    // recomendar comida
    ["recomienda"], ["recomiendas"], ["recomendar"], ["mejor","plato"], ["lo mejor"],
    // ver la carta
    ["ver","carta"], ["mostrar","carta"], ["muestrame","carta"], ["muestra","carta"], ["que","menu"], ["qué","menú"],["tienes","comer"],["tiene","comer"],

];

// 分析用户输入内容然后搜寻答案回复
function responder(){

    var aa = document.getElementsByClassName("cliente");
    var bb = document.getElementsByClassName("mili");
    
    for(a=0 ; a < aa.length ; a++){

        var y = aa[a];
    }

    for(a=0 ; a < aa.length ; a++){

        var z = aa[a-1];
    }

    for(a=0 ; a < bb.length ; a++){
        var p = bb[a];
    }

    var yy = y.innerHTML;
    var zz = z.innerHTML;
    var mm = p.innerHTML;
    const qq = "sorry , normalmente no soy asi , no te enojaras con un niña recien nacido verdad ?";

    if(mm==qq){

        setTimeout(responder5,1000);

    }

    else if(yy==zz){
        setTimeout(responder3,1000);
    }
    else{

    for(i=0 ; i < palabras_clave.length ; i++) {

        for(j=0 ; j < palabras_clave[i].length ; j++){

            var valor = palabras_clave[i][j];
            var buscar = yy.search(valor); 

            if(buscar==-1){
                break;
            }

        }

        if(buscar == -1){

            var x = false;
           
        }
        else{
            var x = true;
            var rr = i;
            break;
        } 
    }

    if(x===true){

        rr=i;
        setTimeout(responder2,1000);
    }
    else{
        setTimeout(nosabe,1000);
    }
    }
}

// 答案
const respuestas_final = [
    "mi nombre es Mili.",
    "mi nombre es Mili.",
    "apenas nací hace pocos semanas.",
    "apenas nací hace pocos semanas.",
    // 餐馆位置
    "nuestro restaurante se ubica en la avenida petit thouars 1101 , cercado de lima , Urb santa beatriz. ",
    "nuestro restaurante se ubica en la avenida petit thouars 1101 , cercado de lima , Urb santa beatriz." ,
    "nuestro restaurante se ubica en la avenida petit thouars 1101 , cercado de lima , Urb santa beatriz." ,
    "nuestro restaurante se ubica en la avenida petit thouars 1101 , cercado de lima , Urb santa beatriz." ,
    // 问送外卖
    "solo hago envio a toda santa beatriz y no cobramos ningun costo adicional.",
    "solo hago envio a toda santa beatriz y no cobramos ningun costo adicional.",
    "solo hago envio a toda santa beatriz y no cobramos ningun costo adicional.",
    "claro , hacemos envio a toda santa beatriz , 0 costo adicional.",
    // 问营业时间
    "nuestro horario de atencion es de 12 a 10 pm , todo los dias.",
    "nuestro horario de atencion es de 12 a 10 pm , todo los dias.",
    "nuestro horario de atencion es de 12 a 10 pm , todo los dias.",
    "nuestro horario de atencion es de 12 a 10 pm , todo los dias.",
    "cerramos a las 10pm",
    "cerramos a las 10pm",
    "nuestro horario de atencion es de 12 a 10 pm , todo los dias.",
    // 想点餐
    "deseas realizar un pedido ? aun no tengo la funcion de tomar pedido , por favor comuniquense con mi papa , el sr cao .",
    "deseas realizar un pedido ? aun no tengo la funcion de tomar pedido , por favor comuniquense con mi papa , el sr cao .",
  
    // 问推荐菜
    "pollo taypa es nuestro mejor plato , es un saltado de verduras con todo tipo de carne mas arroz chaufa. si deseas realizar pedido , por favor comica con el sr Cao .",
    "pollo taypa es nuestro mejor plato , es un saltado de verduras con todo tipo de carne mas arroz chaufa. si deseas realizar pedido , por favor comica con el sr Cao .",
    "pollo taypa es nuestro mejor plato , es un saltado de verduras con todo tipo de carne mas arroz chaufa. si deseas realizar pedido , por favor comica con el sr Cao .",
    "pollo taypa es nuestro mejor plato , es un saltado de verduras con todo tipo de carne mas arroz chaufa. si deseas realizar pedido , por favor comica con el sr Cao .",
    "pollo taypa es nuestro mejor plato , es un saltado de verduras con todo tipo de carne mas arroz chaufa. si deseas realizar pedido , por favor comica con el sr Cao .",
    // carta 
    "mi papa le dio flojera hacer la funcion de salta a la pagina de carta , usted puede  ingresa a nuestro pagina web , en la parte donde dice cartas , esta todo nustro menu con sus respectivos precios.",
    "mi papa le dio flojera hacer la funcion de salta a la pagina de carta , usted puede  ingresa a nuestro pagina web , en la parte donde dice cartas , esta todo nustro menu con sus respectivos precios.",
    "mi papa le dio flojera hacer la funcion de salta a la pagina de carta , usted puede  ingresa a nuestro pagina web , en la parte donde dice cartas , esta todo nustro menu con sus respectivos precios.",
    "mi papa le dio flojera hacer la funcion de salta a la pagina de carta , usted puede  ingresa a nuestro pagina web , en la parte donde dice cartas , esta todo nustro menu con sus respectivos precios.",
    "mi papa le dio flojera hacer la funcion de salta a la pagina de carta , usted puede  ingresa a nuestro pagina web , en la parte donde dice cartas , esta todo nustro menu con sus respectivos precios.",
    "mi papa le dio flojera hacer la funcion de salta a la pagina de carta , usted puede  ingresa a nuestro pagina web , en la parte donde dice cartas , esta todo nustro menu con sus respectivos precios.",
    "mi papa le dio flojera hacer la funcion de salta a la pagina de carta , usted puede  ingresa a nuestro pagina web , en la parte donde dice cartas , esta todo nustro menu con sus respectivos precios.",
    "mi papa le dio flojera hacer la funcion de salta a la pagina de carta , usted puede  ingresa a nuestro pagina web , en la parte donde dice cartas , esta todo nustro menu con sus respectivos precios.",

]

function responder2(){
    var cc = respuestas_final[i];

    document.getElementById("conversacion").innerHTML += `
    <div class="mensaje1">
        <p class="mili">${cc}</p>
    </div>
    
    `;

}

// 找不到答案时
function nosabe(){
    document.getElementById("conversacion").innerHTML += `
    <div class="mensaje1">
        <p class="mili">no entiendo lo que me quieres decir.</p>
    </div>
    
    `;
}

// 特殊回应
function responder3(){
    document.getElementById("conversacion").innerHTML += `
    <div class="mensaje1">
        <p class="mili">Pero yo ya te dije , acaso buscas golpe ?! no puedes volver a leer?</p>
    </div>
    
    `;
    setTimeout(responder4,3000);
}

function responder4(){
    document.getElementById("conversacion").innerHTML += `
    <div class="mensaje1">
        <p class="mili">sorry , normalmente no soy asi , no te enojaras con un niña recien nacido verdad ?</p>
    </div>
    
    `;
}

// 自动退出聊天页面设置
function responder5(){

    document.getElementById("conversacion").innerHTML += `
    <img id="molesto" src="./imagen/enojado.png"/>
    <div class="mensaje1">
        <p class="mili">ya no te hare caso.</p>
    </div>
    `;
    document.getElementById("conversacion").innerHTML += `
    <div class="mensaje1">
        <p class="mili">9 segundo despues se retira automaticamente del chat.</p>
    </div>
    `;

    setInterval(conteo , 1000);
}



function conteo(){

    var busca = document.getElementsByClassName("mili");
    for(a=0 ; a < busca.length ; a++){
        var p = busca[a];
    }
   
    // var pp = "9";
    var resul = p.innerHTML;
    var num = resul.charAt(0) ;
    var rever = num - 1;
    var xd = rever + "segundo despues se retira automaticamente del chat."
    document.getElementById("conversacion").innerHTML += `
    <div class="mensaje1">
        <p class="mili">${xd}</p>
    </div>
    `;
    
    if(num==0){
        window.location.href='https://chuculu1129.github.io/chifa_fung_seng.github.io/chifa_fung_seng/chifa.html';
    }
}


// 。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。

// 西文聊天设计

// 页面转换西文

function spanish(){
    window.location.href="falseAIEsp.html";
}

function chinese(){
    window.location.href="falseAI.html";
}