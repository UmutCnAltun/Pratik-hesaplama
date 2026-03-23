document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('tarihFarkiForm');
    const sonucAlani = document.getElementById('sonucAlani');
    const sonuc = document.getElementById('sonuc');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const baslangicTarihi = new Date(document.getElementById('baslangicTarihi').value);
        const bitisTarihi = new Date(document.getElementById('bitisTarihi').value);

        if (baslangicTarihi > bitisTarihi) {
            alert("Başlangıç tarihi bitiş tarihinden sonra olamaz!");
            return;
        }

        const farkMs = bitisTarihi - baslangicTarihi;
        const farkGun = Math.floor(farkMs / (1000 * 60 * 60 * 24));

        let yil = bitisTarihi.getFullYear() - baslangicTarihi.getFullYear();
        let ay = bitisTarihi.getMonth() - baslangicTarihi.getMonth();
        let gun = bitisTarihi.getDate() - baslangicTarihi.getDate();

        if (gun < 0) {
            ay--;
            const sonAy = new Date(bitisTarihi.getFullYear(), bitisTarihi.getMonth(), 0);
            gun += sonAy.getDate();
        }

        if (ay < 0) {
            yil--;
            ay += 12;
        }

        sonuc.innerHTML = `
            <div style="text-align: center;">
                <div style="font-size: 1.8em; margin-bottom: 10px;">${yil} yıl ${ay} ay ${gun} gün</div>
                <div style="color: #666;">Toplam: ${farkGun} gün</div>
                <div style="color: #666; margin-top: 10px;">
                    ${Math.floor(farkGun / 365.25)} yıl, ${Math.floor((farkGun % 365.25) / 30.44)} ay, ${Math.floor(farkGun % 30.44)} gün (yaklaşık)
                </div>
            </div>
        `;

        sonucAlani.style.display = 'block';
        sonucAlani.scrollIntoView({ behavior: 'smooth' });
    });
});