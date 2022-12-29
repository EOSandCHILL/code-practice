breakfastMeal1 = {
    meat: 'bacon',
    veggie: 'potato',
    bread: 'white',
    culture: 'american'
}
breakfastMeal2 = {
    meat: 'chorizo',
    veggie: 'salsa',
    bread: 'tortilla',
    culture: 'mexican'
}
lunchMeal1 = {
    meat: 'burger',
    veggie: 'fries',
    bread: 'burger bun',
    culture: 'american'
}
lunchMeal2 = {
    meat: 'carne asada',
    veggie: 'salsa',
    bread: 'tortilla',
    culture: 'mexican'
}
dinnerMeal1 = {
    meat: 'steak',
    veggie: 'asparagus',
    bread: false,
    culture: 'american'
}
dinnerMeal2 = {
    meat: 'carnitas',
    veggie: 'corn',
    bread: 'tortilla',
    culture: 'mexican'
}

function breakfast(meal, drink) {
    const meal1 = `I will be eating ${meal} and drinking ${drink} for breakfast. the meal conatins ${breakfastMeal1.meat}, ${breakfastMeal1.veggie}, ${breakfastMeal1.bread} bread and it is known to be of ${breakfastMeal1.culture} culture`
    return meal1
}
const myBreakfast = breakfast('bacon', 'oj')

function lunch(meal, drink) {
    const meal2 = `I will be eating ${meal} and drinking ${drink} for lunch`
    return meal2
}
const myLunch = lunch('burger', 'soda')

function dinner(meal, drink) {
    const meal3 = `I will be eating ${meal} and drinking ${drink} for dinner`
    return meal3
}
const myDinner = dinner('steak', 'wine')

function mealNow(time) {
    if (time < 1100 && time > 0600) {
        return myBreakfast
    } else if (time > 1100 && time < 1400) {
        return myLunch
    } else if (time > 1400 && time < 2100) {
        return myDinner
    }
}
const readyToEat = mealNow(1000)
console.log(readyToEat)