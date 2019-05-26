!function (global, doc) {
    var html = doc.documentElement;
    !function setFontSize() {
        var fontSize = html.clientWidth / 3.75;
        html.style.fontSize = fontSize + 'px'
    }()
    !function pageShow() {
        doc.body ?
            doc.body.style.fontSize = '16px' :
            doc.addEventListener('DOMContentLoaded', pageShow)
    }()
}(window, document)