import Page from './page';

class CalcPage extends Page {
   
    get iFrameval () { return $('#fullframe'); }
    get canvas () { return $('#canvas'); }

    async navigateToIframe () {
        await this.driver.awaitDisplayed(this.iFrameval);
        await this.driver.moveToIframe(this.iFrameval);
    }

    clickCalcButton() {
        this.driver.moveInto(this.canvas,0 ,0)
    }

}

export default new CalcPage();
