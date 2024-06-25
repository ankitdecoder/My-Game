const resultClass = game.isCorrect ? 'correct' : 'incorrect';
summaryHTML += `
    <div class="summary-item ${resultClass}">
        ...
    </div>
`;
function showFirecrackerEffect() {
    const firecrackerContainer = document.getElementById('firecracker-container');
    firecrackerContainer.style.display = 'flex';
    setTimeout(() => {
        firecrackerContainer.style.display = 'none';
    }, 2000); // Display firecrackers for 2 seconds
}
