document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('gunSayisiForm');
    const sonucAlani = document.getElementById('sonucAlani');
    const sonuc = document.getElementById('sonuc');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const zamanBirimi = document.getElementById('zamanBirimi').value;
        const miktar = parseFloat(document.getElementById('miktar').value);

        if (isNaN(miktar) || miktar <= 0) {
            alert("Lütfen geçerli bir miktar giriniz.");
            return;
        }

        let gunSayisi;
        let aciklama;

        switch(zamanBirimi) {
            case 'hafta':
                gunSayisi = miktar * 7;
                aciklama = `${miktar} hafta = ${gunSayisi} gün`;
                break;
            case 'ay':
                gunSayisi = miktar * 30.44; 
                aciklama = `${miktar} ay ≈ ${gunSayisi.toFixed(1)} gün`;
                break;
            case 'yil':
                gunSayisi = miktar * 365.25; 
                aciklama = `${miktar} yıl ≈ ${gunSayisi.toFixed(1)} gün`;
                break;
            default:
                alert("Geçersiz zaman birimi seçildi.");
                return;
        }

        sonuc.innerHTML = `
            <div style="text-align: center;">
                <div style="font-size: 2em; margin-bottom: 10px;">${Math.round(gunSayisi)} gün</div>
                <div style="color: #666;">${aciklama}</div>
            </div>
        `;

        sonucAlani.style.display = 'block';
        sonucAlani.scrollIntoView({ behavior: 'smooth' });
    });
});