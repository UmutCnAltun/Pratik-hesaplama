document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('dovizForm');
    const sonucAlani = document.getElementById('sonucAlani');
    const tlKarsilikSpan = document.getElementById('tlKarsilik');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const miktar = parseFloat(document.getElementById('miktar').value);
        const kur = parseFloat(document.getElementById('kur').value);
        
        if (isNaN(miktar) || isNaN(kur) || miktar <= 0 || kur <= 0) {
            alert("Geçerli değerler giriniz.");
            return;
        }
        
        const tlKarsilik = miktar * kur;
        
        tlKarsilikSpan.textContent = tlKarsilik.toFixed(2) ;
        sonucAlani.style.display = 'block';
    });
});