$('.remove').click(function(){
	if( confirm('Are you sure you want to remove?') ) {
		
		// pega a id do item a ser removido
		var dat_id = $(this).attr('data-id');
		// oculta conteudo
		$('#conteudo').hide();
		
		// chama o ajax para remover o item
		$.ajax({
			url: "index/remove?dat_id="+dat_id,
			type: "POST",
			dataType: "html"

		}).done(function(resposta) {
			if(resposta.trim() != 'ok'){
				// Mensagem de erro caso tenha algum problema ao remover DATA
				alert('an error has occurred please contact the developer');
			} else {
				// Atualiza a lista de DATA e gráfico
				$.ajax({
					url: "index/list/",
					type: "POST",
					dataType: "html"

				}).done(function(resposta) {
					// coloca tabela e graficos na tela
					$('#conteudo').html(resposta);
					// exibe conteúdo
					$('#conteudo').fadeIn();
				});

			}
		});
	}
})