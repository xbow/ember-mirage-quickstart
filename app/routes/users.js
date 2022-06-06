import Route from '@ember/routing/route';

export default class UsersRoute extends Route {
  model() {
    console.info('running the model hook on /users')
    return {
      users: [
        { fullName: 'John Doe' },
        { fullName: 'Jane Doe '}
      ]
    }
  }
}
