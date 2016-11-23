import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.authenticatedRoute('outcome', function() {
    this.authenticatedRoute('new');
    this.authenticatedRoute('show');
  });
  this.route('sign-in');
  this.route('sign-up');
  this.authenticatedRoute('dashboard');
});

export default Router;
