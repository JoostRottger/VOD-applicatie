var appUsers = Alloy.Collections.users;
appUsers.fetch();

// require users module (app/lib/users.js)
var httpRoutes = require('users');

function userLogin() {
	var loginUser = Alloy.createModel('users', {
		username : $.usernameInput.value,
		password : $.passwordInput.value
	});
	
	httpRoutes.route(loginUser, 'POST', 'http://localhost/login_API.php');
}


