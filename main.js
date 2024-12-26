function squareDigits(num) { 
  return Number( 
    num.toString() 
        .split('') 
        .map(char => (parseInt(char) ** 2).toString()) 
        .join('') ); 

}