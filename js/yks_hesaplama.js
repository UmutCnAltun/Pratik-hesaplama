document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('yksForm');
    const sinavTuruSelect = document.getElementById('sinavTuru');
    const tytAlanlari = document.getElementById('tytAlanlari');
    const aytAlanlari = document.getElementById('aytAlanlari');
    const sonucAlani = document.getElementById('sonucAlani');
    const puanSonuclari = document.getElementById('puanSonuclari');

    sinavTuruSelect.addEventListener('change', function() {
        const sinavTuru = this.value;

        if (sinavTuru === 'tyt') {
            tytAlanlari.style.display = 'block';
            aytAlanlari.style.display = 'none';
        } else if (sinavTuru === 'ayt') {
            tytAlanlari.style.display = 'none';
            aytAlanlari.style.display = 'block';
        } else {
            tytAlanlari.style.display = 'none';
            aytAlanlari.style.display = 'none';
        }
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const sinavTuru = sinavTuruSelect.value;
        const diplomaNotu = parseFloat(document.getElementById('diplomaNotu').value) || 0;

        if (!sinavTuru) {
            alert("Lütfen sınav türünü seçiniz.");
            return;
        }

        let puanlar = {};

        if (sinavTuru === 'tyt') {
            const tytTurkce = parseDogruYanlis(document.getElementById('tytTurkce').value);
            const tytSosyal = parseDogruYanlis(document.getElementById('tytSosyal').value);
            const tytMatematik = parseDogruYanlis(document.getElementById('tytMatematik').value);
            const tytFen = parseDogruYanlis(document.getElementById('tytFen').value);

            if (!tytTurkce || !tytSosyal || !tytMatematik || !tytFen) {
                alert("TYT alanları için doğru/yanlış sayılarını giriniz (örn: 35/5).");
                return;
            }

            const turkceHam = (tytTurkce.dogru - tytTurkce.yanlis / 4) * 3.3;
            const sosyalHam = (tytSosyal.dogru - tytSosyal.yanlis / 4) * 3.4;
            const matematikHam = (tytMatematik.dogru - tytMatematik.yanlis / 4) * 3.3;
            const fenHam = (tytFen.dogru - tytFen.yanlis / 4) * 3.0;

            const toplamHam = turkceHam + sosyalHam + matematikHam + fenHam;

            const yerlestirmePuani = (toplamHam * 0.4) + (diplomaNotu * 0.6 * 5) + 100;

            puanlar = {
                'TYT': yerlestirmePuani.toFixed(3),
                'TYT-Türkçe Ham': turkceHam.toFixed(2),
                'TYT-Sosyal Ham': sosyalHam.toFixed(2),
                'TYT-Matematik Ham': matematikHam.toFixed(2),
                'TYT-Fen Ham': fenHam.toFixed(2),
                'Toplam Ham Puan': toplamHam.toFixed(2)
            };

        } else if (sinavTuru === 'ayt') {
            const aytTurkce = parseDogruYanlis(document.getElementById('aytTurkce').value);
            const aytTarih1 = parseDogruYanlis(document.getElementById('aytTarih1').value);
            const aytCografya1 = parseDogruYanlis(document.getElementById('aytCografya1').value);
            const aytTarih2 = parseDogruYanlis(document.getElementById('aytTarih2').value);
            const aytCografya2 = parseDogruYanlis(document.getElementById('aytCografya2').value);
            const aytFelsefe = parseDogruYanlis(document.getElementById('aytFelsefe').value);
            const aytDin = parseDogruYanlis(document.getElementById('aytDin').value);
            const aytMatematik = parseDogruYanlis(document.getElementById('aytMatematik').value);
            const aytFizik = parseDogruYanlis(document.getElementById('aytFizik').value);
            const aytKimya = parseDogruYanlis(document.getElementById('aytKimya').value);
            const aytBiyoloji = parseDogruYanlis(document.getElementById('aytBiyoloji').value);

            const sayTurkceHam = aytTurkce ? (aytTurkce.dogru - aytTurkce.yanlis / 4) * 3.0 : 0;
            const sayMatematikHam = aytMatematik ? (aytMatematik.dogru - aytMatematik.yanlis / 4) * 3.0 : 0;
            const sayFizikHam = aytFizik ? (aytFizik.dogru - aytFizik.yanlis / 4) * 2.8 : 0;
            const sayKimyaHam = aytKimya ? (aytKimya.dogru - aytKimya.yanlis / 4) * 3.1 : 0;
            const sayBiyolojiHam = aytBiyoloji ? (aytBiyoloji.dogru - aytBiyoloji.yanlis / 4) * 3.0 : 0;

            const sayToplamHam = sayTurkceHam + sayMatematikHam + sayFizikHam + sayKimyaHam + sayBiyolojiHam;
            const sayYerlestirme = (sayToplamHam * 0.4) + (diplomaNotu * 0.6 * 5) + 100;

            const sozTurkceHam = aytTurkce ? (aytTurkce.dogru - aytTurkce.yanlis / 4) * 3.0 : 0;
            const sozTarih1Ham = aytTarih1 ? (aytTarih1.dogru - aytTarih1.yanlis / 4) * 2.8 : 0;
            const sozCografya1Ham = aytCografya1 ? (aytCografya1.dogru - aytCografya1.yanlis / 4) * 3.3 : 0;
            const sozTarih2Ham = aytTarih2 ? (aytTarih2.dogru - aytTarih2.yanlis / 4) * 2.9 : 0;
            const sozCografya2Ham = aytCografya2 ? (aytCografya2.dogru - aytCografya2.yanlis / 4) * 3.3 : 0;
            const sozFelsefeHam = aytFelsefe ? (aytFelsefe.dogru - aytFelsefe.yanlis / 4) * 3.0 : 0;
            const sozDinHam = aytDin ? (aytDin.dogru - aytDin.yanlis / 4) * 3.0 : 0;

            const sozToplamHam = sozTurkceHam + sozTarih1Ham + sozCografya1Ham + sozTarih2Ham + sozCografya2Ham + sozFelsefeHam + sozDinHam;
            const sozYerlestirme = (sozToplamHam * 0.4) + (diplomaNotu * 0.6 * 5) + 100;

            const eaTurkceHam = aytTurkce ? (aytTurkce.dogru - aytTurkce.yanlis / 4) * 3.0 : 0;
            const eaMatematikHam = aytMatematik ? (aytMatematik.dogru - aytMatematik.yanlis / 4) * 3.0 : 0;
            const eaTarih1Ham = aytTarih1 ? (aytTarih1.dogru - aytTarih1.yanlis / 4) * 2.8 : 0;
            const eaCografya1Ham = aytCografya1 ? (aytCografya1.dogru - aytCografya1.yanlis / 4) * 3.3 : 0;

            const eaToplamHam = eaTurkceHam + eaMatematikHam + eaTarih1Ham + eaCografya1Ham;
            const eaYerlestirme = (eaToplamHam * 0.4) + (diplomaNotu * 0.6 * 5) + 100;

            puanlar = {
                'SAY (Sayısal)': sayYerlestirme.toFixed(3),
                'SÖZ (Sözel)': sozYerlestirme.toFixed(3),
                'EA (Eşit Ağırlık)': eaYerlestirme.toFixed(3),
                'SAY Ham Puan': sayToplamHam.toFixed(2),
                'SÖZ Ham Puan': sozToplamHam.toFixed(2),
                'EA Ham Puan': eaToplamHam.toFixed(2)
            };
        }

        puanSonuclari.innerHTML = '';
        for (const [puanTuru, puan] of Object.entries(puanlar)) {
            const sonucDiv = document.createElement('p');
            sonucDiv.innerHTML = `<strong>${puanTuru}:</strong> ${puan}`;
            puanSonuclari.appendChild(sonucDiv);
        }

        sonucAlani.style.display = 'block';
    });

    function parseDogruYanlis(value) {
        if (!value || !value.includes('/')) return null;

        const parts = value.split('/');
        const dogru = parseInt(parts[0]);
        const yanlis = parseInt(parts[1]);

        if (isNaN(dogru) || isNaN(yanlis)) return null;

        return { dogru, yanlis };
    }
});