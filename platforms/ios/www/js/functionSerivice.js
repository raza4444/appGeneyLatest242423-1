var functionService={getallFunctions:function(e=""){if(""==e||null==e)cordova.getAppVersion.getPackageName(function(e){var t=JSON.parse(localStorage.getItem("item")),a=JSON.parse(localStorage.getItem("replacePackage"));if(null!=t&&""!=t&&0!=t.length||(appSettings.getApplicationSetting(e),t=JSON.parse(localStorage.getItem("item")),a=JSON.parse(localStorage.getItem("replacePackage"))),""==a||null==a)appSettings.getApplicationSetting(e),sliderSettings.getApplicationCarousel(e),getAllPost(t[0],e),featuredAppModel(e);else{var l=a.replace_package;appSettings.getApplicationSetting(l),sliderSettings.getApplicationCarousel(l),getAllPost(t[0],l),featuredAppModel(l)}});else{var t=JSON.parse(localStorage.getItem("item")),a=JSON.parse(localStorage.getItem("replacePackage"));null!=t&&""!=t&&0!=t.length||(appSettings.getApplicationSetting(e),t=JSON.parse(localStorage.getItem("item")),a=JSON.parse(localStorage.getItem("replacePackage")));var l=a.replace_package;""==l||null==l?(appSettings.getApplicationSetting(e),sliderSettings.getApplicationCarousel(e),getAllPost(t[0],e),featuredAppModel(e)):(appSettings.getApplicationSetting(l),sliderSettings.getApplicationCarousel(l),getAllPost(t[0],l),featuredAppModel(l))}},functionrequestduringIntervel:function(e=""){if(""==e||null==e)cordova.getAppVersion.getPackageName(function(e){var t=JSON.parse(localStorage.getItem("item")),a=JSON.parse(localStorage.getItem("replacePackage"));null!=t&&""!=t&&0!=t.length||(appSettingInterval(e),t=JSON.parse(localStorage.getItem("item")),a=JSON.parse(localStorage.getItem("replacePackage")));var l=a.replace_package;""==l||null==l?(appSettingInterval(e),getAllPost(t[0],e),featuredAppModel(e)):(appSettingInterval(l),getAllPost(t[0],l),featuredAppModel(l))});else{var t=JSON.parse(localStorage.getItem("item")),a=JSON.parse(localStorage.getItem("replacePackage"));null!=t&&""!=t&&0!=t.length||(appSettingInterval(e),t=JSON.parse(localStorage.getItem("item")),a=JSON.parse(localStorage.getItem("replacePackage")));var l=a.replace_package;""==l||null==l?(appSettingInterval(e),getAllPost(t[0],e),featuredAppModel(e)):(appSettingInterval(l),getAllPost(t[0],l),featuredAppModel(l))}}};