const display = document.getElementById('user-input');
let num1 = -1;
let num2 = -1;
let calc = "";

function displayValue(id) {
    let num = document.getElementById(id);
    if (display.value.toString() === '' || display.value.toString() === "Invalid Operation")
        display.value = num.innerText;
    else {
        num = display.value + document.getElementById(id).innerText;
        display.value = num;
    }

}

function calculation(symbol) {
    switch (symbol) {
        case 'C':
            display.value = "";
            num1 = -1;
            num2 = -1;
            styling('operation7', 'cancel');
            break;
        case 'del':
            display.value = display.value.toString().slice(0, -1);
            break;
        case '+':
            calc = "+";
            styling('operation6', 'operation');
            if (display.value.toString() === '') {
                console.log('empty');
            }
            else {
                num1 = display.value;
                console.log(num1);
                display.value = "";
            }
            break;
        case '-':
            calc = "-";
            styling('operation5', 'operation');
            if (display.value.toString() === '') {
                console.log('empty');
            }
            else {
                num1 = display.value;
                console.log(num1);
                display.value = "";
            }
            break;
        case 'x':
            calc = "x";
            styling('operation4', 'operation');
            if (display.value.toString() === '') {
                console.log('empty');
            }
            else {
                num1 = display.value;
                console.log(num1);
                display.value = "";
            }
            break;
        case '/':
            calc = "/";
            styling('operation3', 'operation');
            if (display.value.toString() === '') {
                console.log('empty');
            }
            else {
                num1 = display.value;
                console.log(num1);
                display.value = "";
            }
            break;
        case '%':
            calc = "%";
            styling('operation2', 'operation');
            if (display.value.toString() === '') {
                console.log('empty');
            }
            else {
                num1 = display.value;
                console.log(num1);
                display.value = "";
            }
            break;
        case 'R':
            calc = "R";
            styling('operation1', 'operation');
            if (display.value.toString() === '') {
                console.log('empty');
            }
            else {
                const root = Math.sqrt(parseInt(display.value));
                display.style.direction = "ltr";
                display.value = `${root}`;
                break;
            }
            break;
        case '=':
            num2 = display.value;
            console.log("num1: ", num1)
            console.log("num2: ", num2)
            if (num1===-1 || num2===-1 || num2==='') {
                console.log('error');
                num1 = -1;
                num2 = -1;
                display.value = "Invalid Operation"
            } else {
                switch (calc) {
                    case "+":
                        const sum = parseInt(num1)+parseInt(num2)
                        display.style.direction = "ltr";
                        display.value = `${num1} + ${num2} = ${sum}`;
                        break;
                    case "-":
                        const sub = parseInt(num1)-parseInt(num2)
                        display.style.direction = "ltr";
                        display.value = `${num1} - ${num2} = ${sub}`;
                        break;
                    case "x":
                        const mul = parseInt(num1)*parseInt(num2)
                        display.style.direction = "ltr";
                        display.value = `${num1} x ${num2} = ${mul}`;
                        break;
                    case "/":
                        const div = parseInt(num1)/parseInt(num2)
                        display.style.direction = "ltr";
                        display.value = `${num1} / ${num2} = ${div}`;
                        break;
                    case "%":
                        const mod = parseInt(num1)%parseInt(num2)
                        display.style.direction = "ltr";
                        display.value = `${num1} % ${num2} = ${mod}`;
                        break;
                }

            }
    }

}

function styling(id, type) {
    let prefix = 'operation';
    switch (type) {
        case 'operation':
            for (let i=1; i<=7 ; i++) {
                let element = document.getElementById(prefix + i);
                console.log(id);
                if (element.id===id){
                    element.style.background = "#3cba54";
                    element.style.color = "#fff";
                }
                else {
                    element.style.background = "#ecf0f3";
                    element.style.color = "#3cba54";
                }
            }
            break;
        case 'cancel':
            display.style.direction = "rtl"
            for (let i=1; i<=7 ; i++) {
                let element = document.getElementById(prefix + i);
                element.style.background = "#ecf0f3";
                element.style.color = "#3cba54";
            }
            break;
    }
}