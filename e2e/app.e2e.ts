/// <reference path="../typings/main.d.ts" />

import { SpartanPage } from './app.po';

describe('spartan App', function() {
  let page: SpartanPage;

  beforeEach(() => {
    page = new SpartanPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo()
    expect(page.getParagraphText()).toEqual('spartan Works!');
  });
});
