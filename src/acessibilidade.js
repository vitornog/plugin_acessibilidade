let valor = 0.9;

function acessibilidade(tipo){
	
	resetAcessibilidade();

	if(tipo=="cinza"){
		$("html").addClass('escala-cinza');
	}
    else if (tipo == 'aumentar') {
        valor += 0.1;
        $("*:not(.navbar-fixed-top,h1,svg,.plugin-acessibilidade-toolbar-toggle,.plugin-acessibilidade-toolbar-link,.plugin-acessibilidade-toolbar-toggle-link,#plugin-acessibilidade-toolbar,.plugin-acessibilidade-toolbar-overlay,.plugin-acessibilidade-toolbar-overlay,.plugin-acessibilidade-toolbar-inner,.plugin-acessibilidade-toolbar-inner p,.plugin-acessibilidade-toolbar-items, .plugin-acessibilidade-toolbar-item a, .plugin-acessibilidade-toolbar-item a span),div:not(.navbar,.plugin-acessibilidade-toolbar-toggle,.plugin-acessibilidade-toolbar-link,.plugin-acessibilidade-toolbar-toggle-link,#plugin-acessibilidade-toolbar),a:not(.plugin-acessibilidade-toolbar-toggle,.plugin-acessibilidade-toolbar-link,.plugin-acessibilidade-toolbar-toggle-link)").css('font-size', valor + 'rem');
        $(".navbar-fixed-top").find("*").css('font-size', '14px');
        $(".InfoPerfil").css('font-size', '11px')
        $("#plugin-acessibilidade-toolbar,.plugin-acessibilidade-toolbar-overlay,.plugin-acessibilidade-toolbar-inner p").css('font-size', '16px');
        $(".plugin-acessibilidade-toolbar-items").find("*").css('font-size', '14px');
    }
	else if(tipo=='diminuir'){
		if(valor>0.9){
			valor-=0.1;
            $("*:not(.navbar-fixed-top,h1,svg,.plugin-acessibilidade-toolbar-toggle,.plugin-acessibilidade-toolbar-link,.plugin-acessibilidade-toolbar-toggle-link,#plugin-acessibilidade-toolbar,.plugin-acessibilidade-toolbar-overlay,.plugin-acessibilidade-toolbar-overlay,.plugin-acessibilidade-toolbar-inner,.plugin-acessibilidade-toolbar-inner p, .plugin-acessibilidade-toolbar-items, .plugin-acessibilidade-toolbar-item a, .plugin-acessibilidade-toolbar-item a span),div:not(.navbar,.plugin-acessibilidade-toolbar-toggle,.plugin-acessibilidade-toolbar-link,.plugin-acessibilidade-toolbar-toggle-link,#plugin-acessibilidade-toolbar),a:not(.plugin-acessibilidade-toolbar-toggle,.plugin-acessibilidade-toolbar-link,.plugin-acessibilidade-toolbar-toggle-link)").css('font-size', valor + 'rem');
        }
        $(".navbar-fixed-top").find("*").css('font-size', '14px');
        $(".InfoPerfil").css('font-size', '11px')
        $("#plugin-acessibilidade-toolbar,.plugin-acessibilidade-toolbar-overlay,.plugin-acessibilidade-toolbar-inner p").css('font-size', '16px');
        $(".plugin-acessibilidade-toolbar-items").find("*").css('font-size', '14px');
	}
	else if(tipo=="preto"){
        $("*:not(img,.IcoInbNet)").addClass('fundo-preto');
	}
	else if(tipo=="branco"){
        $("*:not(img,.IcoInbNet)").addClass('fundo-claro');
        $("img:not(.IcoInbNet)").addClass('fundo-imagens');
	}
	else if(tipo=="alto-contraste"){
		$("html").addClass('alto-contraste');
	}
	else if (tipo=="links") {
        $("a").addClass('links-sublinhados');
    }
}

function resetAcessibilidade(tipo){
	
	$("*").removeClass('fundo-claro').removeClass("fundo-preto").removeClass("cinza").removeClass("alto-contraste");
	$("body,html").removeClass('escala-cinza');
	$("img").removeClass('fundo-imagens');
	$("a").removeClass('links-sublinhados');
	
	if(tipo=="all"){
        $("*:not(.navbar-fixed-top,h1,svg,.plugin-acessibilidade-toolbar-toggle,.plugin-acessibilidade-toolbar-link,.plugin-acessibilidade-toolbar-toggle-link,#plugin-acessibilidade-toolbar,.plugin-acessibilidade-toolbar-overlay,.plugin-acessibilidade-toolbar-overlay,.plugin-acessibilidade-toolbar-inner,.plugin-acessibilidade-toolbar-inner p, .plugin-acessibilidade-toolbar-items, .plugin-acessibilidade-toolbar-item a, .plugin-acessibilidade-toolbar-item a span),div:not(.navbar,.plugin-acessibilidade-toolbar-toggle,.plugin-acessibilidade-toolbar-link,.plugin-acessibilidade-toolbar-toggle-link,#plugin-acessibilidade-toolbar),a:not(.plugin-acessibilidade-toolbar-toggle,.plugin-acessibilidade-toolbar-link,.plugin-acessibilidade-toolbar-toggle-link)").css('font-size', '0.9rem');
        $(".navbar-fixed-top").find("*").css('font-size', '14px');
        $(".InfoPerfil").css('font-size', '11px')
        $("#plugin-acessibilidade-toolbar,.plugin-acessibilidade-toolbar-overlay,.plugin-acessibilidade-toolbar-inner p").css('font-size', '16px');
        $(".plugin-acessibilidade-toolbar-items").find("*").css('font-size', '14px');
		valor = 0.9;
	}
	
	$(".plugin-acessibilidade-toolbar-toggle").css("font-size","0.9em");

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
    
	$(".plugin-acessibilidade-tools .plugin-acessibilidade-btn-links-underline").on("click", function () {
        acessibilidade("links");
    });

	$(".plugin-acessibilidade-tools .plugin-acessibilidade-btn-reset").on("click",function(){
		resetAcessibilidade("all");
	});
});
