// Write your code here

class Breakfast {
    constructor(food, drink) {
        this.food = food;
        this.drink = drink;
    }
}

let eggs = new Breakfast("eggs", "coffee")

class Lunch {
    constructor(salad, soup, drink) {
        this.salad = salad;
        this.soup = soup;
        this.drink = drink;
    }
}

class Dinner {
    constructor(salad, soup, entree, dessert) {
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
        this._dessert = dessert
    }
}