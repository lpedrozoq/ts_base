(()=>{
    let isEnabled = true;
    isEnabled = false;
    let isNew: boolean = false;
    console.log('before: isNew: ', isNew);
    const random = Math.random();
    console.log('random: ', random);
    isNew = random >= 0.5 ? true: false; 
    console.log('after: isNew: ', isNew);
})()