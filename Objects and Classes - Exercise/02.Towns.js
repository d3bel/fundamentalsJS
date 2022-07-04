function towns(input) {
    let city = {};
    for(let currTown of input) {
        let breakinInfo = currTown.split(" | ");
        city.town = breakinInfo[0];
        city.latitude = Number(breakinInfo[1]).toFixed(2);
        city.longitude = Number(breakinInfo[2]).toFixed(2);
        console.log(city);
    }
}
towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
