document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('sigaraForm');
    const sonucAlani = document.getElementById('sonucAlani');
    const gunlukMaliyetSpan = document.getElementById('gunlukMaliyet');
    const aylikMaliyetSpan = document.getElementById('aylikMaliyet');
    const yillikMaliyetSpan = document.getElementById('yillikMaliyet');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const gunlukSigara = parseInt(document.getElementById('gunlukSigara').value);
        const paketFiyati = parseFloat(document.getElementById('paketFiyati').value);
        const sigaraPaket = parseInt(document.getElementById('sigaraPaket').value);
        
        if (isNaN(gunlukSigara) || isNaN(paketFiyati) || isNaN(sigaraPaket) || gunlukSigara <= 0 || paketFiyati <= 0 || sigaraPaket <= 0) {
            alert("Geçerli değerler giriniz.");
            return;
        }
        
        const gunlukMaliyet = (paketFiyati / sigaraPaket) * gunlukSigara;
        const aylikMaliyet = gunlukMaliyet * 30;
        const yillikMaliyet = gunlukMaliyet * 365;
        
        gunlukMaliyetSpan.textContent = gunlukMaliyet.toFixed(2) ;
        aylikMaliyetSpan.textContent = aylikMaliyet.toFixed(2) ;
        yillikMaliyetSpan.textContent = yillikMaliyet.toFixed(2) ;
        sonucAlani.style.display = 'block';
    });
});