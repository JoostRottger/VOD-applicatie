var appUsers = Alloy.Collections.users;
var httpRoutes = require('users');

function addUser() {
	var newUser = Alloy.createModel('users', {
		email : $.emailInput.value,
		username : $.usernameInput.value,
		password : $.passwordInput.value
	});

	appUsers.add(newUser);
	newUser.save(null, {
    success: function (model, response) {
       	httpRoutes.route(newUser, 'POST', 'http://localhost/register_API.php');
    },
    error: function (model, response) {
        alert(response);
    }
});


}
