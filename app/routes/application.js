import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service store;

  model() {
    console.info('running the model hook on /application');

    return {
      user: this.store.find('user', 3),
    };
  }
}
