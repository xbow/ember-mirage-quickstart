import { module, test } from 'qunit';
import { setupTest } from 'ember-mirage-quickstart/tests/helpers';

module('Unit | Route | compare', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:compare');
    assert.ok(route);
  });
});
