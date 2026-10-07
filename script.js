const desk = document.getElementById('desk');
const mobile = document.getElementById('mobile');

let content = `
        <section class="profile">
            <img src="images/jg.png" alt="Foto de perfil" width="200">
            <h1>JG</h1>
        </section>
        <section class="redes">
            <a href="https://www.instagram.com/elias21hugo/" target="_blank">
                <img src="images/instagram.png" alt="Instagram" width="30" class="redes_images">
            </a>
            <a href="https://www.tiktok.com/@elias21hugo" target="_blank">
                <img src="images/tiktok.png" alt="TikTok" width="30" class="redes_images">
            </a>
            <a href="https://www.threads.com/elias21hugo/" target="_blank">
                <img src="images/threads.png" alt="Threads" width="30" class="redes_images">
            </a>
        </section>
        <section class="links"> 
            <a href="https://www.instagram.com/elias21hugo/" target="_blank">
                <div class="image">
                    <img src="images/instagram_elias21hugo_preview.png" alt="Instagram">
                </div>
                <div class="text">
                    <p class="red">Instagram</p>
                    <p class="user">Principal</p>
                    <p class="user">@elias21hugo</p>
                </div>
            </a>
            <a href="https://www.tiktok.com/@elias21hugo" target="_blank">
                <div class="image">
                    <img src="images/tiktok_elias21hugo_preview.png" alt="TikTok">
                </div>
                <div class="text">
                    <p class="red">TikTok</p>
                    <p class="user">Principal</p>
                    <p class="user">@elias21hugo</p>
                </div>
            </a>
            <a href="https://www.threads.com/elias21hugo/" target="_blank">
                <div class="image">
                    <img src="images/threads_elias21hugo_preview.png" alt="Threads">
                </div>
                <div class="text">
                    <p class="red">Threads</p>
                    <p class="user">Principal</p>
                    <p class="user">@elias21hugo</p>
                </div>
            </a>
            <a href="https://www.instagram.com/jg21x/" target="_blank">
                <div class="image">
                    <img src="images/instagram_jg21x_preview.png" alt="Instagram">
                </div>
                <div class="text">
                    <p class="red">Instagram</p>
                    <p class="user">Secundaria</p>
                    <p class="user">@jg21x</p>
                </div>
            </a>
            <a href="https://www.tiktok.com/@jg21x" target="_blank">
                <div class="image">
                    <img src="images/tiktok_jg21x_preview.png" alt="TikTok">
                </div>
                <div class="text">
                    <p class="red">TikTok</p>
                    <p class="user">Secundaria</p>
                    <p class="user">@jg21x</p>
                </div>
            </a>
            <a href="https://www.threads.com/jg21x/" target="_blank">
                <div class="image">
                    <img src="images/threads_jg21x_preview.png" alt="Threads">
                </div>
                <div class="text">
                    <p class="red">Threads</p>
                    <p class="user">Secundaria</p>
                    <p class="user">@jg21x</p>
                </div>
            </a>
            <a href="https://hugoed2106.github.io/poemas/" target="_blank">
                <div class="image">
                    <img src="images/poemas_preview.png" alt="Poemas">
                </div>
                <div class="text">
                    <p class="red">Poemas</p>
                    <p class="user">@jg</p>
                </div>
            </a>
        </section>
    `;

// Mostrar el mismo contenido de la página sin importar el tamaño de la pantalla
function viewScreen() {
    desk.innerHTML = content;
    mobile.innerHTML = content;
}