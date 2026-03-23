document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('sinavPuaniForm');
    const sonucAlani = document.getElementById('sonucAlani');
    const netDogruSpan = document.getElementById('netDogru');
    const basariYuzdesiSpan = document.getElementById('basariYuzdesi');
    const puanSpan = document.getElementById('puan');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const dogruSayisi = parseInt(document.getElementById('dogruSayisi').value);
        const yanlisSayisi = parseInt(document.getElementById('yanlisSayisi').value);
        const bosSayisi = parseInt(document.getElementById('bosSayisi').value) || 0;
        const toplamSoru = parseInt(document.getElementById('toplamSoru').value);

        if (isNaN(dogruSayisi) || isNaN(yanlisSayisi) || isNaN(toplamSoru) ||
            dogruSayisi < 0 || yanlisSayisi < 0 || bosSayisi < 0 || toplamSoru <= 0) {
            alert("Geçerli değerler giriniz.");
            return;
        }

        if (dogruSayisi + yanlisSayisi + bosSayisi > toplamSoru) {
            alert("Doğru, yanlış ve boş sayıların toplamı toplam soru sayısından fazla olamaz.");
            return;
        }

        const netDogru = dogruSayisi - (yanlisSayisi / 4);

        const basariYuzdesi = (netDogru / toplamSoru) * 100;

        const puan = (netDogru / toplamSoru) * 100;

        netDogruSpan.textContent = netDogru.toFixed(2);
        basariYuzdesiSpan.textContent = basariYuzdesi.toFixed(1) + '%';
        puanSpan.textContent = puan.toFixed(1);
        sonucAlani.style.display = 'block';
    });
});