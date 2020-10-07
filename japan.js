function getKana(list = ["B","K","S","T","N","H","M","Y","R","W"]){
    listKana = [];
    for (const [key, value] of Object.entries(kana)){
        if(list.includes(kana[key]["group"])){
            listKana.push( key );
        }
    }
    return listKana;
}

function randKana(list = ["B","K","S","T","N","H","M","Y","R","W"]){
    listKana = getKana(list);
    return listKana[Math.floor(Math.random() * listKana.length)];
}

function getKanaRatio(kanaGet,kanaSelect){
    total = kana[kanaGet][kanaSelect]["success"]+kana[kanaGet][kanaSelect]["error"];
    ratio = (kana[kanaGet][kanaSelect]["success"]/total)*100;
    ratio = ratio || 0
    return ratio;
}

function getKanaScore(kanaGet,kanaSelect){
    return kana[kanaGet][kanaSelect]["score"];
}

function addKanaSuccess(kanaGet,kanaSelect){
    kana[kanaGet][kanaSelect]["success"]++;
    score = kana[kanaGet][kanaSelect]["score"];
    if(score<100){
        kana[kanaGet][kanaSelect]["score"]++;
    }
}

function addKanaError(kanaGet,kanaSelect){
    kana[kanaGet][kanaSelect]["error"]++;
    score = kana[kanaGet][kanaSelect]["score"];
    if(score>0){
        kana[kanaGet][kanaSelect]["score"]--;
    }
}











// for (const [key, value] of Object.entries(kanagroup)) {
//     json[key] = [];
//     json[key][value[index] = [];
//     json[key][value[index]]["hiragana"] = [];
//     json[key][value[index]]["hiragana"] = [];
//     for (let index = 0; index < value.length; index++) {
//         json[key][value[index]]["hiragana"]["success"] = 0;
//         json[key][value[index]]["hiragana"]["error"] = 0;
//         json[key][value[index]]["katakana"]["success"] = 0;
//         json[key][value[index]]["katakana"]["error"] = 0;
//     }
// }











// function randList(list){
//     return Math.floor(Math.random() * list.length);
// }

// function randKana(){
//     return kanalist[randList(kanalist)];
// }

// function tableGen(){
//     $("#tbodykanaTable").empty();
//     let result = kanaResult["hiragana"];
//     for (let i = 0; i < Object.keys(kanaResult["hiragana"]).length; i++) {
//         if(result[kanalistAll[i]]["success"]!=0 || result[kanalistAll[i]]["error"]!=0){
//             $("#tbodykanaTable").append("<tr><td>"+result[kanalistAll[i]]["name"]+"</td><td>"+result[kanalistAll[i]]["success"]+"</td><td>"+result[kanalistAll[i]]["error"]+"</td></tr>");
//         }
//     }
// }



// console.log(JSON.stringify(json));


// let kanalist = [];
// let kanalistAll = [];
// for (let index = 0; index < kanagroup.length; index++) {
//     for (let i = 0; i < kanagroup[index].length; i++) {
//         kanalistAll.push(kanagroup[index][i]);
//     }
// }

// function genKanaList(){
//     kanalist = [];
//     for (let index = 0; index < kanagroup.length; index++) {
//         for (let i = 0; i < kanagroup[index].length; i++) {
//             if($('input[name='+index+']').is(':checked')){
//                 kanalist.push(kanagroup[index][i]);
//             }
//         }
//     }
// }

// function genResult(){
//     kanaResult = [];
//     kanaResult["hiragana"] = [];
//     for (let index = 0; index < kanalistAll.length; index++) {
//         kanaResult["hiragana"][kanalistAll[index]] = [];
//         kanaResult["hiragana"][kanalistAll[index]]["name"] = kanalistAll[index];
//         kanaResult["hiragana"][kanalistAll[index]]["success"] = 0;
//         kanaResult["hiragana"][kanalistAll[index]]["error"] = 0;
//     }
// }
