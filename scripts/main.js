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
});
