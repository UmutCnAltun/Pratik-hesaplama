document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('haftaForm');
    const sonucAlani = document.getElementById('sonucAlani');
    const sonuc = document.getElementById('sonuc');

    const donusumOranlari = {
        gun: 1,
        hafta: 7,
        ay: 30.44, 
        yil: 365.25 
    };

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const baslangicBirimi = document.getElementById('baslangicBirimi').value;
        const miktar = parseFloat(document.getElementById('miktar').value);
        const hedefBirim = document.getElementById('hedefBirim').value;

        if (isNaN(miktar) || miktar <= 0) {
            alert("Lütfen geçerli bir miktar giriniz.");
            return;
        }

        if (baslangicBirimi === hedefBirim) {
            alert("Başlangıç ve hedef birim aynı olamaz!");
            return;
        }

        const gunCinsinden = miktar * donusumOranlari[baslangicBirimi];
        const sonucMiktar = gunCinsinden / donusumOranlari[hedefBirim];

        const birimIsimleri = {
            gun: 'gün',
            hafta: 'hafta',
            ay: 'ay',
            yil: 'yıl'
        };

        const ondalikBasamak = hedefBirim === 'gun' ? 0 : 1;
        const yuvarlanmisSonuc = Number(sonucMiktar.toFixed(ondalikBasamak));

        sonuc.innerHTML = `
            <div style="text-align: center;">
                <div style="font-size: 2em; margin-bottom: 10px;">${yuvarlanmisSonuc} ${birimIsimleri[hedefBirim]}</div>
                <div style="color: #666;">${miktar} ${birimIsimleri[baslangicBirimi]} = ${yuvarlanmisSonuc} ${birimIsimleri[hedefBirim]}</div>
            </div>
        `;

        sonucAlani.style.display = 'block';
        sonucAlani.scrollIntoView({ behavior: 'smooth' });
    });
});