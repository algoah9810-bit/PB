function tampilJudul() {
  return 'Aplikasi Data Siswa';
}

function tampilKelas(kelas) {
  return 'Saya dari kelas ' + kelas;
}

function tambahAngka(a, b) {
  return a + b;
}

function cekPassword(pass) {
  if (pass === '1234') {
    return 'Login Berhasil';
  } else {
    return 'Password Salah';
  }
}

const data = { nis: '101', alamat: 'Cibinong' }; //Keluarkan nis dan alamat menggunakan kurung kurawal { ... } lalu tampilkan dengan console.log(nis, alamat)