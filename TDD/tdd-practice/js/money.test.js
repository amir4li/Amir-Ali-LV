const Money = require("./money");
const Portfolio = require("./portfolio");
const Bank = require("./bank");


const bank = new Bank();
bank.addExchangeRate("EUR", "USD", 1.2);
this.bank.addExchangeRate("USD", "KRW", 1100);


test("additon of 5 and 10 usd", ()=> {
    let fiveDollars = new Money(5, "USD");
    let tenDollars = new Money(10, "USD");
    let fifteenDollars = new Money(15, "USD");
    let portfolio = new Portfolio();
    portfolio.add(fiveDollars, tenDollars);
    expect(portfolio.evaluate(bank, "USD")).toEqual(fifteenDollars);
});

test("multipication of 10 euros", ()=> {
    let tenEuros = new Money(10, "EUR");
    let twentyEuros = new Money(20, "EUR");
    expect(tenEuros.times(2)).toEqual(twentyEuros);
});

test("division of 4002 krw", ()=> {
    let originalMoney = new Money(4002, "KRW");
    let actualMoneyAfterDivision = originalMoney.divide(4);
    let expectedMoneyAfterDivision = new Money(1000.5, "KRW");
    expect(actualMoneyAfterDivision).toEqual(expectedMoneyAfterDivision);
});

