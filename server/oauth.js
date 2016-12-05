import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
	Accounts.loginServiceConfiguration.remove({
	    service: 'facebook'
	});
	Accounts.loginServiceConfiguration.insert({
		service: "facebook",
		appId: "1101972103243092",
		secret: "880df86523f6d1742266c6d002e7207a",
	});
});

