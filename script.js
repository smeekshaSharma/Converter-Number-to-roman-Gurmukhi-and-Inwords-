window.onload = function() {
    // actual  conversion code starts here
    var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    function convert_millions(num) {
        if (num >= 1000000) {
            return convert_millions(Math.floor(num / 1000000)) + " million " + convert_thousands(num % 1000000);
        } else {
            return convert_thousands(num);
        }
    }

    function convert_thousands(num) {
        if (num >= 1000) {
            return convert_hundreds(Math.floor(num / 1000)) + " thousand " + convert_hundreds(num % 1000);
        } else {
            return convert_hundreds(num);
        }
    }

    function convert_hundreds(num) {
        if (num > 99) {
            return ones[Math.floor(num / 100)] + " hundred " + convert_tens(num % 100);
        } else {
            return convert_tens(num);
        }
    }

    function convert_tens(num) {
        if (num < 10) return ones[num];
        else if (num >= 10 && num < 20) return teens[num - 10];
        else {
            return tens[Math.floor(num / 10)] + " " + ones[num % 10];
        }
    }

    function convert(num) {
        if (num == 0) return "zero";
        else return convert_millions(num);
    }

    //end of conversion code

    //testing code begins here

    function main(val) {
        var cases = val;
        // 123=> one hundred twenty three

        //   returning the inWords 
        return convert(cases);
    }


    function convertToRoman(num) {

        var roman = {
            "((M))": 1000000000,
            "((C))": 100000000,
            "((L))": 50000000,
            "((X))": 10000000,
            X̅: 10000,
            V̅: 5000,
            MMMM: 4000,
            MMM: 3000,
            MM: 2000,
            M: 1000,
            CM: 900,
            D: 500,
            CD: 400,
            C: 100,
            XC: 90,
            L: 50,
            XL: 40,
            X: 10,
            IX: 9,
            V: 5,
            IV: 4,
            I: 1
        };
        // obj ={key:value}
        // objname[key] =>value
        var str = '';
        console.warn(Object.keys(roman));
        for (var i of Object.keys(roman)) {

            var q = Math.floor(num / roman[i]);

            num -= q * roman[i];
            str += i.repeat(q);
        }



        return str;
    }


    // creating element event in script instead of onClick on script loading 
    // function run huna kuki apa button nu id diti aa 'clickme'
    var el = document.getElementById('clickme');
    el.addEventListener("click", function() {
        // take the value from the text box and put it in val
        let val = document.getElementById('txt').value;

        if (val.length > 10) {
            alert("Please enter no more than 10 characters.")
            document.getElementById('txt').value = "";
        } else {

            // pass the value to main() and get the in words 8=> eight and store it in variable
            var inWordsVal = main(val)
                // get the id of paragraph and put in words in it
            document.getElementById("p").innerHTML = inWordsVal;
            // get the id p=of another paragraph and put the number value i.e '8' in it 123
            document.getElementById("p1").innerHTML = val;
            var str = convertToRoman(val)
            document.getElementById("p3").innerHTML = str;



        }

    });

}