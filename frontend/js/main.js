// Fungsi yang akan mengambil data dari API backend
async function fetchLapangData() {
    try {
        // Mengirim permintaan ke API backend Anda
        const response = await fetch('http://localhost:3000/api/lapangan');
        
        // Memeriksa jika respons tidak berhasil
        if (!response.ok) {
            throw new Error('Gagal mengambil data dari API.');
        }

        // Mengubah respons menjadi format JSON
        const lapanganData = await response.json();

        // Panggil fungsi untuk menampilkan data di halaman
        displayLapangData(lapanganData);

    } catch (error) {
        // Tampilkan pesan error di konsol browser jika ada masalah
        console.error('Error:', error);
        document.getElementById('lapangan-container').innerHTML = '<p>Maaf, data tidak dapat dimuat.</p>';
    }
}

// Fungsi yang akan menampilkan data di HTML
function displayLapangData(lapangan) {
    const container = document.getElementById('lapangan-container');
    container.innerHTML = ''; // Kosongkan container

    // Loop setiap data lapangan dan buat elemen HTML-nya
    lapangan.forEach(lap => {
        const div = document.createElement('div');
        div.classList.add('lapangan-item');
        div.innerHTML = `
            <h3>${lap.nama_lapangan}</h3>
            <p><strong>Lokasi:</strong> ${lap.lokasi}</p>
            <p><strong>Harga:</strong> Rp${lap.harga_per_jam}/jam</p>
            <p><strong>Status:</strong> ${lap.status}</p>
        `;
        container.appendChild(div);
    });
}

// Panggil fungsi utama saat halaman pertama kali dimuat
document.addEventListener('DOMContentLoaded', fetchLapangData);