import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-mirage-quickstart/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | restaurant-card', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<RestaurantCard />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <RestaurantCard>
        template block text
      </RestaurantCard>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
