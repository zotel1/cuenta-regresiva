const nextYear = (new Date()).getFullYear() + 1;
const nextYearDate = new Date(nextYear, 0, 1);

setInterval(() => {
    const todayDate = new Date();
    const secDiff = Math.floor((nextYearDate.getTime() - todayDate.getTime()) / 1000);

    const days = Math.floor(secDiff / (60 * 60 * 24));
    const hours = Math.floor((secDiff % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((secDiff % (60 * 60)) / 60);
    const seconds = Math.floor(secDiff % 60);

    document.getElementById('dayElement').innerText = days;
    document.getElementById('hourElement').innerText = hours;
    document.getElementById('minElement').innerText = minutes;
    document.getElementById('secElement').innerText = seconds;
}, 1000);
