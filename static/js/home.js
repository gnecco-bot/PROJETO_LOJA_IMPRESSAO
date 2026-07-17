function gameClick(valor) {
    const pag = document.getElementById('conteudo_game');
    let conteudo = '';
    switch (valor) {
        case 'cs':
            conteudo = `
            <div class="titulo-cs">
                <img src="https://logodownload.org/wp-content/uploads/2025/01/cs-2-logo.png" alt="">
            </div>
            <div class="container-cs">
                <div class="cs">
                    <img src="https://cdn2.steamgriddb.com/thumb/bf0ff26ebab44b083822745e7422ab00.jpg" alt="">
                </div>
                <div class="itens-cs">
                    <nav>
                    <a href="#section-counter-strike" onclick="navCs('figures')">FIGURES</a>
                    <a href="#section-counter-strike" onclick="navCs('maquetes')">MAQUETES</a>
                    <a href="#section-counter-strike" onclick="navCs('mascaras')">MASCARAS</a>
                    </nav>
                    <div class='itens-conteudo-cs' id="itens-conteudo-cs">
                        <div class="bloco-cs">
                            <div class="bloco-img">
                                <img src="https://makerworld.bblmw.com/makerworld/model/US4d9e136c3df811/design/2025-02-16_e8c4a0b5b82d2.jpg?x-oss-process=image/resize,w_1000/format,webp" alt="">
                            </div>
                            <p>ROMANOV</p>
                        </div>
                        <div class="bloco-cs">
                            <div class="bloco-img">
                                <img src="https://makerworld.bblmw.com/makerworld/model/US4d9e136c3df811/design/2025-02-16_e8c4a0b5b82d2.jpg?x-oss-process=image/resize,w_1000/format,webp" alt="">
                            </div>
                            <p>TERRORISTA</p>
                        </div>
                        <div class="bloco-cs">
                            <div class="bloco-img">
                                <img src="https://makerworld.bblmw.com/makerworld/model/US4d9e136c3df811/design/2025-02-16_e8c4a0b5b82d2.jpg?x-oss-process=image/resize,w_1000/format,webp" alt="">
                            </div>
                            <p>TIKEN</p>
                        </div>
                        <div class="bloco-cs">
                            <div class="bloco-img">
                                <img src="https://makerworld.bblmw.com/makerworld/model/US4d9e136c3df811/design/2025-02-16_e8c4a0b5b82d2.jpg?x-oss-process=image/resize,w_1000/format,webp" alt="">
                            </div>
                            <p>FIGURE</p>
                        </div>
                    </div>
                </div>
            </div>

            <style>
            .section-games {
                padding: 0 30px 50px 30px;
                background-color: #FFAE00;
                height: 900px;
                border-bottom: 5px solid #0000004a;
            }

            .section-games .titulo-cs {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 10px;
            }

            .section-games .titulo-cs img {
                height: 90px;
            }
            </style>
            `
            break;

        case 'tf':
            conteudo = `
                <div class="titulo-tf">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/71/Team-Fortress-2-logo.png" alt="">
                </div>
                <div class="container-tf">
                    <div class="tf">
                    <img src="https://wiki.teamfortress.com/w/images/thumb/d/d9/TF2_Boxart.png/250px-TF2_Boxart.png.jpeg" alt="">
                    </div>
                    <div class="itens-tf">
                    <nav>
                        <a href="#section-counter-strike" onclick="navTf('figures')">FIGURES</a>
                        <a href="#section-counter-strike" onclick="navTf('maquetes')">MAQUETES</a>
                        <a href="#section-counter-strike" onclick="navTf('mascaras')">MASCARAS</a>
                    </nav>
                    <div class='itens-conteudo-tf' id="itens-conteudo-tf">
                        <div class="bloco-tf">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz2fJVH8RdcBggeKAAO3kudDlIxeUQQw4cpkMWsIdwhorNgofIAT7hx4Ps&s=10" alt="">
                        </div>
                        <div class="bloco-tf">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz2fJVH8RdcBggeKAAO3kudDlIxeUQQw4cpkMWsIdwhorNgofIAT7hx4Ps&s=10" alt="">
                        </div>
                        <div class="bloco-tf">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz2fJVH8RdcBggeKAAO3kudDlIxeUQQw4cpkMWsIdwhorNgofIAT7hx4Ps&s=10" alt="">
                        </div>
                        <div class="bloco-tf">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz2fJVH8RdcBggeKAAO3kudDlIxeUQQw4cpkMWsIdwhorNgofIAT7hx4Ps&s=10" alt="">
                        </div>
                    </div>
                    </div>
                </div>
            
                <style>
                .section-games {
                    padding: 0 30px 50px 30px;
                    background-color: rgb(137, 73, 29);
                    height: 900px;
                    border-bottom: 5px solid #0000004a;
                }

                .section-games .titulo-tf {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 50px;
                }

                .section-games .titulo-tf img {
                    height: 90px;
                }
                </style>

                `
            break;

        case 'lol':
            conteudo = `
                <div class="titulo-lol">
                    <img src="https://www.pngarts.com/files/4/League-of-Legends-Logo-PNG-Photo.png" alt="">
                </div>
                <div class="container-lol">
                    <div class="lol">
                    <img src="https://raw.communitydragon.org/14.10/plugins/rcp-fe-lol-static-assets/global/default/images/current-player-banner.png" alt="">
                    </div>
                    <div class="itens-lol">
                    <nav>
                        <a href="#section-counter-strike" onclick="navLol('figures')">FIGURES</a>
                        <a href="#section-counter-strike" onclick="navLol('maquetes')">MAQUETES</a>
                        <a href="#section-counter-strike" onclick="navLol('mascaras')">MASCARAS</a>
                    </nav>
                    <div class='itens-conteudo-lol' id="itens-conteudo-lol">
                        <div class="bloco-lol">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiczFG3EZk833SJ8wsyWng9CCzN49m96VYj4cMIkewNpZPkk1nww3flOlo&s=10" alt="">
                        </div>
                        <div class="bloco-lol">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiczFG3EZk833SJ8wsyWng9CCzN49m96VYj4cMIkewNpZPkk1nww3flOlo&s=10" alt="">
                        </div>
                        <div class="bloco-lol">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiczFG3EZk833SJ8wsyWng9CCzN49m96VYj4cMIkewNpZPkk1nww3flOlo&s=10" alt="">
                        </div>
                        <div class="bloco-lol">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiczFG3EZk833SJ8wsyWng9CCzN49m96VYj4cMIkewNpZPkk1nww3flOlo&s=10" alt="">
                        </div>
                    </div>
                    </div>
                </div>
            
                <style>
                .section-games {
                    padding: 0 30px 50px 30px;
                    background-color: rgb(10, 52, 17);
                    height: 900px;
                    border-bottom: 5px solid #0000004a;
                }

                .section-games .titulo-lol {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 50px;
                }

                .section-games .titulo-lol img {
                    height: 90px;
                }
                </style>

                `
            break;
    }
    pag.innerHTML = conteudo;
}

function navCs(valor) {
    const pag = document.getElementById('itens-conteudo-cs');
    let conteudo = '';
    switch (valor) {
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
    pag.innerHTML = conteudo;
};

function navTf(valor) {
    const pag = document.getElementById('itens-conteudo-tf');
    let conteudo = '';
    switch (valor) {
        case 'figures':
            conteudo = `
            <div class="bloco-tf">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz2fJVH8RdcBggeKAAO3kudDlIxeUQQw4cpkMWsIdwhorNgofIAT7hx4Ps&s=10" alt="">
            </div>
            <div class="bloco-tf">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz2fJVH8RdcBggeKAAO3kudDlIxeUQQw4cpkMWsIdwhorNgofIAT7hx4Ps&s=10" alt="">
            </div>
            <div class="bloco-tf">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz2fJVH8RdcBggeKAAO3kudDlIxeUQQw4cpkMWsIdwhorNgofIAT7hx4Ps&s=10" alt="">
            </div>
            <div class="bloco-tf">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz2fJVH8RdcBggeKAAO3kudDlIxeUQQw4cpkMWsIdwhorNgofIAT7hx4Ps&s=10" alt="">
            </div>
            `
            break;
        case 'maquetes':
            conteudo = `
            <div class="bloco-tf">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz4erJwIbS0XIU0CEmV2LLtnGeve00kuDsd_vGHzrmQbiYFlbJNRzSkE0&s=10" alt="">
            </div>
            <div class="bloco-tf">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz4erJwIbS0XIU0CEmV2LLtnGeve00kuDsd_vGHzrmQbiYFlbJNRzSkE0&s=10" alt="">
            </div>
            <div class="bloco-tf">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz4erJwIbS0XIU0CEmV2LLtnGeve00kuDsd_vGHzrmQbiYFlbJNRzSkE0&s=10" alt="">
            </div>
            <div class="bloco-tf">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz4erJwIbS0XIU0CEmV2LLtnGeve00kuDsd_vGHzrmQbiYFlbJNRzSkE0&s=10" alt="">
            </div>
            `
            break;
        case 'mascaras':
            conteudo = `
            <div class="bloco-tf">
                <img src="https://www.propfortress.com/cdn/shop/files/nohmercy_2.jpg?v=1774256667" alt="">
            </div>
            <div class="bloco-tf">
                <img src="https://images.steamusercontent.com/ugc/597038027857448845/A0CAD9DEC2F92C3E5EA97750B949798678089493/" alt="">
            </div>
            <div class="bloco-tf">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKmdwkl50ByVMvpBm4t6opu0R5i3tl3QbJdY_fuqxI-O2GVc16GUfE5uEp&s=10" alt="">
            </div>
            <div class="bloco-tf">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeQIlGec5sPpwmuYIUel7BlckMhVx3QHuE5QpdqapzK4HQcNrgWCG-DtVX&s=10" alt="">
            </div>
                `
            break;
    }
    pag.innerHTML = conteudo;
};

function navLol(valor) {
    pag = document.getElementById('itens-conteudo-lol');
    let conteudo = '';
    switch (valor) {
        case 'figures':
            conteudo = `
            <div class="bloco-lol">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiczFG3EZk833SJ8wsyWng9CCzN49m96VYj4cMIkewNpZPkk1nww3flOlo&s=10" alt="">
            </div>
            <div class="bloco-lol">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiczFG3EZk833SJ8wsyWng9CCzN49m96VYj4cMIkewNpZPkk1nww3flOlo&s=10" alt="">
            </div>
            <div class="bloco-lol">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiczFG3EZk833SJ8wsyWng9CCzN49m96VYj4cMIkewNpZPkk1nww3flOlo&s=10" alt="">
            </div>
            <div class="bloco-lol">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiczFG3EZk833SJ8wsyWng9CCzN49m96VYj4cMIkewNpZPkk1nww3flOlo&s=10" alt="">
            </div>
            `
            break;
        case 'maquetes':
            conteudo = `
            <div class="bloco-lol">
                <img src="https://images.steamusercontent.com/ugc/1682618382405627239/6C0AAC99AEEBF17F9D57047ECF8C548FCFB886F6/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true" alt="">
            </div>
            <div class="bloco-lol">
                <img src="https://images.steamusercontent.com/ugc/1682618382405627239/6C0AAC99AEEBF17F9D57047ECF8C548FCFB886F6/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true" alt="">
            </div>
            <div class="bloco-lol">
                <img src="https://images.steamusercontent.com/ugc/1682618382405627239/6C0AAC99AEEBF17F9D57047ECF8C548FCFB886F6/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true" alt="">
            </div>
            <div class="bloco-lol">
                <img src="https://images.steamusercontent.com/ugc/1682618382405627239/6C0AAC99AEEBF17F9D57047ECF8C548FCFB886F6/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true" alt="">
            </div>
            `
            break;
        case 'mascaras':
            conteudo = `
            <div class="bloco-lol">
                <img src="https://www.propfortress.com/cdn/shop/files/nohmercy_2.jpg?v=1774256667" alt="">
            </div>
            <div class="bloco-lol">
                <img src="https://images.steamusercontent.com/ugc/597038027857448845/A0CAD9DEC2F92C3E5EA97750B949798678089493/" alt="">
            </div>
            <div class="bloco-lol">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKmdwkl50ByVMvpBm4t6opu0R5i3tl3QbJdY_fuqxI-O2GVc16GUfE5uEp&s=10" alt="">
            </div>
            <div class="bloco-lol">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeQIlGec5sPpwmuYIUel7BlckMhVx3QHuE5QpdqapzK4HQcNrgWCG-DtVX&s=10" alt="">
            </div>
                `
            break;
    }
    pag.innerHTML = conteudo;
}