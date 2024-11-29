let hrs = document.getElementById('hrs');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let dateElement = document.getElementById('date');

setInterval(() => {
    let currentTime = new Date();

    hrs.innerHTML = (currentTime.getHours() < 10 ? '0' : '') + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes() < 10 ? '0' : '') + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds() < 10 ? '0' : '') + currentTime.getSeconds();

    let currentDate = currentTime.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    dateElement.innerHTML = currentDate;
}, 1000);
