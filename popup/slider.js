const slider = document.getElementById('slider')
const output = document.getElementById('slider-value')

slider.addEventListener('input', function () {
    output.textContent = this.value
    browser.tabs.query({ active: true, currentWindow: true }).then(tabs => {
        const activeTab = tabs[0]
        browser.tabs.sendMessage(activeTab.id, { data: this.value })
    });
})