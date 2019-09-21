exports.handler = function(event, context, callback) {

	const {email, password} = JSON.parse(event.body);

	const response = JSON.stringify({email: email, password: password});

	callback(null, {
		statusCode: 200,
		body: response
	});
};