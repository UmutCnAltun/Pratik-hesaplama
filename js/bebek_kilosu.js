document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('bebekKiloForm');
    const sonucAlani = document.getElementById('sonucAlani');
    const beklenenKiloSpan = document.getElementById('beklenenKilo');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const dogumKilo = parseFloat(document.getElementById('dogumKilo').value);
        const ay = parseInt(document.getElementById('ay').value);
        const cinsiyet = document.getElementById('cinsiyet').value;
        
        if (isNaN(dogumKilo) || isNaN(ay) || dogumKilo <= 0 || ay <= 0 || !cinsiyet) {
            alert("Geçerli değerler giriniz.");
            return;
        }
        
        const aylikArtis = cinsiyet === 'erkek' ? 0.6 : 0.55; 
        const beklenenKilo = dogumKilo + (aylikArtis * ay);
        
        beklenenKiloSpan.textContent = beklenenKilo.toFixed(1) + ' kg';
        sonucAlani.style.display = 'block';
    });
});