import DS from 'ember-data';

export default DS.Model.extend({
    value: DS.attr('number'),
    date: DS.attr('date'),
    category: DS.attr('string')
});
