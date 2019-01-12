import {Distance} from "../app/Gasoline"

test ('Should Distance', () => {

   const gasolineConsumption = 10;
     const volumeОfGgasoline = 20;
     const result = Distance (gasolineConsumption, volumeОfGgasoline);
        expect(result).toBe(200);
    }

)