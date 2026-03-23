document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('ekTaksitForm');
    const sonucAlani = document.getElementById('sonucAlani');
    const aylikTaksitSpan = document.getElementById('aylikTaksit');
    const toplamMaliyetSpan = document.getElementById('toplamMaliyet');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const alisverisTutari = parseFloat(document.getElementById('alisverisTutari').value);
        const taksitSayisi = parseInt(document.getElementById('taksitSayisi').value);
        const faizOrani = parseFloat(document.getElementById('faizOrani').value) / 100;
        
        if (isNaN(alisverisTutari) || isNaN(taksitSayisi) || isNaN(faizOrani) || alisverisTutari <= 0 || taksitSayisi <= 0 || faizOrani < 0) {
            alert("Geçerli değerler giriniz.");
            return;
        }
        
        const toplamMaliyet = alisverisTutari * (1 + faizOrani);
        const aylikTaksit = toplamMaliyet / taksitSayisi;
        
        aylikTaksitSpan.textContent = aylikTaksit.toFixed(2) 
        toplamMaliyetSpan.textContent = toplamMaliyet.toFixed(2) 
        sonucAlani.style.display = 'block';
    });
});