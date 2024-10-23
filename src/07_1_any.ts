(()=>{
    let myDynamicVar: any;
    myDynamicVar = 1;
    myDynamicVar = false;
    myDynamicVar = "hola";

    /*
    Para tratar/forzar a una variabla de un tipo,
    hay que aplicart cast
    */
   const rta = (myDynamicVar as string).toLocaleLowerCase();
   console.log('rta: ', rta);

   myDynamicVar = 12;
   const rta2 = (<number>myDynamicVar).toFixed();
   console.log('rta2: ', rta2);

})()