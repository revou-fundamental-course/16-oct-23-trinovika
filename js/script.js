function replaceName() {
    let name = prompt("Siapakah nama anda?","");
    document.getElementById("name").innerHTML = name
}

document.getElementById('ChangeName').addEventListener("click", function() {
    replaceName()
})


function validateForm(){
    /*const name = document.forms["message-form"]["nama"].value;
    const tanggalLahir = document.forms["message-form"]["date"].value;
    const kelamin = document.forms["message-form"]["gender"].value;
    const pesan = document.forms["message-form"]["pesan"].value;*/

    const nama = document.getElementById('nama').value;
    const tanggalLahir = document.getElementById('date').value; // Corrected the selector
    const jenisKelamin = document.querySelector('input[name="gender"]:checked')
    const pesan = document.getElementById('Pesan').value;
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let currentDate = `${day}-${month}-${year}`;

    if(nama == "" || tanggalLahir =="" || jenisKelamin =="" || pesan ==""){
        alert("Tidak boleh ada yang kosong");
        return false;
    }

    document.getElementById('time-result').innerHTML = currentDate;
    document.getElementById('nama-result').innerHTML = nama;
    document.getElementById('tanggallahir-result').innerHTML = tanggalLahir;
    document.getElementById('jeniskelamin-result').innerHTML = jenisKelamin;
    document.getElementById('pesan-result').innerHTML = pesan;

    return false;
}

document.getElementById('submit').addEventListener('click', function () {
    validateForm();
});