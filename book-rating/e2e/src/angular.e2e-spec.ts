import { $, browser} from 'protractor';
import { GenericBrowserDomAdapter } from '@angular/platform-browser/src/browser/generic_browser_adapter';

describe('Angular Buch', () => {

    beforeAll(() => {
        browser.waitForAngularEnabled(false);
    });

    it('should call angular, not angularjs', () => {
        browser.get('https://www.dpunkt.de/buecher/12400/9783864903571-angular.html');

        const heading = $('h1');
        expect(heading.getText()).toEqual('Angular');
    });

    afterAll(() => {
        browser.waitForAngularEnabled(true);
    });
});
