var users = Alloy.Collections.users;

var newUser = Alloy.createModel('users', { 
   username : 'Joost Rottger', 
   password: 'xxx',
   email: 'joost@hpu.nl'
});

users.add(newUser); 
newUser.save();



 