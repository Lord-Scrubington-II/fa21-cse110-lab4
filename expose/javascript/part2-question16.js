for(const prop in statistics) {
   if(prop.toString().toLowerCase().charAt(0) === 'r' || statistics[prop] % 2 === 1) {
      console.log(statistics[prop].toString());
   }
}