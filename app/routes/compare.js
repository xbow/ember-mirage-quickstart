import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class CompareRoute extends Route {
  @service store;

  queryParams = {
    amount: {
      refreshModel: true,
    },
  };

  model(params) {
    console.info('running the model hook on /compare');

    return this.store.findAll('restaurant').then((restaurants) => {
      return {
        restaurants: restaurants.slice(0, params.amount),
      };
    });
  }
}
