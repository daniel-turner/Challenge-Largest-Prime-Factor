exports.largestPrimeFactor = function( n ) {

  var getLargestPrimeRefactor = function( number) {

    var denominator = 2;
    var quotient = number;

    if(number === 1 ) {

      return number;
    }

    while(quotient !== denominator) {

      if(quotient%denominator > 0) {

        denominator++;

      } else {

        quotient = quotient/denominator;
      }

    }

    console.log(number + " returns " + denominator);

    return denominator;
  };

  return getLargestPrimeRefactor(n);

};