exports.largestPrimeFactor = function( n ) {

  var isPrime = function( number ) {

    if( number < 2 ) {

      return undefined;
    };

    if(number === 2 || number === 3) {

      return true;
    }

    if(number%2===0) {

      return false;
    };

    if(number%3===0) {

      return false;
    };

    var sqrt = Math.sqrt(number);

    for( var i = 5; i <= sqrt; i+=2) {

      if(number%i===0) {

        return false;
      };
    };

    return true;

  };

  var getPrimeNumberCandidates = function( number ) {

    //console.log("getPrimeNumberCandidates is processing : " + number);

    if( number < 2 ) {

      return undefined;
    };

    var primeFactorCandidates = [];

    for(var i = 2; i<number; i++) {

      if(isPrime(i)) {

        primeFactorCandidates.push(i);
      };
    };

    return primeFactorCandidates;
  };

  var primeCandidates = getPrimeNumberCandidates(n);

  //console.log(primeCandidates);

  var lastPrime = -1;

  for(var i = 0;i<primeCandidates.length;i++) {

    if(n%primeCandidates[i] === 0) {

      lastPrime = primeCandidates[i];
    };
  };

  return lastPrime;

};