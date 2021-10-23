enum CoinValue {
    fiftyCentValue = 0.5,
    oneRandValue = 1,
    twoRandValue = 2,
    fiveRandValue = 5,
}

interface ICoin {
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
    private totalAmount: number;

    constructor(coinObj?: ICoin) {
        this.fiftyCentQuantity = coinObj && Number(coinObj.fiftyCentQuantity) || 0;
        this.oneRandQuantity = coinObj && Number(coinObj.oneRandQuantity) || 0;
        this.twoRandQuantity = coinObj && Number(coinObj.twoRandQuantity) || 0;
        this.fiveRandQuantity = coinObj && Number(coinObj.fiveRandQuantity) || 0;
        this.totalAmount = 0;
        this.calcTotalAmount();
    }

    private calcTotalAmount(): void {
        this.totalAmount = this.fiftyCentQuantity * Number(CoinValue.fiftyCentValue);
        this.totalAmount += this.oneRandQuantity * Number(CoinValue.oneRandValue);
        this.totalAmount += this.twoRandQuantity * Number(CoinValue.twoRandValue);
        this.totalAmount += this.fiveRandQuantity * Number(CoinValue.fiveRandValue);
    }

    public getTotalAmount(): number {
        return this.totalAmount;
    }
}

export default Coin;
