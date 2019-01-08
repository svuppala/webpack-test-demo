import  appComponent from './app.component';

describe('App Component', () => {
  const mockTemplate = { innerHTML: 'Thanos-clicks' };

  it('should render template', () => {
    spyOn(document, 'querySelector').and.returnValue(mockTemplate);
    appComponent.render();
    expect(mockTemplate.innerHTML).toBe('<p class="app-content">Hello World</p>');
  });

  it('should not render page if app component tag has not been set', () => {
    spyOn(console, 'error');
    spyOn(document, 'querySelector').and.returnValue(null);
    appComponent.render();
    expect(console.error).toHaveBeenCalledWith('AppComponentError: Cannot locate #app-component element');
  });
});
