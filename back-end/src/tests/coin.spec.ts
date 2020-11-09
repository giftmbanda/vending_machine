import Coin from '../models/coinModel' // Coin class
import { expect } from 'chai';

//sample data
const coinObj = {
    fiftyCentQuantity: 0,
    oneRandQuantity: 0,
    twoRandQuantity: 0,
    fiveRandQuantity: 10
}

describe('Options tests', () => { // the tests container
    it('when nothing is passed to the instantiated class return zero', () => { 
        const coin = new Coin();
        expect(coin.getTotalAmount()).to.equal(0);
    });

    it('when coins object is passed to the class, return the sum of coins', () => { 
        const coin = new Coin(coinObj);
        expect(coin.getTotalAmount()).to.equal(50);
    });

    it('checking if it coin is an object with property of `fiftyCentQuantity`', () => { 
        expect(coinObj).to.be.an("object").to.have.property('fiftyCentQuantity');
    });
});