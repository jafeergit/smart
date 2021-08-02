import CalcPage from  '../pageobjects/calc.page';

describe('Calculator Application', () => {
    it('Perform a subtraction operation', async () => {
        await CalcPage.open();

        await CalcPage.navigateToIframe();
        await CalcPage.clickCalcButton();

       
    });
});


