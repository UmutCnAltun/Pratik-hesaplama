document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('gecikmeFaiziForm');
    const sonucAlani = document.getElementById('sonucAlani');
    const gecikmeFaiziSpan = document.getElementById('gecikmeFaizi');
    const toplamBorcSpan = document.getElementById('toplamBorc');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const borcTutari = parseFloat(document.getElementById('borcTutari').value);
        const gecikmeGun = parseInt(document.getElementById('gecikmeGun').value);
        const faizOrani = parseFloat(document.getElementById('faizOrani').value) / 100;
        
        if (isNaN(borcTutari) || isNaN(gecikmeGun) || isNaN(faizOrani) || borcTutari <= 0 || gecikmeGun <= 0 || faizOrani < 0) {
            alert("Geçerli değerler giriniz.");
            return;
        }
        
        const gecikmeFaizi = borcTutari * faizOrani * (gecikmeGun / 365);
        const toplamBorc = borcTutari + gecikmeFaizi;
        
        gecikmeFaiziSpan.textContent = gecikmeFaizi.toFixed(2) + ' TL';
        toplamBorcSpan.textContent = toplamBorc.toFixed(2) + ' TL';
        sonucAlani.style.display = 'block';
    });
});