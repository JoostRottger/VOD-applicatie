if (Titanium.App.Properties.getString('Udid') != null){
	var homeWindow = Alloy.createController('home').getView();
	homeWindow.open();
	
}else{
	 $.index.open();
}