'use strict';

export const types = [
    'Bowman',
    'Swordsman',
    'Magician',
    'Daemon',
    'Undead',
    'Zombie'
];

export class Character {
    constructor(name, type) {
        if (name.length >= 2 && name.length <= 10) {
            this.name = name;
        } else {
            throw new Error('Имя персонажа должно быть длинне 2 символов и не превышать 10');
        };

        if (types.includes(type)) {
            this.type = type;
        } else {
            throw new Error('Выбран несуществующий класс персонажа');
        }

        this.health = 100;
        this.level = 1;
        this.attack = null;
        this.defence = null;
    }

    levelUp() {
        if (this.health > 0) {
            this.level = this.level + 1;
            this.attack = Number( (this.attack * 1.2).toFixed(2) );
            this.defence = Number( (this.defence * 1.2).toFixed(2) );
            this.health = 100;
        } else {
            throw new Error('Нельзя повысить левел умершего');
        }

    }

    damage(points) {
        this.health -= points * (1 - this.defence / 100);
        if (this.health <= 0) {
            throw new Error('Ваш персонаж пал в бою');
        }
    }
}

export class Bowman extends Character {
    constructor(name, type) {
        super(name, type);
        this.attack = 25;
        this.defence = 25;
    }
}

export class Swordsman extends Character {
    constructor(name, type) {
        super(name, type);
        this.attack = 40;
        this.defence = 10;
    }
}

export class Magician extends Character {
    constructor(name, type) {
        super(name, type);
        this.attack = 10;
        this.defence = 40;
    }
}

export class Undead extends Character {
    constructor(name, type) {
        super(name, type);
        this.attack = 25;
        this.defence = 25;
    }
}

export class Zombie extends Character {
    constructor(name, type) {
        super(name, type);
        this.attack = 25;
        this.defence = 25;
    }
}

export class Daemon extends Character {
    constructor(name, type) {
        super(name, type);
        this.attack = 10;
        this.defence = 40;
    }
}
