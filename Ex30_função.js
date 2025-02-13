function localizarPrimos(num) {

    for ( let n = 2; n <= num; n++ ) {
        let ehPrimo = true;
        for ( let div = 2; div < n; div++) {
            if ( n % div == 0 ) {
                ehPrimo = false;
                break;
            }
        }
        if (ehPrimo) {
            console.log(`${n} é primo`);
        }
    }
}

localizarPrimos(200);