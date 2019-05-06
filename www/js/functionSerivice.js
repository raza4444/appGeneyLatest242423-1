var functionService = (function(){
	return {
		getallFunctions: function (package_name = '') {
			if(package_name == '' || package_name == null)
			{
				   cordova.getAppVersion.getPackageName(function(pkgname) {
					appSettings.getApplicationSetting(pkgname);
					var response=JSON.parse((localStorage.getItem("item")));
					var replacePkg = JSON.parse((localStorage.getItem("replacePackage")));
					
					if(response == null || response == '' || response.length == 0)
					{
						appSettings.getApplicationSetting(pkgname);
						response=JSON.parse((localStorage.getItem("item")));
						replacePkg = JSON.parse((localStorage.getItem("replacePackage")));

					}

					var getReplacePackage = replacePkg.replace_package;
					if(getReplacePackage == '' ||  getReplacePackage == null)
					{
						sliderSettings.getApplicationCarousel(pkgname);
						getAllPost(response[0], pkgname);
						featuredAppModel(pkgname);
					}
					else
					{
						
						sliderSettings.getApplicationCarousel(getReplacePackage);
						getAllPost(response[0], getReplacePackage);
						featuredAppModel(getReplacePackage);

					}
				});
			}
			else
			{
				appSettings.getApplicationSetting(package_name);
				var response=JSON.parse((localStorage.getItem("item")));
				var replacePkg = JSON.parse((localStorage.getItem("replacePackage")));
				if(response == null || response == '' || response.length == 0)
				{
					appSettings.getApplicationSetting(package_name);
					response=JSON.parse((localStorage.getItem("item")));
					replacePkg = JSON.parse((localStorage.getItem("replacePackage")));
				}
				var getReplacePackage = replacePkg.replace_package;
				if(getReplacePackage == '' ||  getReplacePackage == null)
				{
					sliderSettings.getApplicationCarousel(package_name);
					getAllPost(response[0], package_name);
					featuredAppModel(package_name);
				}
				else
				{
					sliderSettings.getApplicationCarousel(getReplacePackage);
					getAllPost(response[0], getReplacePackage);
					featuredAppModel(getReplacePackage);

				}

			}
			


		},
		functionrequestduringIntervel: function(package_name = ''){
			if(package_name == '' || package_name== null)
			{
				cordova.getAppVersion.getPackageName(function(pkgname){
					var response=JSON.parse((localStorage.getItem("item")));
			var replacePkg = JSON.parse((localStorage.getItem("replacePackage")));
			if(response == null || response == '' || response.length == 0)
			{
				appSettingInterval(pkgname);
				response=JSON.parse((localStorage.getItem("item")));
				replacePkg = JSON.parse((localStorage.getItem("replacePackage")));

			}
			var getReplacePackage = replacePkg.replace_package;
			if(getReplacePackage == '' ||  getReplacePackage == null)
			{
			appSettingInterval(pkgname);
			getAllPost(response[0], pkgname);
			featuredAppModel(pkgname);
			}
			else
			{
			appSettingInterval(getReplacePackage);
			getAllPost(response[0], getReplacePackage);
			featuredAppModel(getReplacePackage);

			}
				});
			}
			else
			{
				var response=JSON.parse((localStorage.getItem("item")));
			var replacePkg = JSON.parse((localStorage.getItem("replacePackage")));
			if(response == null || response == '' || response.length == 0)
			{
				appSettingInterval(package_name);
				response=JSON.parse((localStorage.getItem("item")));
				replacePkg = JSON.parse((localStorage.getItem("replacePackage")));

			}
			var getReplacePackage = replacePkg.replace_package;
			if(getReplacePackage == '' ||  getReplacePackage == null)
			{
			appSettingInterval(package_name);
			getAllPost(response[0], package_name);
			featuredAppModel(package_name);
			}
			else
			{
			appSettingInterval(getReplacePackage);
			getAllPost(response[0], getReplacePackage);
			featuredAppModel(getReplacePackage);

			}
			}
		}
	}

}());