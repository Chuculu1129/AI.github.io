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
    
    for(a=0 ; a < aa.length ; a++){

        var y = aa[a];
    }

    var yy = y.innerHTML;

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
    "我们晚上11点准时关门， 人家没有手表，所以无法准确告诉你现在到点了没有。",
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
        <p id="mili">${cc}</p>
    </div>
    
    `;

}

// 找不到答案时

function nosabe(){
    document.getElementById("conversacion").innerHTML += `
    <div class="mensaje1">
        <p id="mili">我不太明白你在说什么。</p>
    </div>
    
    `;
}

