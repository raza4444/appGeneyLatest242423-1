function getAllPost(e,t){var i=request.ajaxSettings(utility.get_all_post,t,utility.base_url_api2),l="";$.ajax(i).done(function(t){$.each(t,function(t,i){var s=i.Url.split("~"),a=utility.base_url+s[1],c=JSON.parse(localStorage.getItem("item"))[5],o=i.SubcategoryId,n=i.Title;1==i.Active&&("Video"==i.Type&&(l+='<a class="single_post_view" data-toggle="modal" id="'+i.Id+'" onclick="openVideoModel(this)" >',l+='<div  style="margin-bottom:3px;" class="col eachsize '+e+'" >',l+='<div class="entry ">',l+="s4"==e?'<img class="lazyloadingImagePost" style="min-height:100px" src="'+a+'" alt="" >':'<img class="lazyloadingImagePost" style="min-height:150px" src="'+a+'" alt="" >',"withoutTitle"==c?l+="":"withoutTitle"==c||null!==i.Title&&""!=i.Title?n.length<17?(l+='<div class="desc">',l+='<p style="text-align:center;">'+i.Title+"</p>",l+="</div>"):(l+='<div class="desc">',l+='<p style="text-align:center;">'+n.slice(0,15)+"..</p>",l+="</div>"):(l+='<div class="desc">',l+='<p style="text-align:center;">No Title</p>',l+="</div>"),l+="</div>",l+="</div>",l+="</a>"),"Wallpaper"==i.Type&&(l+='<a  class="single_post_view" data-toggle="modal" row_id ="'+e+'" category_id ="'+o+'" onclick="openWallpaper(this)" >',l+='<div  style="margin-bottom: 5px;" class="col eachsize '+e+'" >',l+='<div class="entry ">',l+="s4"==e?'<img class="lazyloadingImagePost" style="min-height:100px" src="'+a+'" alt="" >':'<img class="lazyloadingImagePost" style="min-height:150px" src="'+a+'" alt="" >',"withoutTitle"==c?l+="":"withoutTitle"==c||null!==i.Title&&""!=i.Title?(l+='<div class="desc">',l+='<p style="text-align:center;">'+i.Title+"</p>",l+="</div>"):(l+='<div class="desc">',l+='<p style="text-align:center;">No Title</p>',l+="</div>"),l+="</div>",l+="</div>",l+="</a>"),"WebUrl"==i.Type&&""!=i.WebUrl&&(l+='<a class="single_post_view" webLink="'+i.WebUrl+'"  onclick="openLink(this)" >',l+='<div  style="margin-bottom: 3px;" class="col eachsize '+e+'" >',l+='<div class="entry">',l+="s4"==e?'<img class="lazyloadingImagePost" style="min-height:100px" src="'+a+'" alt="" >':'<img class="lazyloadingImagePost" style="min-height:150px" src="'+a+'" alt="" >',"withoutTitle"==c?l+="":"withoutTitle"==c||null!==i.Title&&""!=i.Title?(l+='<div class="desc">',l+='<p style="text-align:center;">'+i.Title+"</p>",l+="</div>"):(l+='<div class="desc">',l+='<p style="text-align:center;">No Title</p>',l+="</div>"),l+="</div>",l+="</div>",l+="</a>"),"Redirect"==i.Type&&""!=i.RedirectApp&&(l+='<a class="single_post_view" webLink="https://play.google.com/store/apps/details?id='+i.RedirectApp+'"  onclick="openLink(this)">',l+='<div  style="margin-bottom: 3px;" class="col eachsize '+e+'" >',l+='<div class="entry">',l+="s4"==e?'<img class="lazyloadingImagePost" style="min-height:100px" src="'+a+'" alt="" >':'<img class="lazyloadingImagePost" style="min-height:150px" src="'+a+'" alt="" >',"withoutTitle"==c?l+="":"withoutTitle"==c||null!==i.Title&&""!=i.Title?(l+='<div class="desc">',l+='<p style="text-align:center;">'+i.Title+"</p>",l+="</div>"):(l+='<div class="desc">',l+='<p style="text-align:center;">No Title</p>',l+="</div>"),l+="</div>",l+="</div>",l+="</a>"))}),$("#main_content").html(l),setTimeout(function(){$(".my_lazy_loader").hide(),$(".complete").removeClass("hide")},6e3)})}