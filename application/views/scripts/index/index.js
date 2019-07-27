/* AJAX de submit de form para adicionar DATA */
$('.formtopo').submit(function(){

		// Pega os campos
		var first_name = $('#dat_first_name').val();
		var last_name = $('#dat_last_name').val();
		var participation = $('#dat_participation').val();

		// valida se o campo dat_first_name foi preenchido
		if(first_name == ''){
			// dá mensagem para preencher o campo
			alert('fill in the field "dat_first_name"');
			// limpa o campo
			$('#dat_first_name').val('');
			// dá focus no campo
			$('#dat_first_name').focus();
			// sai do submit
			return false;
		}

		// valida se o campo dat_last_name foi preenchido
		if(last_name == ''){
			// dá mensagem para preencher o campo
			alert('fill in the field "dat_last_name"');
			// limpa o campo
			$('#dat_last_name').val('');
			// dá focus no campo
			$('#dat_last_name').focus();
			// sai do submit
			return false;
		}

		// se o campo dat_participation não estiver preenchido
		if(participation == '%') {
			// dá mensagem para preencher o campo
			alert('fill in the field "participation"');
			// limpa o campo
			$('#dat_participation').val('');
			// dá focus no campo
			$('#dat_participation').focus();
			// sai do submit
			return false;
		}

		// exibe o loading
		$('.loading').show();
		// oculta conteudo
		$('#conteudo').hide();

		// Envia por ajax/post
		$.ajax({
			url: "index/add/",
			type: "POST",
			data: { dat_first_name: first_name , dat_last_name: last_name , dat_participation: participation},
			dataType: "html"

		}).done(function(resposta) {

			if(resposta.trim() != 'ok'){
				// Mensagem de erro caso tenha algum problema ao salvar DATA
				alert('an error has occurred please contact the developer');
			} else {

				// limpa campos do form
				$('#dat_first_name').val('');
				$('#dat_last_name').val('');
				$('#dat_participation').val('');

				// Atualiza a lista de DATA e gráfico
				$.ajax({
					url: "index/list/",
					type: "POST",
					dataType: "html"

				}).done(function(resposta) {
					$('#conteudo').html(resposta);
					// oculta o loading
					$('.loading').hide();
					// exibe conteúdo
					$('#conteudo').fadeIn();
				});

			}                        

		});
		
		return false;
})

// oculta conteudo
$('#conteudo').hide();

// Atualiza a lista de DATA e gráfico
$.ajax({
	url: "index/list/",
	type: "POST",
	dataType: "html"

}).done(function(resposta) {
	$('#conteudo').html(resposta);
	// exibe conteúdo
	$('#conteudo').fadeIn();
});