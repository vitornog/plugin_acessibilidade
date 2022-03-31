let valor = 0.9;

const acessibilidade = (tipo) => {
	
	resetAcessibilidade();

	if(tipo=="cinza"){
		$("html").addClass('escala-cinza');
	}
	else if(tipo=='aumentar'){
		valor+=0.1;
        $("*:not(h1,svg,.plugin-acessibilidade-toolbar-toggle,.plugin-acessibilidade-toolbar-link,.plugin-acessibilidade-toolbar-toggle-link),div:not(.plugin-acessibilidade-toolbar-toggle,.plugin-acessibilidade-toolbar-link,.plugin-acessibilidade-toolbar-toggle-link),a:not(.plugin-acessibilidade-toolbar-toggle,.plugin-acessibilidade-toolbar-link,.plugin-acessibilidade-toolbar-toggle-link)").css('font-size',valor+'rem');
	}
	else if(tipo=='diminuir'){
		if(valor>0.9){
			valor-=0.1;
            $("*:not(h1,svg,.plugin-acessibilidade-toolbar-toggle,.plugin-acessibilidade-toolbar-link,.plugin-acessibilidade-toolbar-toggle-link), div:not(.plugin-acessibilidade-toolbar-toggle,.plugin-acessibilidade-toolbar-link,.plugin-acessibilidade-toolbar-toggle-link),a:not(.plugin-acessibilidade-toolbar-toggle,.plugin-acessibilidade-toolbar-link,.plugin-acessibilidade-toolbar-toggle-link)").css('font-size',valor+'rem');
		}
	}
	else if(tipo=="preto"){
		$("*:not(img)").addClass('fundo-preto');
	}
	else if(tipo=="branco"){
		$("*:not(img)").addClass('fundo-claro');
		$("img").addClass('fundo-imagens');
	}
	else if(tipo=="alto-contraste"){
		$("html").addClass('alto-contraste');
	}
}

const resetAcessibilidade = (tipo) =>{
	$("*").removeClass('fundo-claro').removeClass("fundo-preto").removeClass("cinza").removeClass("alto-contraste");
	$("body,html").removeClass('escala-cinza');
	$("img").removeClass('fundo-imagens');
	if(tipo=="all"){
        $("*:not(h1,svg,.plugin-acessibilidade-toolbar-toggle,.plugin-acessibilidade-toolbar-link,.plugin-acessibilidade-toolbar-toggle-link),div:not(.plugin-acessibilidade-toolbar-toggle)").css('font-size','1.0rem');
	}
	$(".plugin-acessibilidade-toolbar-toggle").css("font-size","1em");
}

$(function() {
	$(".plugin-acessibilidade-toolbar-toggle a").on("click",function(){
		$("#plugin-acessibilidade-toolbar").toggleClass("plugin-acessibilidade-toolbar-close").toggleClass("plugin-acessibilidade-toolbar-open");
		console.log('ok');
	});

	$(".plugin-acessibilidade-tools .plugin-acessibilidade-btn-resize-plus").on("click",function(){
		acessibilidade("aumentar");
	});
	
	$(".plugin-acessibilidade-tools .plugin-acessibilidade-btn-resize-minus").on("click",function(){
		acessibilidade("diminuir");
	});
	
	$(".plugin-acessibilidade-tools .plugin-acessibilidade-btn-grayscale").on("click",function(){
		acessibilidade("cinza")
	});

	$(".plugin-acessibilidade-tools .plugin-acessibilidade-btn-high-contrast").on("click",function(){
		acessibilidade("alto-contraste");
	});

	$(".plugin-acessibilidade-tools .plugin-acessibilidade-btn-dark-background").on("click",function(){
		acessibilidade("preto");
	});

	$(".plugin-acessibilidade-tools .plugin-acessibilidade-btn-light-background").on("click",function(){
		acessibilidade("branco");
	});

	$(".plugin-acessibilidade-tools .plugin-acessibilidade-btn-reset").on("click",function(){
		resetAcessibilidade("all");
	});
});
