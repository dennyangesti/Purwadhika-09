var welcome = alert('Selamat datang di Pasar Online \n\nby: Denny Angesti Pratama')
var userNama = prompt('Nama anda')
var userJumlah = prompt('Jumlah Orang')
var daftarMenu = ['Ayam', 'Ikan', 'Sapi']
var daftarHarga = [25000, 50000, 75000]
var totalBelanja = [0,0,0]
var totalHarga = [0,0,0]
var daftar, lagi, detail, totalBill, konfirmasi, bayar, bayarKurang, konf

do {

    do {
        daftar = parseInt(prompt('Daftar Menu: \n1. Ayam @ Rp 25.000\n2. Ikan @ Rp 50.000\n3. Sapi @ Rp 75.000\n\nMasukan pesanan yang anda mau\nPilihan hanya 1 sampai 3\n\n(1 untuk Ayam, 2 untuk Ikan, 3 untuk Sapi) '))
        if (daftar > 3){
        alert('Mohon maaf untuk saat ini,\nPilihan hanya 1-3,\nMasukkan angka yang benar')
        } 
    } while (daftar > 3)

    if (daftar == 1){
        totalBelanja[0] = totalBelanja[0] + Number(prompt('Masukkan Jumlah Ayam /pcs'))

    } else if (daftar == 2){
        totalBelanja[1] = totalBelanja[1] + Number(prompt('Masukkan Jumlah Ikan /pcs'))

    } else if (daftar == 3){
        totalBelanja[2] = totalBelanja[2] + Number(prompt('Masukkan Jumlah Sapi /pcs'))

    }
    lagi = confirm('Ingin belanja lagi?')
    
} while (lagi == true)

totalHarga[0] = totalHarga[0] + (daftarHarga[0] * totalBelanja[0])
totalHarga[1] = totalHarga[1] + (daftarHarga[1] * totalBelanja[1])
totalHarga[2] = totalHarga[2] + (daftarHarga[2] * totalBelanja[2])
totalBill = totalHarga[0] + totalHarga [1] + totalHarga [2]

do {
    (konfirmasi == true)
    detail = alert('Detail Pembelian:\nAtas nama: ' + userNama + '\n\n' + daftarMenu[0] + '\nRp. ' + daftarHarga[0] + ' x ' + totalBelanja[0] + ' = Rp. ' + totalHarga[0] + '\n' + daftarMenu[1] + '\nRp. ' + daftarHarga[1] + ' x ' + totalBelanja[1] + ' = Rp. ' + totalHarga[1] + '\n' + daftarMenu[2] + '\nRp. ' + daftarHarga[2] + ' x ' + totalBelanja[2] + ' = Rp. ' + totalHarga[2] + '\n\nTotal yang harus dibayar:' + '\nRp: ' + totalBill)
    konfirmasi = confirm('Apakah detail pembelian anda sudah benar?')
}
while (konfirmasi == false)
    bayar = parseInt(prompt('Masukkan uang anda sesuai dengan total harga berikut:\n' + 'Rp. ' + totalBill ))

if (bayar < totalBill){
    do {
        (bayar < totalBill)
        alert('Mohon maaf uang yang anda masukkan kurang, \nSenilai: Rp. ' + (totalBill-bayar))
        bayarKurang = parseInt(prompt('Mohon masukkan kembali uang yang kurang sebesar = Rp. ' + (totalBill-bayar)))
        bayar = bayar + bayarKurang

    } while (bayar < totalBill)
}

alert('Transaksi telah Berhasil.\nPesanan anda akan segera kami proses.\nMohon untuk menunggu.')
konf = confirm('Apakah anda menyukai aplikasi ini?')

if (konf == false){
    prompt('Silahkan masukkan kritik dan saran anda, \nAgar aplikasi ini bisa menjadi lebih baik lagi')
    alert('Terimakasih untuk saran dan kritiknya\nKami akan berusaha untuk lebih baik lagi.')
} else
alert('Terimakasih, telah berbelanja di PasarOnline.')

console.log('Pembeli: ' + userNama);
console.log('Pesanan untuk: ' + userJumlah + ' Orang');
console.log('Detail Pembelian:\n' + daftarMenu[0] + '\nRp. ' + daftarHarga[0] + ' x ' + totalBelanja[0] + ' = Rp. ' + totalHarga[0] + '\n' + daftarMenu[1] + '\nRp. ' + daftarHarga[1] + ' x ' + totalBelanja[1] + ' = Rp. ' + totalHarga[1] + '\n' + daftarMenu[2] + '\nRp. ' + daftarHarga[2] + ' x ' + totalBelanja[2] + ' = Rp. ' + totalHarga[2]);

console.log('Total belanja: Rp. ' + totalBill);
console.log('Jumlah Pembayaran: Rp. ' + bayar);
console.log('Kembali: Rp. ' + (bayar-totalBill));

console.log('Terimakasih, hati - hati');