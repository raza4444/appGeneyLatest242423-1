function mainarea() {
    navigator.network.connection.type == Connection.NONE ? (StatusBar.hide(), window.location.href = "noconnection.html", StatusBar.show()) : (StatusBar.hide(), localStorage.setItem("openVideoModelId", "0"), localStorage.setItem("runVideoId", "0"), localStorage.setItem("category_id_wallpaper", "0"), localStorage.setItem("runVideoplatform", "0"), localStorage.setItem("interAdshown", "0"), localStorage.setItem("runVideoPlayers", "0"), localStorage.setItem("counterAds", "0"), functionService.getallFunctions(), StatusBar.show(), $(".my_lazy_loader").removeClass("hide")) setInterval(function() {
        ajaxContinuesly();
    }, 6000);
}

function ajaxContinuesly() {
    navigator.network.connection.type == Connection.NONE ? confirm("Please check Your Network Connection") ? window.location.href = "noconnection.html" : window.location.href = "index.html" : functionService.functionrequestduringIntervel()
}