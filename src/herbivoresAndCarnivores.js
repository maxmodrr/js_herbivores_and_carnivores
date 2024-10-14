'use strict';

class Animal {
  // write your code here
  static alive = [];

  constructor(health = 100, name) {
    this.health = health;
    this.name = name;
  }
}

class Herbivore extends Animal {
  // write your code here0
  constructor(name, health = 100, hidden = false) {
    super(name, health, hidden);
    this.hidden = hidden;
    this.health = health;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}
class Carnivore extends Animal {
  // write your code here
  constructor(name, health = 100) {
    super(name, health);
    this.health = health;
    Animal.alive.push(this);
  }

  bite(enemy) {
    if (enemy instanceof Herbivore && enemy.hidden === false) {
      enemy.health -= 50;

      if (enemy.health <= 0) {
        Animal.alive.splice(Animal.alive.indexOf(enemy), 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
