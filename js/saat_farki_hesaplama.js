document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('saatFarkiForm');
    const sonucAlani = document.getElementById('sonucAlani');
    const sonuc = document.getElementById('sonuc');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const baslangicSaati = document.getElementById('baslangicSaati').value;
        const bitisSaati = document.getElementById('bitisSaati').value;

        if (!baslangicSaati || !bitisSaati) {
            alert("Lütfen saatleri giriniz.");
            return;
        }

        const baslangic = new Date(`2000-01-01T${baslangicSaati}`);
        const bitis = new Date(`2000-01-01T${bitisSaati}`);

        let farkMs = bitis - baslangic;

        if (farkMs < 0) {
            farkMs += 24 * 60 * 60 * 1000; // 24 saat ekle
        }

        const toplamSaniye = Math.floor(farkMs / 1000);
        const saat = Math.floor(toplamSaniye / 3600);
        const dakika = Math.floor((toplamSaniye % 3600) / 60);
        const saniye = toplamSaniye % 60;

        sonuc.innerHTML = `
            <div style="text-align: center;">
                <div style="font-size: 2em; margin-bottom: 10px;">${saat} saat ${dakika} dakika ${saniye} saniye</div>
                <div style="color: #666;">Toplam: ${toplamSaniye} saniye</div>
            </div>
        `;

        sonucAlani.style.display = 'block';
        sonucAlani.scrollIntoView({ behavior: 'smooth' });
    });
});