import {Coffeemaker} from "../app/Coffeemaker";

test ('Should change', () => {
    const coffee = 'cofeewithcream';
    const sum = 100;
    const result = Coffeemaker(coffee, sum);
    expect(result).toBe(60);
})