document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('sinavZamaniForm');
    const sonucAlani = document.getElementById('sonucAlani');
    const toplamSureSpan = document.getElementById('toplamSure');
    const soruBasiSureSpan = document.getElementById('soruBasiSure');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const toplamSoru = parseInt(document.getElementById('toplamSoru').value);
        const dakikaBasiSoru = parseFloat(document.getElementById('dakikaBasiSoru').value);
        const molaDakika = parseInt(document.getElementById('molaDakika').value) || 0;

        if (isNaN(toplamSoru) || isNaN(dakikaBasiSoru) || isNaN(molaDakika) ||
            toplamSoru <= 0 || dakikaBasiSoru <= 0 || molaDakika < 0) {
            alert("Geçerli değerler giriniz.");
            return;
        }

        const soruBasiSureDakika = 1 / dakikaBasiSoru;

        const toplamSureDakika = (toplamSoru * soruBasiSureDakika) + molaDakika;

        const toplamDakika = Math.floor(toplamSureDakika);
        const toplamSaniye = Math.round((toplamSureDakika - toplamDakika) * 60);

        const soruDakika = Math.floor(soruBasiSureDakika);
        const soruSaniye = Math.round((soruBasiSureDakika - soruDakika) * 60);

        toplamSureSpan.textContent = `${toplamDakika} dakika ${toplamSaniye} saniye`;
        soruBasiSureSpan.textContent = `${soruDakika} dakika ${soruSaniye} saniye`;
        sonucAlani.style.display = 'block';
    });
});