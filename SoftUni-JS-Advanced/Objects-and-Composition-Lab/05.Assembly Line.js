function createAssemblyLine() {
    const obj = {
        hasClima(object) {
            object['temp'] = 21;
            object['tempSettings'] = 21;
            object['adjustTemp'] = function adjustTemp() {
                if (object['temp'] < object['tempSettings']) {
                    object['temp'] += 1;
                } else if (object['temp'] > object['tempSettings']) {
                    object['temp'] -= 1;
                }
            }
        },
        hasAudio(object){
         object['currentTrack']={},
         object['nowPlaying'] = function nowPlaying(){
             if (object['currentTrack'].name!=null&&object['currentTrack'].artist!=null) {
                 console.log(`Now playing '${this.currentTrack.name}' by ${this.currentTrack.artist}` );
             }
         } 
        },
        hasParktronic(object){
            object['checkDistance']=function checkDistance(param){
                let result='';
                if (param<0.1) {
                    result="Beep! Beep! Beep!";
                }else if(param<0.25){
                    result="Beep! Beep!";
                }else if(param<0.5){
                    result="Beep!";
                }
                console.log(result);
            }
        }

    }
    return obj;
}
const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};
assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);
assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();
assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);
console.log(myCar);