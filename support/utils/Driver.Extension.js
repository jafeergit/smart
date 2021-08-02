import { DEFAULT_TIMEOUT } from "./constants";

export default class Driver {

    static awaitDisplayed(selector ,timeout =DEFAULT_TIMEOUT) {
        try{
        selector.waitForDisplayed(timeout);
        return true;
        }
        catch(e) {
            return false;
        }
    }

    static click(selector ,timeout =DEFAULT_TIMEOUT) {
        this.awaitDisplayed(selector, timeout);
        selector.click();
    }

    static moveInto(selector ,x, y, timeout =DEFAULT_TIMEOUT) {
        this.awaitDisplayed(selector, timeout);
            selector.moveTo(x,y);
    }

    static isDisplayed(selector) {
        selector.isDisplayed();
    }

    static moveToIframe(selector ,timeout =DEFAULT_TIMEOUT) {
        this.awaitDisplayed(selector, timeout);
        browser.switchToFrame(selector);
    }
}

