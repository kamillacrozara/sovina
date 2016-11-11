import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('outcome-total', 'Integration | Component | outcome total', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{outcome-total}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#outcome-total}}
      template block text
    {{/outcome-total}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
