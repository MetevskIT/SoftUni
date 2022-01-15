function Radar(currSpeed,area){
    
    const motorwayLimit=130;
    const interstateLimit=90;
    const cityLimit=50;
    const residentialLimit=20;
    let overTheLimit;
    let isTrue=false;
    let speed;
    let status=(over)=>{
       if (over<=20) {
           return "speeding"
       } else if (over<=40) {
           return "excessive speeding";
       } else{
        return "reckless driving";
       }
    }
   
   switch (area) {
        case "motorway":
            (currSpeed>motorwayLimit)?overTheLimit=currSpeed-motorwayLimit:isTrue=true,speed=motorwayLimit;
        break;
        case "interstate":
            (currSpeed>interstateLimit)?overTheLimit=currSpeed-interstateLimit:isTrue=true,speed=interstateLimit;
            break;      
        case "city":
            (currSpeed>cityLimit)?overTheLimit=currSpeed-cityLimit:isTrue=true,speed=cityLimit;
            break;
        case "residential" :
            (currSpeed>residentialLimit)?overTheLimit=currSpeed-residentialLimit:isTrue=true,speed=residentialLimit;
            break;  
    }
    if (!isTrue) {
        console.log(`The speed is ${overTheLimit} km/h faster than the allowed speed of ${speed} - ${status(overTheLimit)}`);
    }
    else{
        console.log(`Driving ${currSpeed} km/h in a ${speed} zone`);
    }
}
Radar(40, 'city');