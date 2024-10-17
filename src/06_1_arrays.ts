(()=>{
    const prices = [1,2,3,4,5,212];
    console.log('before prices: ', prices);
    prices.push(7);
    prices.push(8);
    console.log('after prices: ', prices);
    const prices2 = [1,2,3,4,5,212,'hola',false];

    let arrayMixes: (number | string | boolean)[] = ["hola",true,123];
    console.log('before arrayMixes: ', arrayMixes);
    arrayMixes.push(false);
    console.log('after arrayMixes: ', arrayMixes);

})()