import appComponent from './app.component';

class AppModule {
  constructor() {
    this.render();
  }

  render() {
    appComponent.render();
  }
}


export default new AppModule();
