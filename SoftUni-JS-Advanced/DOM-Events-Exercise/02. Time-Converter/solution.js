function attachEventsListeners() {
    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    let daysBtn = document.getElementById('daysBtn');
    let hoursBtn = document.getElementById('hoursBtn');
    let minutesBtn = document.getElementById('minutesBtn');
    let secondsBtn = document.getElementById('secondsBtn');

    daysBtn.addEventListener('click', daysConverter);
    hoursBtn.addEventListener('click', hoursConverter);
    minutesBtn.addEventListener('click', minutesConverter);
    secondsBtn.addEventListener('click', secoundsConverter);

    function daysConverter() {
     const daysInput=days.value;
     hours.value=daysInput*24;
     minutes.value=hours.value*60;
     seconds.value=minutes.value*60;
     
    }
    function hoursConverter() {
        const hoursInput=hours.value;
        days.value=hoursInput/24;
        minutes.value=hoursInput*60;
        seconds.value=minutes.value*60;
    }
    function minutesConverter() {
        const minutesInput=minutes.value;
        hours.value=minutesInput/60;
        days.value=hours.value/24;
        seconds.value=minutesInput*60;
    }
    function secoundsConverter() {
        const secondsInput=seconds.value;
        minutes.value=secondsInput/60;
        hours.value=minutes.value/60;
        days.value=hours.value/24;
    }
}