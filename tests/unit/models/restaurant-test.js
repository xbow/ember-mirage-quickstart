import { module, test } from 'qunit';
import { setupTest } from 'ember-mirage-quickstart/tests/helpers';

module('Unit | Model | restaurant', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('restaurant', {});
    assert.ok(model);
  });
});
