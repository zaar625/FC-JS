const add =(a, b) => a+ b;

const range = l => {
    let i = -1;
    let res = [];
    while (++i < l) {
        res.push(i);
    }
    return res;
}

console.log(range(5));

const list = range(4);
