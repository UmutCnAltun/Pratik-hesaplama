document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('yasForm');
    const sonucAlani = document.getElementById('sonucAlani');
    const sonuc = document.getElementById('sonuc');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const dogumTarihi = new Date(document.getElementById('dogumTarihi').value);
        const hesaplamaTarihiInput = document.getElementById('hesaplamaTarihi').value;
        const hesaplamaTarihi = hesaplamaTarihiInput ? new Date(hesaplamaTarihiInput) : new Date();

        if (dogumTarihi > hesaplamaTarihi) {
            alert("Doğum tarihi hesaplama tarihinden sonra olamaz!");
            return;
        }

        let yil = hesaplamaTarihi.getFullYear() - dogumTarihi.getFullYear();
        let ay = hesaplamaTarihi.getMonth() - dogumTarihi.getMonth();
        let gun = hesaplamaTarihi.getDate() - dogumTarihi.getDate();

        if (gun < 0) {
            ay--;
            const sonAy = new Date(hesaplamaTarihi.getFullYear(), hesaplamaTarihi.getMonth(), 0);
            gun += sonAy.getDate();
        }

        if (ay < 0) {
            yil--;
            ay += 12;
        }

        const toplamGun = Math.floor((hesaplamaTarihi - dogumTarihi) / (1000 * 60 * 60 * 24));

        sonuc.innerHTML = `
            <div style="text-align: center;">
                <div style="font-size: 2em; margin-bottom: 10px;">${yil} yıl ${ay} ay ${gun} gün</div>
                <div style="color: #666;">Toplam: ${toplamGun} gün</div>
            </div>
        `;

        sonucAlani.style.display = 'block';
        sonucAlani.scrollIntoView({ behavior: 'smooth' });
    });
});