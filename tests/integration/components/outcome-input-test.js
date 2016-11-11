import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('outcome-input', 'Integration | Component | outcome input', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{outcome-input}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#outcome-input}}
      template block text
    {{/outcome-input}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
