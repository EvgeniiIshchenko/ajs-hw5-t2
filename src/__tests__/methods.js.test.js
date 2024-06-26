import { types, Character, Bowman, Swordsman, Magician, Undead, Zombie, Daemon } from '../methods.js';

test('Testing Bowman class', () => {
    const result = new Bowman('test', 'Bowman');
    expect(result).toEqual({
        name: 'test',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
    });
});

test('Testing Swordsman class', () => {
    const result = new Swordsman('test', 'Swordsman');
    expect(result).toEqual({
        name: 'test',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10
    });
});

test('Testing Magician class', () => {
    const result = new Magician('test', 'Magician');
    expect(result).toEqual({
        name: 'test',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40
    });
});

test('Testing Undead class', () => {
    const result = new Undead('test', 'Undead');
    expect(result).toEqual({
        name: 'test',
        type: 'Undead',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
    });
});

test('Testing Zombie class', () => {
    const result = new Zombie('test', 'Zombie');
    expect(result).toEqual({
        name: 'test',
        type: 'Zombie',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
    });
});

test('Testing Daemon class', () => {
    const result = new Daemon('test', 'Daemon');
    expect(result).toEqual({
        name: 'test',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40
    });
});

test.each([
    [ 'no123456789' ],
    [ 'n' ]
])('Testing Name', (name) => {
    const result = () => {
        new Character(name, 'Daemon');
    };
    expect(result).toThrow('Имя персонажа должно быть длинне 2 символов и не превышать 10');
});

test('Testing Type', () => {
    const result = () => {
        new Character('test', 'test');
    };
    expect(result).toThrow('Выбран несуществующий класс персонажа');
});

test('Testing lvlup', () => {
    const result = new Swordsman('test', 'Swordsman');
    result.health = 50;
    result.levelUp();
    expect(result).toEqual({
        name: 'test',
        type: 'Swordsman',
        health: 100,
        level: 2,
        attack: 48,
        defence: 12
    });
});

test('Testing lvlup with 0hp', () => {
    const result = new Swordsman('test', 'Swordsman');
    result.health = 0;
    const error = () => {
        result.levelUp();
    };
    expect(error).toThrow('Нельзя повысить левел умершего');
});

test('Testing damage', () => {
    const result = new Swordsman('test', 'Swordsman');
    result.damage(10);
    expect(result).toEqual({
        name: 'test',
        type: 'Swordsman',
        health: 91,
        level: 1,
        attack: 40,
        defence: 10
    });
});

test('Testing dead of character', () => {
    const result = new Swordsman('test', 'Swordsman');
    result.health = 3;
    const error = () => {
        result.damage(10);
    };
    expect(error).toThrow('Ваш персонаж пал в бою');
});