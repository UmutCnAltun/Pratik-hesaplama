document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('birikimForm');
    const sonucAlani = document.getElementById('sonucAlani');
    const toplamBirikimSpan = document.getElementById('toplamBirikim');
    const faizKazanciSpan = document.getElementById('faizKazanci');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const aylikYatirim = parseFloat(document.getElementById('aylikYatirim').value);
        const faizOrani = parseFloat(document.getElementById('faizOrani').value) / 100 / 12; 
        const sure = parseInt(document.getElementById('sure').value) * 12; 
        
        if (isNaN(aylikYatirim) || isNaN(faizOrani) || isNaN(sure) || aylikYatirim <= 0 || faizOrani < 0 || sure <= 0) {
            alert("Geçerli değerler giriniz.");
            return;
        }
        
        let toplamBirikim = 0;
        for (let i = 1; i <= sure; i++) {
            toplamBirikim = (toplamBirikim + aylikYatirim) * (1 + faizOrani);
        }
        const toplamYatirim = aylikYatirim * sure;
        const faizKazanci = toplamBirikim - toplamYatirim;
        
        toplamBirikimSpan.textContent = toplamBirikim.toFixed(2) 
        faizKazanciSpan.textContent = faizKazanci.toFixed(2) 
        sonucAlani.style.display = 'block';
    });
});