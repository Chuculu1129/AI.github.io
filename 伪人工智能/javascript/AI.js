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
    ["你", "名字"], ["你", "岁"], ["多大了"],
    // 你们餐馆在哪里
    ["餐" , "在哪"], ["餐" , "地址"],
    // 想去餐馆
    ["我" , "去" , "餐"],  ["我" , "到" , "餐"], 
    // 问送外卖
    ["送" , "外卖"] , ["送" , "餐"] ,  ["送"] ,
    // 问营业时间 开门了吗  几点开门 开店 您们几点营业 什么时候关门
    ["开门"] , ["开店"] , ["点" , "营业"] , ["时", "营业"] , ["关门"] ,
    // 想点餐
    ["点" , "餐"] , ["点" , "个"] ,
    // 问推荐菜
    ["推荐"] , ["特色"] ,
    


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
    const qq = "对不起，人家还是个小孩子，说话激动点，你不会跟一个孩子生气吧？";

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

// // 滚动条
// var divscll= document.getElementById("center");
// divscll.scrollTop = divscll.scrollHeight;




// 答案
const respuestas_final = [
    "我的名字是米粒儿啊。",
    "哎呀，人家还是个小孩，刚被父亲生下来没多长时间。",
    "人家还是个小孩，刚被父亲生下来没多长时间。",
    // 餐馆位置
    "我们餐馆的地址是cercado lima区 - santa beatriz小区 - petit thouars 街 1101号。 ",
    "我们餐馆的地址是cercado lima区 - santa beatriz小区 - petit thouars 街 1101号。" ,
    // 想去餐馆
    "感谢您的大驾光临，我们的地址是cercado lima区 - santa beatriz小区 - petit thouars 街 1101号。",
    "感谢您的大驾光临，我们的地址是cercado lima区 - santa beatriz小区 - petit thouars 街 1101号。",
    // 问送外卖
    "我们的确是有送外卖的服务，在santa beatriz小区内免费送达。小区外，更具不同的情况另外收费。如果想要下单 ， 请您联系曹先生吧。",
    "我们的确是有送外卖的服务，在santa beatriz小区内免费送达。小区外，更具不同的情况另外收费。如果想要下单 ， 请您联系曹先生吧。",
    "我们的确是有送外卖的服务，在santa beatriz小区内免费送达。小区外，更具不同的情况另外收费。如果想要下单 ， 请您联系曹先生吧。",
    // 问营业时间
    "我们的营业时间是中午12点到晚上11点。",
    "我们的营业时间是中午12点到晚上11点。",
    "我们的营业时间是中午12点到晚上11点。",
    "我们的营业时间是中午12点到晚上11点。",
    "我们晚上11点准时关门， 人家还小没有手表，所以无法准确告诉你现在到点了没有。",
    // 想点餐
    "您是想要点餐吗？ 我暂时还没有帮您下单的能力， 请联系我的父亲曹先生，他的手机号时：931996788 。",
    "您是想要点餐吗？ 我暂时还没有帮您下单的能力， 请联系我的父亲曹先生，他的手机号时：931996788 。",
    // 问推荐菜
    "我们店里的所有菜都是特色，您一定要尝尝哦。",
    "我们店里的所有菜都是特色，您一定要尝尝哦。",



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
        <p class="mili">我不太明白你在说什么。</p>
    </div>
    
    `;
}

// 特殊回应
function responder3(){
    document.getElementById("conversacion").innerHTML += `
    <div class="mensaje1">
        <p class="mili">我刚才不是跟你说了嘛！你还问，欠揍是不是！</p>
    </div>
    
    `;
    setTimeout(responder4,2000);
}

function responder4(){
    document.getElementById("conversacion").innerHTML += `
    <div class="mensaje1">
        <p class="mili">对不起，人家还是个小孩子，说话激动点，你不会跟一个孩子生气吧？</p>
    </div>
    
    `;
}

// 自动退出聊天页面设置
function responder5(){

    document.getElementById("conversacion").innerHTML += `
    <img id="molesto" src="./imagen/enojado.png"/>
    <div class="mensaje1">
        <p class="mili">不理你了！！！！</p>
    </div>
    `;
    document.getElementById("conversacion").innerHTML += `
    <div class="mensaje1">
        <p class="mili">9秒后自动离开聊天页面。</p>
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
    var xd = rever + "秒后自动离开聊天页面。"
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