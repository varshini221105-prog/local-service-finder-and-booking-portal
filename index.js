function handleBooking(action) {
    const statusBadge = document.getElementById('statusBadge');
    const actionButtons = document.getElementById('actionButtons');
    const logBox = document.getElementById('logBox');
    const bookingCode = document.getElementById('bookingCode').innerText;

    // Reset status classes
    statusBadge.className = 'status-badge';

    if (action === 'confirm') {
        // Change UI to Confirmed State
        statusBadge.innerText = 'Confirmed';
        statusBadge.classList.add('status-confirmed');
        
        // Show success alert
        logBox.innerText = `Success: Booking ${bookingCode} has been accepted.`;
        logBox.style.backgroundColor = '#dcfce7';
        logBox.style.color = '#16a34a';
    } else if (action === 'reject') {
        // Change UI to Rejected State
        statusBadge.innerText = 'Rejected';
        statusBadge.classList.add('status-rejected');
        
        // Show rejection alert
        logBox.innerText = `Notice: Booking ${bookingCode} has been declined.`;
        logBox.style.backgroundColor = '#fee2e2';
        logBox.style.color = '#dc2626';
    }

    // Hide the buttons and display the final alert message box
    actionButtons.classList.add('hidden');
    logBox.classList.remove('hidden');
}
