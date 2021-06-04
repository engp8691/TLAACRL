import { CoinsDto } from '../dtos/coins.dto';

class CoinsService {
  public getCoins = async (totalNum: string): Promise<CoinsDto> => {
    const coinsDto = new CoinsDto();
    let total = +totalNum;
    coinsDto.total = total;

    const bills = Object.keys(coinsDto.coins.foos).reverse();
    for (const value of bills) {
      coinsDto.coins.foos[value] = Math.floor(total / +value);
      total -= +value * coinsDto.coins.foos[value];
    }

    const bars = Object.keys(coinsDto.coins.bars).reverse();
    total = Math.round(total * 100);
    if (total > 1) {
      for (const value of bars) {
        coinsDto.coins.bars[value] = Math.floor(total / +value);
        total = Math.round(total - +value * coinsDto.coins.bars[value]);
        if (total < 0.0001) {
          break;
        }
      }
    }

    return coinsDto;
  };
}

export default CoinsService;
