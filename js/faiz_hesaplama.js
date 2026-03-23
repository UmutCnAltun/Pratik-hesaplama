document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('faizForm');
    const sonucAlani = document.getElementById('sonucAlani');
    const faizTutariSpan = document.getElementById('faizTutari');
    const toplamTutarSpan = document.getElementById('toplamTutar');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const anapara = parseFloat(document.getElementById('anapara').value);
        const faizOrani = parseFloat(document.getElementById('faizOrani').value) / 100;
        const sure = parseInt(document.getElementById('sure').value);
        
        if (isNaN(anapara) || isNaN(faizOrani) || isNaN(sure) || anapara <= 0 || faizOrani < 0 || sure <= 0) {
            alert("Geçerli değerler giriniz.");
            return;
        }
        
        const faizTutari = anapara * faizOrani * sure;
        const toplamTutar = anapara + faizTutari;
        
        faizTutariSpan.textContent = faizTutari.toFixed(2) 
        toplamTutarSpan.textContent = toplamTutar.toFixed(2) 
        sonucAlani.style.display = 'block';
    });
});