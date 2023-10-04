function speedDetector(){
    //First declare and assign the speed limit and demeritpoints tester for giving the demeritpoints.
    const speedLimit=70;
    let demeritPointsTester=5;
    //Then rite prompt to take in speed of the vehicle and test if it greater than speed limit
    speed=Number(prompt("Take in speed of the car"));
    if(speed<speedLimit){
        console.log("Ok")//If speed<speedlimit print ok
    }
    //then we get the speed above speed limit to giv the demerit points
    else{
        demeritPoints=Math.floor((speed-speedLimit)/5)
        if(demeritPoints>12){
            console.log("License suspended")//if demeritpoints >12 the  print licence is suspended
                
        }
        else{
            console.log(`${demeritPoints} demeritpoints`)//Otherwise we print demeritpoints
        }
    }

}
speedDetector()//call the function