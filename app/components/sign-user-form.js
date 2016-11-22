import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        userSignAction(){
            let user = {
                'email': this.get('email'),
                'password': this.get('password')
            };
            this.get("action")(user);
        }
    }
});
