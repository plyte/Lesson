console.log(sayAge(22));


function sayAge(age){

  if(age < 16){
      return 'You can\'t drive';
  }else if(age < 18){
      return 'You can\'t vote';
  }else if(age < 25){
      return 'You can\'t rent a car';
  }

  return 'You can do anything';
}
