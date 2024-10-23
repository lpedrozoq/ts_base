(()=>{
    //Es por ejemplo un arreglo que tenga varios tipos de datos
    let userId: string | number;
    userId = 123;
    userId = "Leo";

    function greeting(parm:string | number) {
        if (typeof parm === 'string'){
            console.log('parm(string):', parm.toUpperCase());
        }else{
            console.log('parm(number):', parm.toPrecision(2));
        }
    }

    greeting("Hola");
    greeting(1.2345);
})()