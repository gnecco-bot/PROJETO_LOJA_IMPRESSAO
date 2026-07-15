function navCs(pag) {
    const paginaSelecionada = document.getElementById('itens-conteudo-cs');
    let conteudo = '';
    switch (pag) {
        case 'figures':
            conteudo = `
            <div class="bloco-cs">
                <img src="https://makerworld.bblmw.com/makerworld/model/US4d9e136c3df811/design/2025-02-16_e8c4a0b5b82d2.jpg?x-oss-process=image/resize,w_1000/format,webp" alt="">
            </div>
            <div class="bloco-cs">
                <img src="https://makerworld.bblmw.com/makerworld/model/US4d9e136c3df811/design/2025-02-16_e8c4a0b5b82d2.jpg?x-oss-process=image/resize,w_1000/format,webp" alt="">
            </div>
            <div class="bloco-cs">
                <img src="https://makerworld.bblmw.com/makerworld/model/US4d9e136c3df811/design/2025-02-16_e8c4a0b5b82d2.jpg?x-oss-process=image/resize,w_1000/format,webp" alt="">
            </div>
            <div class="bloco-cs">
                <img src="https://makerworld.bblmw.com/makerworld/model/US4d9e136c3df811/design/2025-02-16_e8c4a0b5b82d2.jpg?x-oss-process=image/resize,w_1000/format,webp" alt="">
            </div>
            `
            break;
        case 'maquetes':
            conteudo = `
            <div class="bloco-cs">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHZ7vOy_KZP9iTt5Gs9swVLE-v-ikGeaXSsD-jbvIITA&s=10" alt="">
            </div>
            <div class="bloco-cs">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHZ7vOy_KZP9iTt5Gs9swVLE-v-ikGeaXSsD-jbvIITA&s=10" alt="">
            </div>
            <div class="bloco-cs">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHZ7vOy_KZP9iTt5Gs9swVLE-v-ikGeaXSsD-jbvIITA&s=10" alt="">
            </div>
            <div class="bloco-cs">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHZ7vOy_KZP9iTt5Gs9swVLE-v-ikGeaXSsD-jbvIITA&s=10" alt="">
            </div>
            `
            break;
        case 'mascaras':
            conteudo = `
            <div class="bloco-cs">
                <img src="https://fbi.cults3d.com/uploaders/13475163/photo-file/9266c213-f406-4129-a489-ac95b7ba4f85/20221215_141247.jpg" alt="">
            </div>
            <div class="bloco-cs">
                <img src="https://fbi.cults3d.com/uploaders/13475163/photo-file/9266c213-f406-4129-a489-ac95b7ba4f85/20221215_141247.jpg" alt="">
            </div>
            <div class="bloco-cs">
                <img src="https://fbi.cults3d.com/uploaders/13475163/photo-file/9266c213-f406-4129-a489-ac95b7ba4f85/20221215_141247.jpg" alt="">
            </div>
            <div class="bloco-cs">
                <img src="https://fbi.cults3d.com/uploaders/13475163/photo-file/9266c213-f406-4129-a489-ac95b7ba4f85/20221215_141247.jpg" alt="">
            </div>
                `
            break;
    }
    paginaSelecionada.innerHTML = conteudo;
};