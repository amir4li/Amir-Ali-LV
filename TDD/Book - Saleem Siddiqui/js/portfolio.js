const Money = require("./money");


class Portfolio {
    
    constructor() {
        this.moneys = [];
    };

    add(...moneys) {
        this.moneys = this.moneys.concat(moneys);
    };


    convert(money, currency) {
        let exchangeRates = new Map();
        
        exchangeRates.set("EUR->USD", 1.2);
        exchangeRates.set("USD->KRW", 1100);

        if (money.currency == currency) {
            return money.amount;
        };

        let key = money.currency + "->" + currency;
        let rate = money.amount * exchangeRates.get(key);
        if (rate === undefined) {
            return undefined;
        }
        return money.amount * rate;
    };


    evaluate(bank, currency) {
        let failures = [];
        let total = this.moneys.reduce((sum, money)=> {
            try {
                let convertedMoney = bank.convert(money, currency);
                return sum + convertedMoney.amount;
            } catch (error) {
                failures.push(error.message);
                return sum;
            }
        }, 0);

        if (!failures.length) {
            return new Money(total, currency);
        }
        throw new Error("Missing exchange rate(s): [" + failures.join() + "]");
        
    };
};

module.exports = Portfolio;

