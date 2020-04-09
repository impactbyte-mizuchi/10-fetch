const isMommyHappy = true;

const WillIGetNewLaptop = new Promise((resolve, reject) => {
    let laptop = {
        type: "gaming",
        brand: "asus",
        color: "Black Red",
    };
    if (isMommyHappy === true) {
        resolve(laptop);
    } else {
        let reason = new Error("Mommy is very angry");
        reject(reason);
    }
});

// use .then

WillIGetNewLaptop.then((result) => {
    console.log(result);
});

// async await

let resolvePromiseAsync = async () => {
    let newArray = [];
    let result = await WillIGetNewLaptop;

    newArray.push(result);

    console.log(newArray);
};

resolvePromiseAsync();

const operand = "addition";

const calculate = new Promise((resolve, reject) => {
    const number1 = 20;
    const number2 = 30;

    if (operand === "addition") {
        resolve(number1 + number2);
    } else if (operand === "substract") {
        resolve(number1 - number2);
    } else {
        let reason = new Error("Operand is wrong");
        reject(reason);
    }
});

async function additionNumber() {
    let result = await calculate;

    console.log(result + 100);
}

additionNumber();
