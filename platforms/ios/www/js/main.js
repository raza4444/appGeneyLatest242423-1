function mainarea()
{
	if(navigator.network.connection.type == Connection.NONE) {
		StatusBar.hide();
		$(".loader").removeClass('hide');
		$(".loader").delay(5000).hide('slide',500,function()
		{
			window.location.href = "noconnection.html";	
			StatusBar.show();
		});
		
	}
	else
	{	StatusBar.hide();
		localStorage.setItem("openVideoModelId",'0');
		localStorage.setItem("runVideoId",'0');
		localStorage.setItem('category_id_wallpaper' , '0');
		localStorage.setItem("runVideoplatform",'0');
		localStorage.setItem("interAdshown",'0');
		localStorage.setItem("runVideoPlayers",'0');
		localStorage.setItem("counterAds",'0');
		//$('#searchModal').show();
		cordova.getAppVersion.getPackageName(function(pkgname){
		appSetting(pkgname);
		});
		$(".loader").delay(3000).hide('slide',500,function()
		{
       cordova.getAppVersion.getPackageName(function(pkgname){
		var response=JSON.parse((localStorage.getItem("item")));
		sliderSettingWithData(pkgname);

		getAllPost(response[0], pkgname);
		featuredAppModel(pkgname);
		});
		});
		setTimeout(
			function() {
				StatusBar.show();
				$('.my_lazy_loader').removeClass( "hide" );
			}, 3500);
	     setInterval(function(){ ajaxContinuesly();  }, 6000);
}
}

function ajaxContinuesly()
{

	if(navigator.network.connection.type == Connection.NONE) {
		if (confirm("Please check Your Network Connection"))
		{
			
			window.location.href = "noconnection.html";
			
		}
		else
		{
			window.location.href = "index.html";
			
		}
	}
	else 
	{
		cordova.getAppVersion.getPackageName(function(pkgname){
			var response=JSON.parse((localStorage.getItem("item")));
			appSettingInterval(pkgname);
		//sliderSettingWithData(pkgname);
		getAllPost(response[0],pkgname);
		featuredAppModel(pkgname);
	});
	}
}
