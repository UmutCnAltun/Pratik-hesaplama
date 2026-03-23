document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('kareKokForm');
    const sonucAlani = document.getElementById('sonucAlani');
    const sonuc = document.getElementById('sonuc');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const sayi = parseFloat(document.getElementById('sayi').value);
        const ondalikBasamak = parseInt(document.getElementById('ondalikBasamak').value) || 2;

        if (isNaN(sayi)) {
            alert("Lütfen geçerli bir sayı giriniz.");
            return;
        }

        if (sayi < 0) {
            alert("Negatif sayıların karekökü alınamaz!");
            return;
        }

        const hesaplananSonuc = Math.sqrt(sayi);
        const yuvarlanmisSonuc = Number(hesaplananSonuc.toFixed(ondalikBasamak));

        sonuc.textContent = `√${sayi} = ${yuvarlanmisSonuc}`;
        sonucAlani.style.display = 'block';

        sonucAlani.scrollIntoView({ behavior: 'smooth' });
    });
});