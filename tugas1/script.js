function konversiNilai() {
    const nilai = parseInt(document.getElementById("nilai").value);
    let huruf = "";
    switch (true) {
        case nilai >= 80 && nilai <= 100 :
            huruf = "A"
            alert(`${nilai} di konversi menjadi grade ${huruf}`)
            break;
        case nilai >= 70 && nilai <= 79:
            huruf = "B"
            alert(`${nilai} di konversi menjadi grade ${huruf}`)
            break;
        case nilai >= 60 && nilai <= 69:
            huruf = "C"
            alert(`${nilai} di konversi menjadi grade ${huruf}`)
            break;
        case nilai >= 50 && nilai <= 59 :
            huruf = "D"
            alert(`${nilai} di konversi menjadi grade ${huruf}`)
            break;
        case nilai >=0 && nilai <50:
            huruf = "E"
            alert(`${nilai} di konversi menjadi grade ${huruf}`)
            break;
        default:
            huruf = "inputan salah"
            alert("yah maaf masukan input lagi yuk")
            break
    }
    document.getElementById("hasil").textContent = `Nilai: ${nilai} = Grade: ${huruf}`;
}
