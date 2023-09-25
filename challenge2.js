function speedDetector(){
    const speedLimit=70;
    let demeritPointsTester=5;
    speed=Number(prompt("Take in speed of the car"));
    if(speed<speedLimit){
        console.log("Ok")
    }
    else{
        demeritPoints=Math.floor((speed-speedLimit)/5)
        if(demeritPoints>12){
            console.log("License suspended")
                
        }
        else{
            console.log(`${demeritPoints} demeritpoints`)
        }
    }

}
speedDetector()