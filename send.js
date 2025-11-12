let balance = 12450; // Demo bakiye
const balanceEl = document.getElementById('demo-balance');
const statusEl = document.getElementById('status');

document.getElementById('send-btn').addEventListener('click', function() {
    const recipient = document.getElementById('recipient').value.trim();
    const account = document.getElementById('account').value.trim();
    const amount = parseFloat(document.getElementById('amount').value);
    const currency = document.getElementById('currency').value;

    if(!recipient || !account || !amount || amount <=0) {
        statusEl.style.color = 'red';
        statusEl.textContent = 'Lütfen tüm alanları doğru doldurun.';
        return;
    }

    if(amount > balance) {
        statusEl.style.color = 'red';
        statusEl.textContent = 'Yetersiz bakiye!';
        return;
    }

    balance -= amount;
    balanceEl.textContent = `₺${balance.toLocaleString()}`;
    statusEl.style.color = 'green';
    statusEl.textContent = `Başarıyla gönderildi! ${amount.toLocaleString()} ${currency.toUpperCase()} transfer edildi.`;

    document.getElementById('recipient').value = '';
    document.getElementById('account').value = '';
    document.getElementById('amount').value = '';
});
