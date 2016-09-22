import { UdemyAngular2RecipeBookPage } from './app.po';

describe('udemy-angular2-recipe-book App', function() {
  let page: UdemyAngular2RecipeBookPage;

  beforeEach(() => {
    page = new UdemyAngular2RecipeBookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rc works!');
  });
});
