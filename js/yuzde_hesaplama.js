document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('yuzdeForm');
    const sonucAlani = document.getElementById('sonucAlani');
    const sonuc = document.getElementById('sonuc');
    const hesaplamaTuruSelect = document.getElementById('hesaplamaTuru');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const hesaplamaTuru = hesaplamaTuruSelect.value;
        const sayi = parseFloat(document.getElementById('sayi').value);
        const yuzde = parseFloat(document.getElementById('yuzde').value);

        if (isNaN(sayi) || isNaN(yuzde)) {
            alert("Lütfen geçerli sayılar giriniz.");
            return;
        }

        let hesaplananSonuc;
        let aciklama;

        switch(hesaplamaTuru) {
            case 'yuzde':
                hesaplananSonuc = (sayi * yuzde) / 100;
                aciklama = `${sayi}'nin %${yuzde}'si = ${hesaplananSonuc}`;
                break;
            case 'oran':
                hesaplananSonuc = (sayi / yuzde) * 100;
                aciklama = `${sayi}'nin ${yuzde}'e oranı = %${hesaplananSonuc}`;
                break;
            case 'artis':
                hesaplananSonuc = sayi * (1 + yuzde / 100);
                aciklama = `${sayi}'nin %${yuzde} ${yuzde >= 0 ? 'artışı' : 'azalışı'} = ${hesaplananSonuc}`;
                break;
            default:
                alert("Geçersiz hesaplama türü seçildi.");
                return;
        }

        sonuc.textContent = aciklama;
        sonucAlani.style.display = 'block';

        sonucAlani.scrollIntoView({ behavior: 'smooth' });
    });
});