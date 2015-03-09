var httpRequest = Titanium.Network.createHTTPClient();

exports.route = function(userObject, action, route){
	
	var json = JSON.stringify(userObject);
	httpRequest.open(action,route);
	switch (action) {
    case 'POST':
        httpRequest.send(json);
        break;
    case 'GET':
        httpRequest.send();
        break;
}
		
	httpRequest.onload = function() {
		var response = JSON.parse(this.responseText);
		
		if(response.success == 1){
			Titanium.App.Properties.setString('Udid', Titanium.Platform.id);
			openHomeWindow();
		}
		else{
			alert(response.message);
		}
	};
};