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
        <p class="cliente">谁是你的制作者？</p>
    </div>
    
    `;

    setTimeout(respuesta1, 1000);
}

function respuesta1() {

    // 判断回答中文还是西文
    const pregunta_uno = document.getElementById("btn1.1").innerHTML;
    const primer_letra = pregunta_uno.charAt[0];
    var posible_respuesta = "";

    if(primer_letra == "q"){
         posible_respuesta = "mi padre es el señor cao , un programador no profecional , un dia se le llego una idea en la mente y nací yo."
    }
    else{
         posible_respuesta = "我的父亲是曹先生，一位非专业的程序员，有一天他突发奇想，嘎一声就把我给生下来了。"
    }

    document.getElementById("conversacion").innerHTML += `
    <div class="mensaje1">
        <p class="mili">${posible_respuesta}</p>
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
        <p class="cliente">你都能为我做什么？</p>
    </div>
    
    `;

    setTimeout(respuesta2, 1000);
}

function respuesta2() {
    document.getElementById("conversacion").innerHTML += `
    <div class="mensaje1">
        <p class="mili">别看我还小，但我会做的事情可多了，我能为你提供关于餐馆的所有信息，
        如果你有什么想问的，请在输入框里提问。但毕竟人家还小，
        要是有什么我答不上来的，请不要生气哟。</p>
    </div>
    
    `;

}
