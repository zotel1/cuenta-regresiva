const nextYear = (new Date()).getFullYear + 1;

const nextYearDate = new Date(nextYear, 0, 1);

setInterval(() => {
const todayDate = new Date();

const secDiff = Math.floor((nextYearDate.getTime() - todayDate.getTime() / 1000));

const days = Math.floor((secDiff / (60 * 60)) / 24);
const hours = Math.floor((secDiff / (60 * 60)) % 24);
const minutes = Math.floor(secDiff / 60) % 24;
const seconds = Math.floor(secDiff) % 60;

dayElement.innerText = days;
hourElement.innerText = days;
minElement.innerText = days;
secElement.innerText = days;
}, 1000);