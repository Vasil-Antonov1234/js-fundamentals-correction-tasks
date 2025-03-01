function buildWall(arr) {
    let sectionHeights = arr.map(Number);

    let concreteArr = [];
    let pesos = 0;
    let isFinished = false;
    let concrete = 0;
    
    while (!isFinished) {
        let curConcrete = 0;

        for (let index in sectionHeights) {
            let sectionHeight = sectionHeights[index];

            if (sectionHeight < 30) {
                sectionHeights[index]++;
                curConcrete += 195;
            }
        }
        
        concrete += curConcrete;
        concreteArr.push(curConcrete);
        
        if (sectionHeights.every((s) => s >= 30)) {
            isFinished = true;
        }
    }

    pesos = concrete * 1900;

    console.log(concreteArr.join(', '));
    console.log(`${pesos} pesos`);
}





buildWall([17, 22, 17, 19, 17]);