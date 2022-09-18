
let grn = {

    0: "гривень",
    1: "гивня",
    2: "гривні",
    3: "гривні",
    4: "гривні",
    5: "гривень",
    6: "гривень",
    7: "гривень",
    8: "гривень",
    9: "гривень"

}

let ForUnit = {

    1: "Одна",
    2: "Дві",
    3: "Три",
    4: "Чотири",
    5: "П'ять",
    6: "Шість",
    7: "Сім",
    8: "Вісім",
    9: "Дев'ять"

}

let ForHundreds = {

    1: "Сто",
    2: "Двісті",
    3: "Триста",
    4: "Чотириста",
    5: "П'ятсот",
    6: "Шістсот",
    7: "Сімсот",
    8: "Вісімсот",
    9: "Дев'ятсот"

}

let ForNoun = {

    0: "",
    2: "Двадцять",
    3: "Тридцять",
    4: "Сорок",
    5: "П'ятдесят",
    6: "Шістдесят",
    7: "Сімдесят",
    8: "Вісімдесят",
    9: "Дев'яносто"

}

let ForTen = {

    10: "Десять",
    11: "Одинадцять",
    12: "Дванадцять",
    13: "Тринадяцять",
    14: "Чотирнадцять",
    15: "П'ятнадцять",
    16: "Шістнадцять",
    17: "Сімнадцять",
    18: "Вісімнадцять",
    19: "Дев'ятнадцять"

}

    
let varible;

function WordTranslat(){

    let number = numberInput.value;
    
    let str = number.split('');
    
    str = str.reverse();
    
    if(str[2]){ //if have hundreds
    
        varible = ForHundreds[str[2]];
    
        if(str[1] == 0){  //if second numder = 0
    
            varible = varible + " " + ForUnit[str[0]] + " " + grn[str[0]];
    
        }
    
        if(str[1] == 1){ //if second number = 0
    
            let value = str[1] + str[0];
    
            varible = varible + " " + ForTen[value] + " гривень" ;
    
        }
    
        if((str[1] != 1) && (str[1] != 0)){ //else
    
            if(str[0] == 0){
    
                varible = varible + " " + ForNoun[str[1]] + " гривень";
    
            }else{
    
                varible = varible + " " + ForNoun[str[1]] + " " + ForUnit[str[0]] + " " + grn[str[0]];
    
            }
    
        }
    
    }
    
    if(str[2] == undefined){
    
        if(str[1] == 1){ 
    
            let value = str[1] + str[0];
    
            varible = ForTen[value] + " гривень" ;
    
        }
    
        else{ 
    
            if(str[0] == 0){
    
                varible = ForNoun[str[1]] + " гривень";
    
            }else{
    
                varible = ForNoun[str[1]] + " " + ForUnit[str[0]] + " " + grn[str[0]];
    
            }
    
        }
    
    }
    
    if(str[1] == undefined){
    
        varible = ForUnit[str[0]] + " " + grn[str[0]];
    
    }
    
    indexInput.innerHTML = `${varible}`;

}
