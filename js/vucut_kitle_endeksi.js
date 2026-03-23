document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('bmiForm');
    const sonucAlani = document.getElementById('sonucAlani');
    const bmiSpan = document.getElementById('bmi');
    const durumSpan = document.getElementById('durum');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const boy = parseFloat(document.getElementById('boy').value) / 100; // cm to m
        const kilo = parseFloat(document.getElementById('kilo').value);
        
        if (isNaN(boy) || isNaN(kilo) || boy <= 0 || kilo <= 0) {
            alert("Geçerli değerler giriniz.");
            return;
        }
        
        const bmi = kilo / (boy ** 2);
        let durum = '';
        if (bmi < 18.5) durum = 'Zayıf';
        else if (bmi < 25) durum = 'Normal';
        else if (bmi < 30) durum = 'Fazla Kilolu';
        else durum = 'Obez';
        
        bmiSpan.textContent = bmi.toFixed(1);
        durumSpan.textContent = durum;
        sonucAlani.style.display = 'block';
    });
});