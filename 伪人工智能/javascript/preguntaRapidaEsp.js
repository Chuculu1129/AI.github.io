const btn = document.getElementById("btn1");

// 主按钮
function preguntas() {
    document.getElementById("pregunta").classList.toggle("pregunta2");
    btn.style.display = "none";
}

// 子按钮1
function pregunta1() {

    document.getElementById("pregunta").classList.toggle("pregunta2");
    btn.style.display = "block";
    document.getElementById("conversacion").innerHTML += `
    <div class="mensaje2">
        <p class="cliente">Quien fue tu creador ?</p>
    </div>
    
    `;

    setTimeout(respuesta1, 1000);
}

function respuesta1() {

    // 判断回答中文还是西文
    // const pregunta_uno = document.getElementById("btn1.1").innerHTML;
    // const primer_letra = pregunta_uno.charAt[0];
    // var posible_respuesta = "";

    // if(primer_letra == "q"){
    //      posible_respuesta = "mi padre es el señor cao , un programador no profecional , un dia se le llego una idea en la mente y nací yo."
    // }
    // else{
    //      posible_respuesta = "我的父亲是曹先生，一位非专业的程序员，有一天他突发奇想，嘎一声就把我给生下来了。"
    // }

    document.getElementById("conversacion").innerHTML += `
    <div class="mensaje1">
        <p class="mili">mi padre es el señor cao , un programador no profecional , un dia se le llego una idea en la mente y nací yo</p>
    </div>
    
    `;
}

// 子按钮2
function pregunta2() {
    // let cliente = document.getElementById("cliente");

    document.getElementById("pregunta").classList.toggle("pregunta2");
    btn.style.display = "block";
    document.getElementById("conversacion").innerHTML += `
    <div class="mensaje2">
        <p class="cliente">Que puedes hacer por mi ?</p>
    </div>
    
    `;

    setTimeout(respuesta2, 1000);
}

function respuesta2() {
    document.getElementById("conversacion").innerHTML += `
    <div class="mensaje1">
        <p class="mili">apenas cumplo una semana de nacimiento , pero ya puedo hacer bastantes cosas , si deseas saber algo sobre nuestro restaurante , escribeme abajo.</p>
    </div>
    
    `;

}
