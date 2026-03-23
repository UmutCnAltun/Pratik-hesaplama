document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('erkenKapatmaForm');
    const sonucAlani = document.getElementById('sonucAlani');
    const cezaliTutarSpan = document.getElementById('cezaliTutar');
    const toplamOdemeSpan = document.getElementById('toplamOdeme');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const krediTutari = parseFloat(document.getElementById('krediTutari').value);
        const kalanVade = parseInt(document.getElementById('kalanVade').value);
        const cezaOrani = parseFloat(document.getElementById('cezaOrani').value) / 100;
        
        if (isNaN(krediTutari) || isNaN(kalanVade) || isNaN(cezaOrani) || krediTutari <= 0 || kalanVade <= 0 || cezaOrani < 0) {
            alert("Geçerli değerler giriniz.");
            return;
        }
        
        const cezaliTutar = krediTutari * cezaOrani;
        const toplamOdeme = krediTutari + cezaliTutar;
        
        cezaliTutarSpan.textContent = cezaliTutar.toFixed(2) + ' TL';
        toplamOdemeSpan.textContent = toplamOdeme.toFixed(2) + ' TL';
        sonucAlani.style.display = 'block';
    });
});