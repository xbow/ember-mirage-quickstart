import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class CompareRoute extends Route {
  @service store;

  model() {
    console.info('running the model hook on /compare');

    return {
      restaurants: this.store.findAll('restaurant'),
    };
  }
}
