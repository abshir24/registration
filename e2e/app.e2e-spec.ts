import { DojoMailPage } from './app.po';

describe('dojo-mail App', () => {
  let page: DojoMailPage;

  beforeEach(() => {
    page = new DojoMailPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
