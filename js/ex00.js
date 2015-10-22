function car(number){
  if(number % 2 == 0){
    return true;
  }else{
  return false;
}
  }

function planet(number){
  if(number % 5 == 0){
    return true;
}else{
    return false;
  }
}

function purin(number){
  var resultA, resultB, result;
  resultA = car(number);
  resultB = planet(number);
  result = resultA && resultB;
  return result;
}
