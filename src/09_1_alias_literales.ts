(()=>{
    //Alias type
    type UserId = string | number;
    let userId: UserId;


    //Literal types
    let shirtSize: 'S' | 'M' | 'L';
    shirtSize = 'M';
    shirtSize = 'L';
    shirtSize = 'S';

    //Literal types
    type Sizes = 'S' | 'M' | 'L';
    let shirtSize2: Sizes
    shirtSize2 = 'M';
    shirtSize2 = 'L';
    shirtSize2 = 'S';

    function greeting(parm: UserId, size: Sizes) {
        if (typeof parm === 'string'){
            console.log('parm(string):', parm.toUpperCase());
        }else{
            console.log('parm(number):', parm.toPrecision(2));
            console.log('size: ',size);
        }
      }
    greeting(111,'S');

})();