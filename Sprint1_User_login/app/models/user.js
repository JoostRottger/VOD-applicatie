exports.definition = {
	config : {
		columns : {
			"username" : "text",
			"password" : "text",
			"email" : "text"
		},
		adapter : {
			type : "sql",
			collection_name : "user"
		}
	},
	extendModel : function(Model) {
		_.extend(Model.prototype, {
			validate : function(attrs) {
				for (var key in attrs) {
					var value = attrs[key];
					if (key === "username") {
						if (value.length <= 0) {
							return "Error: No username!";
						}
					}
					if (key === "password") {
						if (value.length <= 0) {
							return "Error: No password!";
						}
					}
					if (key === "email") {
						var emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

						if (value.length <= 0) {
							return "Error: No email!";
						} else if (emailPattern.test(value) == 0) {
							return "Error: Invalid email!";
						}
					}
				}
			},
		});
		return Model;
	},
	extendCollection : function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};
