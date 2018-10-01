// alert ('Hello World');






function quadraticEquation(a, b, c){
    const d = calcDecrement(a, b, c);
        if (d > 0) {
        const x1 = ((-b) + Math.sqrt(d)) / (2 * a);
        const x2 = ((-b) - Math.sqrt(d)) / (2 * a);
        return 'x1 = ' + x1 + '\nx2 = ' + x2;
    }   else if (d == 0) {
        const x = -b / (2 * a);
        return 'x = ' + x;
    }   else  {
        alert('Wrong numbers!')
    }
}

function calcDecrement(a, b, c){
    const d = /*Math.pow*/(b * b) - (4 * a * c);
    return d;
}
const a = parseInt(prompt('a = '));
const b = parseInt(prompt('b = '));
const c = parseInt(prompt('c = '));
const result = quadraticEquation(a, b, c);
alert (result);