import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class UsersRoute extends Route {
  @service store
  
  model() {
    console.info('running the model hook on /users')

    return {
      users: this.store.findAll('user')
    }
  }
}
