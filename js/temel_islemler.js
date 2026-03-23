document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('mathForm');
    const sonucAlani = document.getElementById('sonucAlani');
    const sonuc = document.getElementById('sonuc');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const sayi1 = parseFloat(document.getElementById('sayi1').value);
        const sayi2 = parseFloat(document.getElementById('sayi2').value);
        const islem = document.getElementById('islem').value;

        if (isNaN(sayi1) || isNaN(sayi2)) {
            alert("Lütfen geçerli sayılar giriniz.");
            return;
        }

        let hesaplananSonuc;
        let islemSembolu;

        switch(islem) {
            case 'topla':
                hesaplananSonuc = sayi1 + sayi2;
                islemSembolu = '+';
                break;
            case 'cikar':
                hesaplananSonuc = sayi1 - sayi2;
                islemSembolu = '-';
                break;
            case 'carp':
                hesaplananSonuc = sayi1 * sayi2;
                islemSembolu = '×';
                break;
            case 'bol':
                if (sayi2 === 0) {
                    alert("Sıfıra bölme işlemi yapılamaz!");
                    return;
                }
                hesaplananSonuc = sayi1 / sayi2;
                islemSembolu = '÷';
                break;
            default:
                alert("Geçersiz işlem seçildi.");
                return;
        }

        sonuc.textContent = `${sayi1} ${islemSembolu} ${sayi2} = ${hesaplananSonuc}`;
        sonucAlani.style.display = 'block';

        sonucAlani.scrollIntoView({ behavior: 'smooth' });
    });
});