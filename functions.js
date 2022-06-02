
export function add(x, y) {
    return x + y;
}

export function subtract(x, y) {
    return x - y;
}

export function multiply(x, y) {
    return x * y;
}

export function areaOfTriangle(b, h) {
    return (b * h) / (2);

}

export function comparison(x, y) {
    if (x + y < 100);
    return true;
}

export function greaterThan(x, y) {
    if (x + y > 100);
    return false;
}

export function even(x) {
    if (x % 2 === 0) { 
        return 'even';
    } else { 
        return false;
    }
}

export function odd(x) {
    if (x % 1 === 0) { 
        return 'odd';
    } else { 
        return false;
    }
}
/*export function formatName(first, last, middle) {

    if (middle){
    return first + ' ' + middle + ' ' + last;
    }

    return first + ' ' + last; 

    

}*/