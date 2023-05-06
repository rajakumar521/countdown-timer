

document.querySelector('#countdown').addEventListener('change', () => {
    let input = document.getElementById('countdown').value;

    setInterval(updateCount, 1000)
    function updateCount() {
        document.getElementById("countVal").innerHTML = parseInt(input);
        if (input > 0) {
            input--
        }


    }
}
)


