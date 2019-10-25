/// A-1

function sum(n) {
    var result = 0;
    var counter = 0;
    while (counter <= n) {
        result = result + counter;
        counter++;
    }
    return result;
}

/// A-2

function factorial(n) {
    var result = 1;
    var counter = 1;
    while (counter <= n) {
        result = result * counter;
        counter++;
    }
    return result;
}

/// A-3

function repeatString(str, conut) {
    var result = '';
    var c = 0;
    while (c < conut) {
        result = result + str;
        c++;
    }
    return result;
}

//More Practice

//A-1

function multiplyBy10(number, n) {

    var result = 1;
    var counter = 1;
    while (counter <= n) {
        result = result * 10;
        counter++;
    }
    return result * number;
}

// A-2

function counting(n) {
    var result = '';
    var counter = 1;
    while (counter < n) {
        result += counter;
        counter++;
        if (counter !== n) {
            result += ','
        } else {
            result = result + ',' + counter;
        }
    }
    return result;
}

/// A-3

function meetAndGreet(n) {
    var counter = 1;
    var result = '';
    while (counter <= n) {
        if (counter === 1) {
            result = 'welcome ' + counter;
        } else if (counter === 2) {
            result = result + '\nwelcome ' + counter + ', meet ' + (counter - 1);
        } else {
            var i = 1;
            result += '\nwelcome ' + counter + ', meet ';
            while (i < counter) {
                if (i === counter - 1) {
                    result += 'and ' + i;
                } else if (i === counter - 2) {
                    result += i + ' ';
                } else {
                    result += i + ', ';
                }
                i++;
            }
        }
        counter++;
    }
    return result;
}

// A-4

function reverseString(str) {
    var result = '';
    var counter = str.length - 1;
    while (counter >= 0) {
        result += str[counter]
        counter--;
    }
    return result;
}

// A-5

function primeNumbers(number) {
	var counter = 1;

	while(counter<number){
		if(!Number.isInteger(counter/2)){
			console.log(counter);
		}
		counter++;
	}
}

// A - 6

function isEvenOdd(end) {
	for(var i = 0; i <= end;i++){
		console.log( i + ' is ' + (i % 2 === 0 ? 'even' : 'odd'));
	}
}

// A - 7

function getFactors(n) {
    var res = [];

    for (var i = 1; i <= n; i++) {
        for (var j = 1; j < i; j++) {
            i * j === n ? res.push(i, j) : '';
        }
    }

    return res.sort(function(a, b) {
        return a - b;
    });
}

//Advanced

// A - 1

function firstAndLast(number) {
	
}

// A - 2

(function(argument) {
	for(var i = 1; i < 11; i ++){
		console.log('*');
	}
})()