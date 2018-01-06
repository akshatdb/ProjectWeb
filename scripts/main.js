$(document).ready(function(){
$('#file').on('change',function(){
	if($('#file').val() != '')
	{
		var tmp = $('#file').prop('files')[0];
		$('#file-upload-label').attr('for','submit-btn');
		$('#file-upload-label').html('Upload');
		$('#image-view').attr('src',URL.createObjectURL(tmp));
		$('#image-view').fadeIn();
	}
});
});
