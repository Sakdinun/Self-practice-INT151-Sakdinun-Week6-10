const createMultiplier = (secret) => {
    let backup = secret;
    function bigReturn (input) {
        return secret * input
    }


    bigReturn.getSecret = () => {
        return secret
    }

    bigReturn.setSecret = (newValue) => {
        secret = newValue
    }

    bigReturn.resetSecret = () => {
        secret = backup
    }
    
    return bigReturn

}





const timesThree = createMultiplier(3);

console.log(timesThree(4));
console.log(timesThree.getSecret());

timesThree.setSecret(10);
console.log(timesThree(2));
console.log(timesThree.getSecret());

timesThree.resetSecret()
console.log(timesThree(2));

const timesFive = createMultiplier(5)
console.log(timesFive(2));
console.log(timesFive.getSecret());

