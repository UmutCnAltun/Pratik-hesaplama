document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('notOrtalamasiForm');
    const dersSayisiInput = document.getElementById('dersSayisi');
    const dersInputsDiv = document.getElementById('dersInputs');
    const ekleDersBtn = document.getElementById('ekleDersBtn');
    const sonucAlani = document.getElementById('sonucAlani');
    const genelOrtalamaSpan = document.getElementById('genelOrtalama');
    const harfNotuSpan = document.getElementById('harfNotu');

    let dersSayisi = 0;

    dersSayisiInput.addEventListener('input', function() {
        dersSayisi = parseInt(this.value) || 0;
        dersInputsDiv.innerHTML = '';
        for (let i = 1; i <= dersSayisi; i++) {
            const formGroup = document.createElement('div');
            formGroup.className = 'form-group';
            formGroup.innerHTML = `
                <label for="ders${i}">Ders ${i} Notu:</label>
                <div class="input-container">
                    <input type="number" id="ders${i}" placeholder="Örn. 85" min="0" max="100" required>
                </div>
            `;
            dersInputsDiv.appendChild(formGroup);
        }
    });

    ekleDersBtn.addEventListener('click', function() {
        dersSayisi++;
        dersSayisiInput.value = dersSayisi;
        dersSayisiInput.dispatchEvent(new Event('input'));
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const notlar = [];
        for (let i = 1; i <= dersSayisi; i++) {
            const not = parseFloat(document.getElementById(`ders${i}`).value);
            if (isNaN(not) || not < 0 || not > 100) {
                alert(`Ders ${i} için geçerli bir not giriniz (0-100 arası).`);
                return;
            }
            notlar.push(not);
        }

        if (notlar.length === 0) {
            alert("En az bir ders notu giriniz.");
            return;
        }

        const toplam = notlar.reduce((sum, not) => sum + not, 0);
        const ortalama = toplam / notlar.length;

        let harfNotu = '';
        if (ortalama >= 90) harfNotu = 'AA';
        else if (ortalama >= 85) harfNotu = 'BA';
        else if (ortalama >= 80) harfNotu = 'BB';
        else if (ortalama >= 75) harfNotu = 'CB';
        else if (ortalama >= 70) harfNotu = 'CC';
        else if (ortalama >= 65) harfNotu = 'DC';
        else if (ortalama >= 60) harfNotu = 'DD';
        else if (ortalama >= 50) harfNotu = 'FD';
        else harfNotu = 'FF';

        genelOrtalamaSpan.textContent = ortalama.toFixed(2);
        harfNotuSpan.textContent = harfNotu;
        sonucAlani.style.display = 'block';
    });
});