const form = document.querySelector('.form'),
    input = document.querySelector('.input'),
    btn = document.querySelector('.btn'),
    text = document.querySelector('.text');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    switch (input.value) {
        case '1':
            console.log("Monday");
            text.textContent("Monday");

            break;

        case '2':
            console.log("Tusday");
            text.textContent = "Tuseday";

            break;
        case '3':
            console.log("Wednesday");
            text.textContent = "Wednesday";

            break;
        case '4':
            console.log("Thurday");
            text.textContent = "Thurday";

            break;
        case '5':
            console.log("Friday");
            text.textContent = "Friday";

            break;
        case '6':
            console.log("Saturday");
            text.textContent = "Saturday";

            break;
        case '7':
            console.log("Sunday");
            text.textContent = "Sunday";

            break;
        default:
            console.log("Unday kun yoq");
            text.textContent = "Unday kun yoq";

            break;
    }
})


// console.log(input.value);
// text.textContent(input.value)