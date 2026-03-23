document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('kiraArtisForm');
    const sonucAlani = document.getElementById('sonucAlani');
    const artisOraniSpan = document.getElementById('artisOrani');
    const artisTutariSpan = document.getElementById('artisTutari');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const eskiKira = parseFloat(document.getElementById('eskiKira').value);
        const yeniKira = parseFloat(document.getElementById('yeniKira').value);

        if (isNaN(eskiKira) || isNaN(yeniKira) || eskiKira <= 0 || yeniKira <= 0) {
            alert("Geçerli değerler giriniz.");
            return;
        }

        const artisTutari = yeniKira - eskiKira;
        const artisOrani = (artisTutari / eskiKira) * 100;

        artisOraniSpan.textContent = artisOrani.toFixed(1);
        artisTutariSpan.textContent = artisTutari.toFixed(1);
        sonucAlani.style.display = 'block';
    });
});