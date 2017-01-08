import { Chan4lkPage } from './app.po';

describe('chan4lk App', function() {
  let page: Chan4lkPage;

  beforeEach(() => {
    page = new Chan4lkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
