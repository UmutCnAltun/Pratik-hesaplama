document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('yagOraniForm');
    const sonucAlani = document.getElementById('sonucAlani');
    const yagOraniSpan = document.getElementById('yagOrani');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const boy = parseFloat(document.getElementById('boy').value);
        const kilo = parseFloat(document.getElementById('kilo').value);
        const yas = parseInt(document.getElementById('yas').value);
        const cinsiyet = document.getElementById('cinsiyet').value;
        
        if (isNaN(boy) || isNaN(kilo) || isNaN(yas) || boy <= 0 || kilo <= 0 || yas <= 0 || !cinsiyet) {
            alert("Geçerli değerler giriniz.");
            return;
        }
        
        const bmi = kilo / ((boy / 100) ** 2);
        let yagOrani = 0;
        if (cinsiyet === 'erkek') {
            yagOrani = (1.20 * bmi) + (0.23 * yas) - 16.2;
        } else {
            yagOrani = (1.20 * bmi) + (0.23 * yas) - 5.4;
        }
        
        yagOraniSpan.textContent = Math.max(0, yagOrani).toFixed(1) + ' %';
        sonucAlani.style.display = 'block';
    });
});