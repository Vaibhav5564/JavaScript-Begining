let digit = document.querySelectorAll(".elInCal");
let input = document.querySelector(".input-class");

let justEvaluated = false;
const operators = "+-X÷^";

function evaluate(value) {

    if (value === "AC") {
        input.value = "";
        justEvaluated = false;
        return;
    }

    if (value === "⌫") {
        if (justEvaluated) return;
        input.value = input.value.slice(0, -1);
        return;
    }

    if (value === "=") {
        try {
            let expression = input.value
                .replace(/X/g, "*")
                .replace(/÷/g, "/")
                .replace(/\^/g, "**");

            input.value = eval(expression);
            justEvaluated = true;
        } catch {
            input.value = "Error";
            justEvaluated = true;
        }
        return;
    }

   
    if (justEvaluated) {
        if (operators.includes(value)) {
            // continue calculation
            input.value += value;
        } else {
            // start new calculation
            input.value = value;
        }
        justEvaluated = false;
        return;
    }

   
    input.value += value;
}

digit.forEach((element) => {
    element.addEventListener("click", () => {
        evaluate(element.innerText);
    });
});
