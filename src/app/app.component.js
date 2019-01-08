import appComponentTemplate from './app.component.template';

class AppComponent {
  render() {
    const appComponent = document.querySelector('#app-component');
    if (!appComponent) {
      console && console.error('AppComponentError: Cannot locate #app-component element');
      return;
    }
    appComponent.innerHTML = appComponentTemplate.getTemplate();
  }
}


export default new AppComponent();
