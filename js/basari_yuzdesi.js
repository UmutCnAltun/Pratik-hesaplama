document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('basariYuzdesiForm');
    const sonucAlani = document.getElementById('sonucAlani');
    const basariYuzdesiSpan = document.getElementById('basariYuzdesi');
    const basariDurumuSpan = document.getElementById('basariDurumu');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const eldeEdilenPuan = parseFloat(document.getElementById('eldeEdilenPuan').value);
        const toplamPuan = parseFloat(document.getElementById('toplamPuan').value);

        if (isNaN(eldeEdilenPuan) || isNaN(toplamPuan) || eldeEdilenPuan < 0 || toplamPuan <= 0) {
            alert("Geçerli değerler giriniz.");
            return;
        }

        if (eldeEdilenPuan > toplamPuan) {
            alert("Elde edilen puan toplam puandan fazla olamaz.");
            return;
        }

        const basariYuzdesi = (eldeEdilenPuan / toplamPuan) * 100;

        let basariDurumu = '';
        if (basariYuzdesi >= 90) basariDurumu = 'Mükemmel';
        else if (basariYuzdesi >= 80) basariDurumu = 'Çok İyi';
        else if (basariYuzdesi >= 70) basariDurumu = 'İyi';
        else if (basariYuzdesi >= 60) basariDurumu = 'Orta';
        else if (basariYuzdesi >= 50) basariDurumu = 'Geçer';
        else basariDurumu = 'Başarısız';

        basariYuzdesiSpan.textContent = basariYuzdesi.toFixed(1) + '%';
        basariDurumuSpan.textContent = basariDurumu;
        sonucAlani.style.display = 'block';
    });
});