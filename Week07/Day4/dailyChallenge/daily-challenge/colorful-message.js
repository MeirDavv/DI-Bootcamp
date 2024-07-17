import chalk from 'chalk';

function colorfulMessage(){
    const headline = chalk.underline.green;
    return(headline("That's an awsome colorful headline"));
}

export {colorfulMessage};