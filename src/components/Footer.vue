<template>
    <footer class="footer">
        <div class="footer__container">
            <p class="footer__text">&copy; 2023 LienCourt.fr</p>
            <ul class="footer__links">
                <li class="footer__link-item">
                    <a href="https://short.cloudypanda.me/docs" target="_blank" rel="noopener noreferrer">API</a>
                </li>
                <li class="footer__link-item">
                    <a href="https://github.com/mathieuc22/url_shortener/blob/main/LICENSE" target="_blank"
                        rel="noopener noreferrer">Licence</a>
                </li>
            </ul>
        </div>
    </footer>
</template>
  
<style>
.footer {
    margin-top: 2rem;
    background-color: var(--color-light);
    padding: 20px 0;
}

.footer__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.footer__text {
    color: var(--color-dark);
    font-size: 14px;
}

.footer__links {
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;
}

.footer__link-item {
    margin-left: 15px;
}

.footer__link-item a {
    color: var(--color-dark);
    text-decoration: none;
}

.footer__link-item a:hover {
    text-decoration: underline;
}
</style>
  