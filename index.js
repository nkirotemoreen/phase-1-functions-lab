// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber){
    let distance
    if(blockNumber > 42){
        distance = blockNumber - 42;
    }else {
        distance = 42 - blockNumber
    }
return distance;
}

 //distance from Hq in feet
 
 function distanceFromHqInFeet (blockNumber) {
    return distanceFromHqInBlocks(blockNumber) * 264;
  }
   //distance travelled in blocks
   function distanceTravelledInFeet (start, destination) {
    if (start < destination) {
      return (destination - start) * 264;
    } else {
      return (start - destination) * 264;
    }
  }
  //prices
  function calculatesFarePrice (start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return .02 * (distance - 400);
    } else if (distance > 2000 && distance < 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }

   