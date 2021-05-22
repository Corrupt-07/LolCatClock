console.log("This is index");

const date = new Date();
var ap = "AM";
// console.log(date);
// console.log(new Date().toLocaleTimeString())
setInterval(() => {
    const date = new Date();
    var hours = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    // console.log(inputValue);
    if (hours > 12) {
        hours = hours - 12;
        ap = "PM"
    }
    const pId = document.getElementById('actual_time');
    dateString = `${hours} : ${min} : ${sec} ${ap}`;
    pId.innerHTML = dateString;
}, 1000);

function setAlarm() {
    console.log('You are inside set alarm function');
    const inputValue = document.querySelector('#setAlarm').value;
    const inputamPm = document.querySelector('#amPm').value;
    console.log(inputValue);
    // console.log(inputValue.slice(3,5));
    var regex = /^(0[1-9]|1[0-2]):[0-5][0-9]/;
    console.log(regex);
    if (regex.test(inputValue)) {
        console.log("match");
        ringBell(inputValue, inputamPm);
    } else {
        document.querySelector('#errorMessage').innerHTML = "Please enter the time in format of example 12:00";
        setInterval(() => {
            document.querySelector('#errorMessage').innerHTML = "";
        }, 4000);

    }
}

function ringBell(inputValue, inputamPm) {
    let audio = new Audio("sound.mp3");
    setInterval(() => {
        const date = new Date();
        var hours = date.getHours();
        var min = date.getMinutes();
            if (hours > 12) {
            hours = hours - 12;
    }
        // console.log(inputValue);
         console.log(hours.toString(), inputValue.slice(1,2) , min.toString() , inputValue.slice(3,5), inputamPm,ap);
        if (hours.toString() === inputValue.slice(1, 2) && min.toString() === inputValue.slice(3, 5) && inputamPm === ap) {
            console.log("ring the bell");
            audio.play();
            // console.log(min.toString() , inputValue.slice(3, 5))
            // if (min.toString() > inputValue.slice(3, 5)) {
            //     console.log(min.toString() , inputValue.slice(3, 5))
            //     setInterval(() => {
            //         audio.play();
            //     }, 50000);
            // }
        }
    }, 1000);
}
