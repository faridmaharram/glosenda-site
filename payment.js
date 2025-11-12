document.getElementById('pay-btn').addEventListener('click', function() {
    const recipient = document.getElementById('recipient').value.trim();
    const recipientCard = document.getElementById('recipientCard').value.trim();
    const cardNumber = document.getElementById('cardNumber').value.trim();
    const expiry = document.getElementById('expiry').value.trim();
    const cvc = document.getElementById('cvc').value.trim();
    const cardName = document.getElementById('cardName').value.trim();
    const amount = parseFloat(document.getElementById('amount').value);
    const currency = document.getElementById('currency').value;
    const statusEl = document.getElementById('status');

    if(!recipient || !recipientCard || !cardNumber || !expiry || !cvc || !cardName || !amount || amount <= 0){
        statusEl.style.color = 'red';
        statusEl.textContent = 'Lütfen tüm alanları doğru doldurun.';
        return;
    }

    statusEl.style.color = 'green';
    statusEl.textContent = `${amount.toLocaleString()} ${currency.toUpperCase()} başarıyla gönderildi!`;

    // Form temizleme
    document.getElementById('recipient').value = '';
    document.getElementById('recipientCard').value = '';
    document.getElementById('cardNumber').value = '';
    document.getElementById('expiry').value = '';
    document.getElementById('cvc').value = '';
    document.getElementById('cardName').value = '';
    document.getElementById('amount').value = '';
});

document.getElementById('pay-btn').addEventListener('click', function() {
    alert("Ödeme işlemi çok yakında aktif olacak!");
});

