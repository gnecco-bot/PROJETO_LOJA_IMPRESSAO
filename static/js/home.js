function gameClick(valor) {
    const pag = document.getElementById('conteudo_game');
    let conteudo = '';
    switch (valor) {
        case 'cs':
            conteudo = `
            <div class="titulo">
                <img src="https://logodownload.org/wp-content/uploads/2025/01/cs-2-logo.png" alt="">
                </div>
                <div class="container">
                <div class="banner">
                    <img src="https://cdn2.steamgriddb.com/thumb/bf0ff26ebab44b083822745e7422ab00.jpg" alt="">
                </div>
                <div class="itens">
                    <nav>
                    <a href="#section-counter-strike" onclick="navCs('figures')">FIGURES</a>
                    <a href="#section-counter-strike" onclick="navCs('maquetes')">MAQUETES</a>
                    <a href="#section-counter-strike" onclick="navCs('mascaras')">MASCARAS</a>
                    </nav>
                    <div class='itens-conteudo' id="itens-conteudo">
                    <div class="bloco">
                        <div class="bloco-img">
                        <img src="https://makerworld.bblmw.com/makerworld/model/US4d9e136c3df811/design/2025-02-16_e8c4a0b5b82d2.jpg?x-oss-process=image/resize,w_1000/format,webp" alt="">
                        </div>
                        <p>ROMANOV</p>
                    </div>
                    <div class="bloco">
                        <div class="bloco-img">
                        <img src="https://makerworld.bblmw.com/makerworld/model/US4d9e136c3df811/design/2025-02-16_e8c4a0b5b82d2.jpg?x-oss-process=image/resize,w_1000/format,webp" alt="">
                        </div>
                        <p>TERRORISTA</p>
                    </div>
                    <div class="bloco">
                        <div class="bloco-img">
                        <img src="https://makerworld.bblmw.com/makerworld/model/US4d9e136c3df811/design/2025-02-16_e8c4a0b5b82d2.jpg?x-oss-process=image/resize,w_1000/format,webp" alt="">
                        </div>
                        <p>TIKEN</p>
                    </div>
                    <div class="bloco">
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
                background-color: #FFAE00;
            }
            </style>
            `
            break;

        case 'god':
            conteudo = `
            <div class="titulo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/God_of_War_Logo.png" alt="">
                </div>
                <div class="container">
                <div class="banner">
                    <img src="https://cdn.wccftech.com/wp-content/uploads/2015/04/GOW_Logo_large_III_DL_01_b.png" alt="">
                </div>
                <div class="itens">
                    <nav>
                    <a href="#section-counter-strike" onclick="navCs('figures')">FIGURES</a>
                    <a href="#section-counter-strike" onclick="navCs('maquetes')">MAQUETES</a>
                    <a href="#section-counter-strike" onclick="navCs('mascaras')">MASCARAS</a>
                    </nav>
                    <div class='itens-conteudo' id="itens-conteudo">
                    <div class="bloco">
                        <div class="bloco-img">
                        <img src="https://makerworld.bblmw.com/makerworld/model/US4d9e136c3df811/design/2025-02-16_e8c4a0b5b82d2.jpg?x-oss-process=image/resize,w_1000/format,webp" alt="">
                        </div>
                        <p>ROMANOV</p>
                    </div>
                    <div class="bloco">
                        <div class="bloco-img">
                        <img src="https://makerworld.bblmw.com/makerworld/model/US4d9e136c3df811/design/2025-02-16_e8c4a0b5b82d2.jpg?x-oss-process=image/resize,w_1000/format,webp" alt="">
                        </div>
                        <p>TERRORISTA</p>
                    </div>
                    <div class="bloco">
                        <div class="bloco-img">
                        <img src="https://makerworld.bblmw.com/makerworld/model/US4d9e136c3df811/design/2025-02-16_e8c4a0b5b82d2.jpg?x-oss-process=image/resize,w_1000/format,webp" alt="">
                        </div>
                        <p>TIKEN</p>
                    </div>
                    <div class="bloco">
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
                background-color: #a1a1a1;
            }
            </style>
            `
            break;

        case 'tf':
            conteudo = `
            <div class="titulo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/71/Team-Fortress-2-logo.png" alt="">
                </div>
                <div class="container">
                <div class="banner">
                    <img src="https://wiki.teamfortress.com/w/images/thumb/d/d9/TF2_Boxart.png/250px-TF2_Boxart.png.jpeg" alt="">
                </div>
                <div class="itens">
                    <nav>
                    <a href="#section-counter-strike" onclick="navTf('figures')">FIGURES</a>
                    <a href="#section-counter-strike" onclick="navTf('maquetes')">MAQUETES</a>
                    <a href="#section-counter-strike" onclick="navTf('mascaras')">MASCARAS</a>
                    </nav>
                    <div class='itens-conteudo' id="itens-conteudo">
                    <div class="bloco">
                        <div class="bloco-img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz2fJVH8RdcBggeKAAO3kudDlIxeUQQw4cpkMWsIdwhorNgofIAT7hx4Ps&s=10" alt="">
                        </div>
                        <p>SOLDIER</p>
                    </div>
                    <div class="bloco">
                        <div class="bloco-img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz2fJVH8RdcBggeKAAO3kudDlIxeUQQw4cpkMWsIdwhorNgofIAT7hx4Ps&s=10" alt="">
                        </div>
                        <p>SCOUT</p>
                    </div>
                    <div class="bloco">
                        <div class="bloco-img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz2fJVH8RdcBggeKAAO3kudDlIxeUQQw4cpkMWsIdwhorNgofIAT7hx4Ps&s=10" alt="">
                        </div>
                        <p>ENGINNER</p>
                    </div>
                    <div class="bloco">
                        <div class="bloco-img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz2fJVH8RdcBggeKAAO3kudDlIxeUQQw4cpkMWsIdwhorNgofIAT7hx4Ps&s=10" alt="">
                        </div>
                        <p>SNIPER</p>
                    </div>
                    </div>
                </div>
                </div>

            <style>
            .section-games {
                background-color: rgb(137, 73, 29);
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
                    background-color: rgb(10, 52, 17);
                }
                </style>

                `
            break;
    }
    pag.innerHTML = conteudo;
}

function navCs(valor) {
    const pag = document.getElementById('itens-conteudo');
    let conteudo = '';
    switch (valor) {
        case 'figures':
            conteudo = `
                    <div class="bloco">
                        <div class="bloco-img">
                        <img src="https://makerworld.bblmw.com/makerworld/model/US4d9e136c3df811/design/2025-02-16_e8c4a0b5b82d2.jpg?x-oss-process=image/resize,w_1000/format,webp" alt="">
                        </div>
                        <p>ROMANOV</p>
                    </div>
                    <div class="bloco">
                        <div class="bloco-img">
                        <img src="https://makerworld.bblmw.com/makerworld/model/US4d9e136c3df811/design/2025-02-16_e8c4a0b5b82d2.jpg?x-oss-process=image/resize,w_1000/format,webp" alt="">
                        </div>
                        <p>TERRORISTA</p>
                    </div>
                    <div class="bloco">
                        <div class="bloco-img">
                        <img src="https://makerworld.bblmw.com/makerworld/model/US4d9e136c3df811/design/2025-02-16_e8c4a0b5b82d2.jpg?x-oss-process=image/resize,w_1000/format,webp" alt="">
                        </div>
                        <p>TIKEN</p>
                    </div>
                    <div class="bloco">
                        <div class="bloco-img">
                        <img src="https://makerworld.bblmw.com/makerworld/model/US4d9e136c3df811/design/2025-02-16_e8c4a0b5b82d2.jpg?x-oss-process=image/resize,w_1000/format,webp" alt="">
                        </div>
                        <p>FIGURE</p>
                    </div>
            `
            break;
        case 'maquetes':
            conteudo = `
                    <div class="bloco">
                        <div class="bloco-img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHZ7vOy_KZP9iTt5Gs9swVLE-v-ikGeaXSsD-jbvIITA&s=10" alt="">
                        </div>
                        <p>ROMANOV</p>
                    </div>
                    <div class="bloco">
                        <div class="bloco-img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHZ7vOy_KZP9iTt5Gs9swVLE-v-ikGeaXSsD-jbvIITA&s=10" alt="">
                        </div>
                        <p>TERRORISTA</p>
                    </div>
                    <div class="bloco">
                        <div class="bloco-img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHZ7vOy_KZP9iTt5Gs9swVLE-v-ikGeaXSsD-jbvIITA&s=10" alt="">
                        </div>
                        <p>TIKEN</p>
                    </div>
                    <div class="bloco">
                        <div class="bloco-img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHZ7vOy_KZP9iTt5Gs9swVLE-v-ikGeaXSsD-jbvIITA&s=10" alt="">
                        </div>
                        <p>FIGURE</p>
                    </div>
            `
            break;
        case 'mascaras':
            conteudo = `
                    <div class="bloco">
                        <div class="bloco-img">
                        <img src="https://fbi.cults3d.com/uploaders/13475163/photo-file/9266c213-f406-4129-a489-ac95b7ba4f85/20221215_141247.jpg" alt="">
                        </div>
                        <p>ROMANOV</p>
                    </div>
                    <div class="bloco">
                        <div class="bloco-img">
                        <img src="https://fbi.cults3d.com/uploaders/13475163/photo-file/9266c213-f406-4129-a489-ac95b7ba4f85/20221215_141247.jpg" alt="">
                        </div>
                        <p>TERRORISTA</p>
                    </div>
                    <div class="bloco">
                        <div class="bloco-img">
                        <img src="https://fbi.cults3d.com/uploaders/13475163/photo-file/9266c213-f406-4129-a489-ac95b7ba4f85/20221215_141247.jpg" alt="">
                        </div>
                        <p>TIKEN</p>
                    </div>
                    <div class="bloco">
                        <div class="bloco-img">
                        <img src="https://fbi.cults3d.com/uploaders/13475163/photo-file/9266c213-f406-4129-a489-ac95b7ba4f85/20221215_141247.jpg" alt="">
                        </div>
                        <p>FIGURE</p>
                    </div>
                `
            break;
    }
    pag.innerHTML = conteudo;
};

function navTf(valor) {
    const pag = document.getElementById('itens-conteudo');
    let conteudo = '';
    switch (valor) {
        case 'figures':
            conteudo = `
                    <div class="bloco">
                        <div class="bloco-img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz2fJVH8RdcBggeKAAO3kudDlIxeUQQw4cpkMWsIdwhorNgofIAT7hx4Ps&s=10" alt="">
                        </div>
                        <p>SOLDIER</p>
                    </div>
                    <div class="bloco">
                        <div class="bloco-img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz2fJVH8RdcBggeKAAO3kudDlIxeUQQw4cpkMWsIdwhorNgofIAT7hx4Ps&s=10" alt="">
                        </div>
                        <p>SCOUT</p>
                    </div>
                    <div class="bloco">
                        <div class="bloco-img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz2fJVH8RdcBggeKAAO3kudDlIxeUQQw4cpkMWsIdwhorNgofIAT7hx4Ps&s=10" alt="">
                        </div>
                        <p>ENGINNER</p>
                    </div>
                    <div class="bloco">
                        <div class="bloco-img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz2fJVH8RdcBggeKAAO3kudDlIxeUQQw4cpkMWsIdwhorNgofIAT7hx4Ps&s=10" alt="">
                        </div>
                        <p>SNIPER</p>
                    </div>
            `
            break;
        case 'maquetes':
            conteudo = `
                    <div class="bloco">
                        <div class="bloco-img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz4erJwIbS0XIU0CEmV2LLtnGeve00kuDsd_vGHzrmQbiYFlbJNRzSkE0&s=10" alt="">
                        </div>
                        <p>2FORT</p>
                    </div>
                    <div class="bloco">
                        <div class="bloco-img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz4erJwIbS0XIU0CEmV2LLtnGeve00kuDsd_vGHzrmQbiYFlbJNRzSkE0&s=10" alt="">
                        </div>
                        <p>TURBINE</p>
                    </div>
                    <div class="bloco">
                        <div class="bloco-img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz4erJwIbS0XIU0CEmV2LLtnGeve00kuDsd_vGHzrmQbiYFlbJNRzSkE0&s=10" alt="">
                        </div>
                        <p>SENTRY</p>
                    </div>
                    <div class="bloco">
                        <div class="bloco-img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz4erJwIbS0XIU0CEmV2LLtnGeve00kuDsd_vGHzrmQbiYFlbJNRzSkE0&s=10" alt="">
                        </div>
                        <p>DUSTBOWL</p>
                    </div>
            `
            break;
        case 'mascaras':
            conteudo = `
                    <div class="bloco">
                        <div class="bloco-img">
                        <img src="https://www.propfortress.com/cdn/shop/files/nohmercy_2.jpg?v=1774256667" alt="">
                        </div>
                        <p>DEMON</p>
                    </div>
                    <div class="bloco">
                        <div class="bloco-img">
                        <img src="https://www.propfortress.com/cdn/shop/files/nohmercy_2.jpg?v=1774256667" alt="">
                        </div>
                        <p>ASTALAVISTA</p>
                    </div>
                    <div class="bloco">
                        <div class="bloco-img">
                        <img src="https://www.propfortress.com/cdn/shop/files/nohmercy_2.jpg?v=1774256667" alt="">
                        </div>
                        <p>GAMEOVER</p>
                    </div>
                    <div class="bloco">
                        <div class="bloco-img">
                        <img src="https://www.propfortress.com/cdn/shop/files/nohmercy_2.jpg?v=1774256667" alt="">
                        </div>
                        <p>RANDOM</p>
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