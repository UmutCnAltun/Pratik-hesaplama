document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('adetGunuForm');
    const sonAdetTarihiInput = document.getElementById('sonAdetTarihi'); 
    const donguSuresiInput = document.getElementById('donguSuresi');     
    const sonucAlani = document.getElementById('sonucAlani');           
    const sonrakiAdetSpan = document.getElementById('sonrakiAdet');
    const ovulasyonTarihiSpan = document.getElementById('ovulasyonTarihi');
    const dogurganlikPenceresiSpan = document.getElementById('dogurganlikPenceresi');

    if (!form) return;
    if (!sonAdetTarihiInput) {
        console.error("sonAdetTarihi input alanı bulunamadı. HTML dosyasını kontrol edin.");
        return;
    }
    if (!donguSuresiInput) {
        console.error("donguSuresi input alanı bulunamadı. HTML dosyasını kontrol edin.");
        return;
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const sonAdetTarihiStr = sonAdetTarihiInput.value;
        const donguSuresi = parseInt(donguSuresiInput.value); 

        if (!sonAdetTarihiStr || isNaN(donguSuresi) || donguSuresi < 21 || donguSuresi > 45) {
            alert("Lütfen geçerli bir Son Adet Başlangıç Tarihi giriniz ve Döngü Sürenizin 21-45 gün arasında olduğundan emin olunuz.");
            sonucAlani.style.display = 'none';
            return;
        }

        const sonAdetTarihi = new Date(sonAdetTarihiStr);
        const sonrakiAdetTarihi = new Date(sonAdetTarihi);
        sonrakiAdetTarihi.setDate(sonAdetTarihi.getDate() + donguSuresi);
        const ovulasyonTarihi = new Date(sonrakiAdetTarihi);
        ovulasyonTarihi.setDate(sonrakiAdetTarihi.getDate() - 14);
        const pencereBaslangic = new Date(ovulasyonTarihi);
        pencereBaslangic.setDate(ovulasyonTarihi.getDate() - 5);
        const pencereBitis = new Date(ovulasyonTarihi);
        pencereBitis.setDate(ovulasyonTarihi.getDate() + 1); 

        const formatDate = (date) => {
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0'); 
            const year = date.getFullYear();
            return `${day}.${month}.${year}`;
        }

        sonrakiAdetSpan.textContent = formatDate(sonrakiAdetTarihi);
        ovulasyonTarihiSpan.textContent = formatDate(ovulasyonTarihi);
        dogurganlikPenceresiSpan.textContent = `${formatDate(pencereBaslangic)} - ${formatDate(pencereBitis)}`;
        
        sonucAlani.style.display = 'block';
    });

    form.addEventListener('reset', () => {
        setTimeout(() => {
            if(sonucAlani) {
                sonucAlani.style.display = 'none';
            }
        }, 50); 
    });
});