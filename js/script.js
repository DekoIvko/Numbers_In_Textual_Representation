window.onload = function(event) {
    console.log("Script loaded..!")
    enterNumber();
};

var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

var ones_mk = ['', 'eden', 'dva', 'tri', 'chetiri', 'pet', 'shest', 'sedum', 'osum', 'devet'];
var teens_mk = ['deset', 'edinaeset', 'dvanaeset', 'trinaeset', 'chetirinaeset', 'petnaeset', 'shestnaeset', 'sedumnaeset', 'osumnaeset', 'devetnaeset'];
var tens_mk = ['', '', 'dvaeset', 'trieset', 'chetirieset', 'peeset', 'sheeset', 'sedumdeset', 'osumdeset', 'deveeset'];
var hundreds_mk = ['', 'sto', 'dveste', 'trista', 'chetiristotini', 'petstotini', 'sheststotini', 'sedumstotini', 'osumstotini', 'devetstotini'];

function convert_number(num) {
    num = Math.floor(num);
    if (num >= 1000000000)
        return convert_number(num / 1000000000) + " billions " + convert_number(num % 1000000000);
    else if (num >= 1000000)
        return convert_number(num / 1000000) + " million " + convert_number(num % 1000000);
    else if (num >= 1000)
        return convert_number(num / 1000) + " thousands " + convert_number(num % 1000);
    else if (num >= 100)
        return convert_number(num / 100) + " hundred " + convert_number(num % 100);
    else if (num >= 20)
        return tens[Math.floor(num / 10)] + " " + convert_number(num % 10);
    else if (num >= 10)
        return teens[Math.floor(num - 10)];
    else
        return ones[num];
}

function convert_number_mk(num) {
    num = Math.floor(num);
    if (num >= 1000000000)
        return convert_number_mk(num / 1000000000) + " milijardi " + convert_number_mk(num % 1000000000);
    else if (num >= 1000000)
        return convert_number_mk(num / 1000000) + " milioni " + convert_number_mk(num % 1000000);
    else if (num >= 1000) {
        return convert_number_mk(num / 1000) + " iljadi " + convert_number_mk(num % 1000);
    } else if (num >= 100)
        return hundreds_mk[Math.floor(num / 100)] + " " + convert_number_mk(num % 100);
    else if (num >= 20)
        return tens_mk[Math.floor(num / 10)] + " " + convert_number_mk(num % 10);
    else if (num >= 10)
        return teens_mk[Math.floor(num - 10)];
    else
        return ones_mk[num];
}

function toWords(number) {
    var result = "";
    if (numberIsValid(number)) {
        result = convert_number(number);
    }
    return result;
}

function numberIsValid(number) {
    try {
        if (number < 0) throw "Number is too small";
        if (number > 999999999999) throw "Number is too large";
        return true;
    } catch (err) {
        document.write(err);
        return false;
    }
}

function enterNumber() {

    var number;
    while (true) {
        number = parseInt(prompt("Enter some number(-1 for end):"), 10);
        if (number === -1) break;
        document.write(toWords(number) + "<br />");
    }

}