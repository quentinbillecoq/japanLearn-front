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
        console.log(result[kanalist[i]]["success"]);
        if(result[kanalist[i]]["success"]!=0 || result[kanalist[i]]["error"]!=0){
            $("#tbodykanaTable").append("<tr><td>"+result[kanalist[i]]["name"]+"</td><td>"+result[kanalist[i]]["success"]+"</td><td>"+result[kanalist[i]]["error"]+"</td></tr>");
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

for (let index = 0; index < kanagroup.length; index++) {
    for (let i = 0; i < kanagroup[index].length; i++) {
        kanalist.push(kanagroup[index][i]);
    }
}


let kanaResult = [];
kanaResult["hiragana"] = [];
for (let index = 0; index < kanalist.length; index++) {
    kanaResult["hiragana"][kanalist[index]] = [];
    kanaResult["hiragana"][kanalist[index]]["name"] = kanalist[index];
    kanaResult["hiragana"][kanalist[index]]["success"] = 0;
    kanaResult["hiragana"][kanalist[index]]["error"] = 0;
}
