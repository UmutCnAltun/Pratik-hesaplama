document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('krediHesaplamaForm');
    const krediTutariInput = document.getElementById('krediTutari');
    const vadeInput = document.getElementById('vade');
    const faizOraniInput = document.getElementById('aylikFaizOrani');
    const hesaplamaSekliCheckbox = document.getElementById('hesaplamaSekli');
    const sonucAlani = document.getElementById('sonucAlani');
    const aylikTaksitSpan = document.getElementById('aylikTaksit');
    const toplamOdemeSpan = document.getElementById('toplamOdeme');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const P = parseFloat(krediTutariInput.value); 
        const n = parseInt(vadeInput.value);         
        const r_percent = parseFloat(faizOraniInput.value); 
        
        if (isNaN(P) || isNaN(n) || isNaN(r_percent) || P <= 0 || n <= 0 || r_percent < 0) {
            alert("Lütfen geçerli değerler giriniz.");
            return;
        }

        const r = r_percent / 100; 
        
        let aylikTaksit = 0;
        let toplamOdeme = 0;

        if (hesaplamaSekliCheckbox.checked) {
            alert("Aylık taksit tutarına göre hesaplama özelliği henüz eklenmemiştir. Standart kredi hesaplaması yapılacaktır.");
        } 
        
        if (r === 0) {
            aylikTaksit = P / n;
            toplamOdeme = P;
        } else {
            const pay = r * Math.pow((1 + r), n);
            const payda = Math.pow((1 + r), n) - 1;
            
            aylikTaksit = P * (pay / payda);
            toplamOdeme = aylikTaksit * n;
        }

        aylikTaksitSpan.textContent = aylikTaksit.toFixed(2) + ' TL';
        toplamOdemeSpan.textContent = toplamOdeme.toFixed(2) + ' TL';
        sonucAlani.style.display = 'block';
    });

    form.addEventListener('reset', () => {
        setTimeout(() => {
            sonucAlani.style.display = 'none';
        }, 50); 
    });
});