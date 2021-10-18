export enum CoinValue {
    fiftyCentValue = 0.5,
    oneRandValue = 1,
    twoRandValue = 2,
    fiveRandValue = 5,
}

export interface ICoin {
    fiftyCentQuantity: number,
    oneRandQuantity: number,
    twoRandQuantity: number,
    fiveRandQuantity: number,
}

class Coin {

    private fiftyCentQuantity: number;
    private oneRandQuantity: number;
    private twoRandQuantity: number;
    private fiveRandQuantity: number;
    private totalAmout: number;

    constructor(coinObj?: ICoin) {
        this.fiftyCentQuantity = coinObj && Number(coinObj.fiftyCentQuantity) || 0;
        this.oneRandQuantity = coinObj && Number(coinObj.oneRandQuantity) || 0;
        this.twoRandQuantity = coinObj && Number(coinObj.twoRandQuantity) || 0;
        this.fiveRandQuantity = coinObj && Number(coinObj.fiveRandQuantity) || 0;
        this.totalAmout = 0;
    }

    public getTotalAmount(): number {
        this.totalAmout = this.fiftyCentQuantity * Number(CoinValue.fiftyCentValue);
        this.totalAmout += this.oneRandQuantity * Number(CoinValue.oneRandValue);
        this.totalAmout += this.twoRandQuantity * Number(CoinValue.twoRandValue);
        this.totalAmout += this.fiveRandQuantity * Number(CoinValue.fiveRandValue);
        return this.totalAmout;
    }
}

export default Coin;
