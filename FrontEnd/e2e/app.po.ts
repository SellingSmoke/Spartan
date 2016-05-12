export class SpartanPage {
  navigateTo() { return browser.get('/'); }
  getParagraphText() { return element(by.css('Spartan-app p')).getText(); }
}
