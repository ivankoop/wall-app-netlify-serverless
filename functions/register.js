const ow = require("ow");

exports.handler = function(event, context, callback) {

	const checkString = ow.create(ow.string);
	const checkPassword = ow.create(ow.string.minLength(6));

	const {name, lastName, email, password} = JSON.parse(event.body);
    
	if(!name || !lastName || !email || !password) {
        
		callback(null, {
			statusCode: 400,
			body: JSON.stringify({message: "All fields are required."})
		});
	}

	try {

		checkString(name);
		checkString(lastName);
		checkString(email);
		checkPassword(password);

	} catch (e) {
		callback(null, {
			statusCode: 400,
			body: JSON.stringify({message: "Client error, check fields and types"})
		});
	}
    
	callback(null, {
		statusCode: 200,
		body: JSON.stringify({message: "Register Success"})
	});
	
};