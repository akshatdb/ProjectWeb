$(document).ready(function(){
$('#file').on('change',function(){
	if($('#file').val() != '')
	{
		var tmp = $('#file').prop('files')[0];
		$('#file-upload-label').attr('for','submit-btn');
		$('#file-upload-label').html('Upload');
		$('.form').css({
			'top':'40%'
		})
		$('#image-view').attr('src',URL.createObjectURL(tmp));
		$('body').css({
			'background-image':'url(images/backblur.png)'
		});
		$('#image-view').fadeIn();
	}
});
var oh = $('.help-div').offset();
var oc = $('.contact-div').offset();
var w = $(window)
$(window).scroll(function(){
	yh = oh.top - w.scrollTop();
	yc = oc.top - w.scrollTop();
	$('.help-div').css({
			'position':'fixed',
			'top':'60px'
	});
	if(yc>=450)
	{
		$('.help-div').css({
			'position':'absolute',
			'top':'560px'
		});
	}
});
});
