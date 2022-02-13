function Walk(steps,lenght,speed){
    
    let distance = steps * lenght / 1000;
    let time = (distance / speed) * 60;
    let seconds;
    let minutes;
    let hours;

    for(let i = 500; i <=steps * lenght; i+=500){
        time += 1;
    }

    
    if(time >= 60){
        hours = Math.floor(time/60);
        minutes = time - hours * 60;
    } else {
        hours = 0;
        minutes = Math.floor(time);
    }
    seconds = Math.round((time - Math.floor(time))*60);
    console.log(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds}`);
}
Walk(4000, 0.60, 5);