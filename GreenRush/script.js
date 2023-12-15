function goToSubenshi() {
    location.replace("subenshi.html")
}

function goToMain() {
    location.replace('index.html')
}
function search() {
    let filter = document.getElementById('find').value.toUpperCase();
    let items = document.querySelectorAll('.listings-grid-element');

    for (let i = 0; i < items.length; i++) {
        let h5Element = items[i].querySelector('h5');
        let value = h5Element.innerHTML || h5Element.innerText || h5Element.textContent;

        if (value.toUpperCase().indexOf(filter) > -1) {
            items[i].style.display = "";
        } else {
            items[i].style.display = "none";
        }
    }
}
