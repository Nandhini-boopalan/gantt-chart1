function updateGrid() {
    var percentage = document.getElementById('percentage').value;
    var gridItems = document.querySelectorAll('.grid div');

    // Remove green background from all columns
    gridItems.forEach(item => item.classList.remove('green'));

    // Apply green background based on the selected percentage
    if (percentage === '25%') {
        gridItems[0].classList.add('green');
    } else if (percentage === '50%') {
        gridItems[0].classList.add('green');
        gridItems[1].classList.add('green');
    } else if (percentage === '75%') {
        gridItems[0].classList.add('green');
        gridItems[1].classList.add('green');
        gridItems[2].classList.add('green');
    } else if (percentage === '100%') {
        gridItems.forEach(item => item.classList.add('green'));
    }
}
function updateProgress() {
    const input = document.getElementById('progress-input').value;
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    
    let percentage = parseInt(input);

    if (isNaN(percentage) || percentage < 0 || percentage > 100) {
        percentage = 0; // Reset to 0% if input is invalid
    }

    progressBar.style.width = percentage + '%';
    progressText.textContent = percentage + '%';
}