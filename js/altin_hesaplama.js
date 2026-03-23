document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('altinForm');
    const sonucAlani = document.getElementById('sonucAlani');
    const toplamDegerSpan = document.getElementById('toplamDeger');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const gram = parseFloat(document.getElementById('altinGram').value);
        const fiyat = parseFloat(document.getElementById('altinFiyati').value);
        
        if (isNaN(gram) || isNaN(fiyat) || gram <= 0 || fiyat <= 0) {
            alert("Geçerli değerler giriniz.");
            return;
        }
        
        const toplamDeger = gram * fiyat;
        
        toplamDegerSpan.textContent = toplamDeger.toFixed(2);
        sonucAlani.style.display = 'block';
    });
});