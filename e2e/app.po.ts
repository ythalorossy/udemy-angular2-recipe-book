import { browser, element, by } from 'protractor/globals';

export class UdemyAngular2RecipeBookPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('rc-root h1')).getText();
  }
}
