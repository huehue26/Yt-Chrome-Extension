document.getElementById('font-size').addEventListener('change', () => {
    document.querySelector("html").style.fontSize = document.getElementById('font-size').value
    console.log(document.getElementById('font-size').value)
})