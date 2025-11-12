let balance = 12450; // Başlangıç bakiye
let totalTransfers = 0;

const balanceEl = document.getElementById('balance');
const totalTransfersEl = document.getElementById('total-transfers');
const lastTransferEl = document.getElementById('last-transfer');
const historyTableBody = document.querySelector('#history-table tbody');

document.getElementById('send-btn').addEventListener('click', function() {
    const recipient = document.getElementById('recipient').value.trim();
    const account = document.getElementById('account').value.trim();
    const amount = parseFloat(document.getElementById('amount').value);
    const currency = document.getElementById('currency').value;

    if(!recipient || !account || !amount || amount <= 0) {
        alert('Lütfen tüm alanları doğru doldurun.');
        return;
    }

    if(amount > balance) {
        alert('Yetersiz bakiye!');
        return;
    }

    // Bakiye güncelle
    balance -= amount;
    totalTransfers +=1;

    balanceEl.textContent = `₺ ${balance.toLocaleString()}`;
    totalTransfersEl.textContent = `${totalTransfers} İşlem`;
    lastTransferEl.textContent = `${amount.toLocaleString()} ${currency.toUpperCase()} – ${new Date().toLocaleDateString()}`;

    // Transfer geçmişine ekle
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${new Date().toLocaleDateString()}</td>
        <td>${recipient}</td>
        <td>${amount.toLocaleString()}</td>
        <td>${currency.toUpperCase()}</td>
        <td>Tamamlandı</td>
    `;
    historyTableBody.prepend(newRow);

    // Formu temizle
    document.getElementById('recipient').value = '';
    document.getElementById('account').value = '';
    document.getElementById('amount').value = '';
});
