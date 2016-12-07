function home() {
    window.history.pushState('Open Rooms', 'Title', '/home');
    $(document).ready(function() {
        $.ajax({
            url : "/files/pages/home.or",
            dataType: "text",
            success : function (data) {
                $("#body").html(data);
            }
        });
}); 
};

function about() {
    window.history.pushState('Open Rooms - about', 'Title', '/about');
        $(document).ready(function() {
        $.ajax({
            url : "/files/pages/about.or",
            dataType: "text",
            success : function (data) {
                $("#body").html(data);
            }
        });
}); 
};

function archive() {
    window.history.pushState('Open Rooms - archive', 'Title', '/archive');
        $(document).ready(function() {
        $.ajax({
            url : "/files/pages/archive.or",
            dataType: "text",
            success : function (data) {
                $("#body").html(data);
            }
        });
}); 
};

function staff() {
    window.history.pushState('Open Rooms - staff', 'Title', '/staff');
            $(document).ready(function() {
        $.ajax({
            url : "/files/pages/staff.or",
            dataType: "text",
            success : function (data) {
                $("#body").html(data);
            }
        });
}); 
};

function rules() {
    window.history.pushState('Open Rooms - rules', 'Title', '/rules');
            $(document).ready(function() {
        $.ajax({
            url : "/files/pages/rules.or",
            dataType: "text",
            success : function (data) {
                $("#body").html(data);
            }
        });
}); 
};







function join(){
    window.open('/join','_blank');
};


$(document).ready(function() {
        $.ajax({
            url : "/files/nav/nav.or",
            dataType: "text",
            success : function (data) {
                $("#n-links").html(data);
            }
        });
}); 




/* background */
var elem   = $('#mg'),
    bgImg  = elem.css('background-image'),
    imgUrl = bgImg.indexOf('"')!=-1 ? 
             bgImg.replace('url("','').replace('")','') : 
             bgImg.replace('url(','').replace(')',''),
    nwImg = new Image();

nwImg.src = imgUrl;

nwImg.onload = function() {
    elem.fadeIn('fast');
}

nwImg.onerror = function() {
    alert('error');
}





/* check url */
window.setInterval(function(){
    
    //start home
if (window.location.href.indexOf("/home") >= 0) {
        $(document).ready(function() {
        $.ajax({
            url : "/files/pages/home.or",
            dataType: "text",
            success : function (data) {
                $("#body").html(data);
            }
        });
});
    console.log("Loading: home");
};
//end home
    //start about
if (window.location.href.indexOf("/about") >= 0) {
        $(document).ready(function() {
        $.ajax({
            url : "/files/pages/about.or",
            dataType: "text",
            success : function (data) {
                $("#body").html(data);
            }
        });
});
    console.log("Loading: about");
};
//end about
    
        //start archive
if (window.location.href.indexOf("/archive") >= 0) {
        $(document).ready(function() {
        $.ajax({
            url : "/files/pages/archive.or",
            dataType: "text",
            success : function (data) {
                $("#body").html(data);
            }
        });
});
    console.log("Loading: archive");
};
//end archive
    
            //start staff
if (window.location.href.indexOf("/staff") >= 0) {
        $(document).ready(function() {
        $.ajax({
            url : "/files/pages/staff.or",
            dataType: "text",
            success : function (data) {
                $("#body").html(data);
            }
        });
});
    console.log("Loading: staff");
};
//end staff
    
                //start rules
if (window.location.href.indexOf("/rules") >= 0) {
        $(document).ready(function() {
        $.ajax({
            url : "/files/pages/rules.or",
            dataType: "text",
            success : function (data) {
                $("#body").html(data);
            }
        });
});
    console.log("Loading: rules");
};
//end rules


}, 500);