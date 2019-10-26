function visited(){
	var ids = localStorage.getItem('visited_id');
	if (ids !== null) {
		ids = localStorage.getItem('visited_id').split(',');
		for (var i in ids) {
			$("[data-positionid |='"+ids[i]+"']").css('background-color', '#ceced2');
			$("[data-positionid |='"+ids[i]+"']").children().css('background-color', '#ceced2');
		}	
	}
}

function addId(){
$('.position_link').click(function(){
	var id = $(this).attr('data-lg-tj-cid');
	var ids = localStorage.getItem('visited_id');
	ids = ids + ',' + id;
	localStorage.setItem('visited_id', ids);
	$(this).parent().parent().parent().parent().css('background-color', '#ceced2');
	$(this).parent().parent().parent().parent().children().css('background-color', '#ceced2');
});	
}

visited();
addId();

$('.pager_not_current').click(function(){
	console.log('a click');
	setTimeout(mark, 3000);
});

function mark(){

$(function(){
visited();
addId();	
$('.pager_prev, .pager_next, .pager_not_current').click(function(){
	setTimeout(mark, 3000);	
});
});

}
