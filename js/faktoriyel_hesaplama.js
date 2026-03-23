document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('faktoriyelForm');
    const sonucAlani = document.getElementById('sonucAlani');
    const sonuc = document.getElementById('sonuc');
    const aciklama = document.getElementById('aciklama');

    /**
     * @param {number} n 
     * @returns {number} 
     */
    function faktoriyelHesapla(n) {
        if (n === 0 || n === 1) {
            return 1;
        }

        let sonuc = 1;
        for (let i = 2; i <= n; i++) {
            sonuc *= i;
        }
        return sonuc;
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const sayi = parseInt(document.getElementById('sayi').value);

        if (isNaN(sayi) || sayi < 0) {
            alert("Lütfen 0 veya pozitif bir tam sayı giriniz.");
            return;
        }

        if (sayi > 170) {
            alert("170'den büyük sayıların faktöriyeli çok büyük olur ve hesaplanamaz.");
            return;
        }

        const hesaplananSonuc = faktoriyelHesapla(sayi);

        sonuc.textContent = `${sayi}! = ${hesaplananSonuc}`;

        if (sayi === 0 || sayi === 1) {
            aciklama.textContent = `Tanım gereği ${sayi} faktöriyeli = 1`;
        } else {
            let carpimAciklama = "1";
            for (let i = 2; i <= sayi; i++) {
                carpimAciklama += ` × ${i}`;
            }
            aciklama.textContent = `Hesaplama: ${carpimAciklama} = ${hesaplananSonuc}`;
        }

        sonucAlani.style.display = 'block';
        sonucAlani.scrollIntoView({ behavior: 'smooth' });
    });
});