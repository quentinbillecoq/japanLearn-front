function randList(list){
    return Math.floor(Math.random() * list.length);
}

function randKana(){
    return kanalist[randList(kanalist)];
}

function tableGen(){
    $("#tbodykanaTable").empty();
    let result = kanaResult["hiragana"];
    for (let i = 0; i < Object.keys(kanaResult["hiragana"]).length; i++) {
        if(result[kanalistAll[i]]["success"]!=0 || result[kanalistAll[i]]["error"]!=0){
            $("#tbodykanaTable").append("<tr><td>"+result[kanalistAll[i]]["name"]+"</td><td>"+result[kanalistAll[i]]["success"]+"</td><td>"+result[kanalistAll[i]]["error"]+"</td></tr>");
        }
    }
}

let kanagroup = [];
kanagroup[0] = ["A","I","U","E","O"];
kanagroup[1] = ["KA","KI","KU","KE","KO"];
kanagroup[2] = ["SA","SHI","SU","SE","SO"];
kanagroup[3] = ["TA","CHI","TSU","TE","TO"];
kanagroup[4] = ["NA","NI","NU","NE","NO"];
kanagroup[5] = ["HA","HI","FU","HE","HO"];
kanagroup[6] = ["MA","MI","MU","ME","MO"];
kanagroup[7] = ["YA","YU","YO"];
kanagroup[8] = ["RA","RI","RU","RE","RO"];
kanagroup[9] = ["WA","WO"];
kanagroup[10] = ["N"];

let kanalist = [];
let kanalistAll = [];
for (let index = 0; index < kanagroup.length; index++) {
    for (let i = 0; i < kanagroup[index].length; i++) {
        kanalistAll.push(kanagroup[index][i]);
    }
}

function genKanaList(){
    kanalist = [];
    for (let index = 0; index < kanagroup.length; index++) {
        for (let i = 0; i < kanagroup[index].length; i++) {
            if($('input[name='+index+']').is(':checked')){
                kanalist.push(kanagroup[index][i]);
            }
        }
    }
}

function genResult(){
    kanaResult = [];
    kanaResult["hiragana"] = [];
    for (let index = 0; index < kanalistAll.length; index++) {
        kanaResult["hiragana"][kanalistAll[index]] = [];
        kanaResult["hiragana"][kanalistAll[index]]["name"] = kanalistAll[index];
        kanaResult["hiragana"][kanalistAll[index]]["success"] = 0;
        kanaResult["hiragana"][kanalistAll[index]]["error"] = 0;
    }
}
