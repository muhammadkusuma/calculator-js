// hapus nilai
function clearScreen() {
    document.getElementById("result").value = "";
}

// menampilkan nilai dari tombol
function dis(value) {
    document.getElementById("result").value += value;
}

// hasil
function calcu() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}
// pangkat 2
function pangkat2() {
    var x = document.getElementById("result").value;
    document.getElementById("result").value = Math.pow(x, 2);
}