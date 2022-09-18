
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

    1: "",
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



}

let number = '190';

let varible;

let str = number.split('');

if((number % 100) > 9){

    varible = ForHundreds[str[0]];

    number = number % 100;

    console.log(number);

    if((number % 10) == 0){

        varible = varible + " " + ForNoun[str[1]];

        number = number % 10;

        if(number > 0){

            varible = varible + " " + ForUnit[str[2]];

            varible = varible + " " + grn[str[2]];

            console.log(varible);

        }

    }

}

// if((number % 100)){


// }

if(number == 100){

    varible = ForHundreds[str[0]];

    varible = varible + " " + grn[str[2]];

    console.log(varible);

}

// number = number % 100;

// number = number % 10;

// console.log(number);