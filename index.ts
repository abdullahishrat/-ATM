import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
 let pinAnswer =await inquirer.prompt(
    [
        {
            name: "pin",
            message: "Enter your pin",
            type: "number",
        }
    ]
);
if(pinAnswer.pin === myPin) {
    console.log("correct pin code!!!");

    let operationAna =await inquirer.prompt(
        [
            {
                name:"operation",
                message:"please select option",
                type:"list",
                choices:["withdraw", "check balance"]
            }
        ]
    );
    console.log(operationAna);
    if(operationAna.operation === "withdraw") {
        let amoubtAns = await inquirer.prompt(
            [
                {
                    name:"amount",
                    message:"enter your amount",
                    type:"number",
                }
            ]
        );
        myBalance -= amoubtAns.amount;
        
        console.log("your remaining balance is unsophisticated " );
    }

}
else {
    console.log("incorrect pin number")
}


