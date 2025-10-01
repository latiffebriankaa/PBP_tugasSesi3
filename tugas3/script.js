// 1. Membuat array berisi 5 nama mahasiswa
let mahasiswa = ["dwinta", "latip", "putri", "rizy", "reza"];

console.log("Daftar awal mahasiswa:");
for (let i = 0; i < mahasiswa.length; i++) {
  console.log(mahasiswa[i]);
}

// 2. Menambahkan 1 nama baru menggunakan push()
mahasiswa.push("cihuy");

// 3. Menghapus nama pertama menggunakan shift()
mahasiswa.shift();

// 4. Menampilkan kembali isi array setelah dimodifikasi
console.log("\nDaftar mahasiswa setelah dimodifikasi:");
for (let i = 0; i < mahasiswa.length; i++) {
  console.log(mahasiswa[i]);
}