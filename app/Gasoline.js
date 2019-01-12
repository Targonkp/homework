export function Distance(gasolineConsumption,volumeОfGgasoline)
{
  let  result = (volumeОfGgasoline/gasolineConsumption)*100;
        return Math.round(result);
}

