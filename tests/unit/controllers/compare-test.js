import { module, test } from 'qunit';
import { setupTest } from 'ember-mirage-quickstart/tests/helpers';

module('Unit | Controller | compare', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:compare');
    assert.ok(controller);
  });
});
