// Write your code here

class Breakfast {
  
   constructor(food, drink) {
    this.food = food;
    this.drink = drink;
  }
}

let a = new Breakfast("eggs", "juice")


class Lunch {
  
     constructor(salad, soup) {
    this.salad = salad;
    this.soup = soup;
    this.drink = drink;
  }
}

// let a =new breakfast()


    newlunch = new Lunch('side salad', 'broccoli cheddar soup', 'iced tea')
    expect(newlunch.salad).to.equal('side salad')
    expect(newlunch.soup).to.equal('broccoli cheddar soup')
    expect(newlunch.drink).to.equal('iced tea')
  })


// class breakfast {}

// let a =new breakfast()