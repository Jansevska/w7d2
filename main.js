var hwPerson = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
console.log(`pizza contains:`);
console.log(hwPerson.pizza[0]);
console.log(hwPerson.pizza[1]);
console.log('tacos contains:');
console.log(hwPerson.tacos);
console.log('burgers contains:');
console.log(hwPerson.burgers);
console.log('ice_cream contains:');
console.log(hwPerson.ice_cream[0]);
console.log(hwPerson.ice_cream[1]);
console.log(hwPerson.ice_cream[2]);
console.log('shakes contains:');
console.log('oberwise contains:');
console.log(hwPerson.shakes[0].oberwise);
console.log('dunkin contains:');
console.log(hwPerson.shakes[0].dunkin);
console.log('culvers contains:');
console.log(hwPerson.shakes[0].culvers);
console.log('mcDonalds contains:');
console.log(hwPerson.shakes[0].mcDonalds);
console.log('cupids_candies contains:');
console.log(hwPerson.shakes[0].cupids_candies);
