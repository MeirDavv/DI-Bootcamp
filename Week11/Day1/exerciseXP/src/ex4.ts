function check (num: number):string {
    if(num < 0){
        return 'negative';
    }
    else if(num == 0){
        return 'zero';
    }
    return 'positive';
}

console.log(check(-1));