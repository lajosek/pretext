$(document).ready(function(){$(".cuntryPhone select").length>0&&$.each($(".cuntryPhone select"),function(n,e){$(e).trigger("change")})}),$(document).on("change",".cuntryPhone select",function(){$(this).parents(".cuntryPhone").find(".cuntryPhoneHolder").html($(this).val())});