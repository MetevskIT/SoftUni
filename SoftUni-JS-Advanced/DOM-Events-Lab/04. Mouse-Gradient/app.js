function attachGradientEvents() {
    let hoverArea = document.getElementById('gradient');
    let resultArea = document.getElementById('result');
    let result;
    hoverArea.addEventListener('mousemove', move);
    function move(e) {
        result = Math.floor((e.offsetX / hoverArea.clientWidth) * 100);
        resultArea.textContent = `${result}%`;
    }
}