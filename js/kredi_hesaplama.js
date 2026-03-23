document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('krediHesaplamaForm');
    const sonucAlani = document.getElementById('sonucAlani');
    const aylikTaksitSpan = document.getElementById('aylikTaksit');
    const toplamOdemeSpan = document.getElementById('toplamOdeme');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const P = parseFloat(document.getElementById('krediTutari').value);
        const n = parseInt(document.getElementById('vade').value);
        const r = parseFloat(document.getElementById('faizOrani').value) / 100;
        
        if (isNaN(P) || isNaN(n) || isNaN(r) || P <= 0 || n <= 0 || r < 0) {
            alert("Geçerli değerler giriniz.");
            return;
        }
        
        const aylikTaksit = P * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
        const toplamOdeme = aylikTaksit * n;
        
        aylikTaksitSpan.textContent = aylikTaksit.toFixed(2) 
        toplamOdemeSpan.textContent = toplamOdeme.toFixed(2) 
        sonucAlani.style.display = 'block';
    });
});