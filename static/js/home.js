function gameClick(valor) {
    const pag = document.getElementById('conteudo_game');
    let conteudo = '';
    switch (valor) {
        case 'cs':
            conteudo = cs;
            break;

        case 'god':
            conteudo = god;
            break;

        case 'hollow':
            conteudo = hollow;
            break;

        case 'tf':
            conteudo = tf;
            break;

        case 'lol':
            conteudo = lol;
            break;
    }
    pag.innerHTML = conteudo;
}

function navCs(valor) {
    const pag = document.getElementById('itens-conteudo');
    let conteudo = '';
    switch (valor) {
        case 'figures':
            conteudo = csFigure;
            break;

        case 'maquetes':
            conteudo = csMaquete;
            break;

        case 'mascaras':
            conteudo = csMascara
            break;
    }
    pag.innerHTML = conteudo;
};

function navGod(valor) {
    const pag = document.getElementById('itens-conteudo');
    let conteudo = '';
    switch (valor) {
        case 'figures':
            conteudo = godFigure;
            break;

        case 'maquetes':
            conteudo = godMaquete;
            break;

        case 'mascaras':
            conteudo = godMascara;
            break;
    }

    pag.innerHTML = conteudo;
};

function navTf(valor) {
    const pag = document.getElementById('itens-conteudo');
    let conteudo = '';
    switch (valor) {
        case 'figures':
            conteudo = tfFigure;
            break;

        case 'maquetes':
            conteudo = tfMaquete;
            break;

        case 'mascaras':
            conteudo = tfMascara;
            break;
    }

    pag.innerHTML = conteudo;
};

function navHollow(valor) {
    pag = document.getElementById('itens-conteudo');
    let conteudo = '';
    switch (valor) {
        case 'figures':
            conteudo = hollowFigure;
            break;

        case 'maquetes':
            conteudo = hollowMaquete;
            break;

        case 'mascaras':
            conteudo = hollowMascara;
            break;
    }
    pag.innerHTML = conteudo;
}

function navLol(valor) {
    pag = document.getElementById('itens-conteudo');
    let conteudo = '';
    switch (valor) {
        case 'figures':
            conteudo = lolFigure;
            break;

        case 'maquetes':
            conteudo = lolMaquete;
            break;

        case 'mascaras':
            conteudo = lolMascara;
            break;
    }
    pag.innerHTML = conteudo;
}