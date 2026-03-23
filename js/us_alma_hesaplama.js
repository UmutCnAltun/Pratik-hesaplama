document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('usAlmaForm');
    const sonucAlani = document.getElementById('sonucAlani');
    const sonuc = document.getElementById('sonuc');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const taban = parseFloat(document.getElementById('taban').value);
        const us = parseFloat(document.getElementById('us').value);

        if (isNaN(taban) || isNaN(us)) {
            alert("Lütfen geçerli sayılar giriniz.");
            return;
        }

        const hesaplananSonuc = Math.pow(taban, us);

        sonuc.textContent = `${taban}^${us} = ${hesaplananSonuc}`;
        sonucAlani.style.display = 'block';

        sonucAlani.scrollIntoView({ behavior: 'smooth' });
    });
});