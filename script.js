let lastOpenedModal = null;

function swipeLeft() {
    document.querySelector('.content').classList.add('swipe-left');
    document.querySelector('.video-background').classList.add('swipe-left');
    document.querySelector('.video-overlay').classList.add('swipe-left');

    setTimeout(() => {
        const productContainer = document.getElementById('productContainer');
        productContainer.style.display = 'flex';

        // Show modal and store it as last opened
        showModal();
        lastOpenedModal = 'productModal'; // Track the modal ID in lastOpenedModal
        sessionStorage.setItem('lastOpenedModal', lastOpenedModal); // Store in sessionStorage
        document.querySelector('.content').style.display = 'none';
    }, 1000);
}

function showModal() {
    const modal = document.getElementById('productModal');
    modal.style.display = 'flex';
    lastOpenedModal = 'productModal';
    sessionStorage.setItem('lastOpenedModal', lastOpenedModal);
}

function closeModal() {
    const modal = document.getElementById('productModal');
    modal.style.display = 'none';

    // If lastOpenedModal is closed, clear the variable
    if (lastOpenedModal === 'productModal') {
        lastOpenedModal = null;
        sessionStorage.removeItem('lastOpenedModal'); // Clear from sessionStorage
    }
}

function showHvsDetail() {
    const overlay = document.getElementById('overlay');
    const hvsDetail = document.getElementById('HVSDetail');

    overlay.style.display = 'block';
    hvsDetail.style.display = 'flex';

    lastOpenedModal = 'HVSDetail';
    sessionStorage.setItem('lastOpenedModal', lastOpenedModal);
}

function closeHvsDetail() {
    const overlay = document.getElementById('overlay');
    const hvsDetail = document.getElementById('HVSDetail');

    hvsDetail.classList.add('closing');
    overlay.style.display = 'none';

    setTimeout(() => {
        hvsDetail.style.display = 'none';
        hvsDetail.classList.remove('closing');

        if (lastOpenedModal === 'HVSDetail') {
            lastOpenedModal = null;
            sessionStorage.removeItem('lastOpenedModal');
        }
    }, 500);
}

function showPosterDetail() {
    const overlay = document.getElementById('overlay');
    const posterDetail = document.getElementById('PosterDetail');

    overlay.style.display = 'block';
    posterDetail.style.display = 'flex';

    lastOpenedModal = 'PosterDetail';
    sessionStorage.setItem('lastOpenedModal', lastOpenedModal);
}

function closePosterDetail() {
    const overlay = document.getElementById('overlay');
    const posterDetail = document.getElementById('PosterDetail');

    posterDetail.classList.add('closing');
    overlay.style.display = 'none';

    setTimeout(() => {
        posterDetail.style.display = 'none';
        posterDetail.classList.remove('closing');

        if (lastOpenedModal === 'PosterDetail') {
            lastOpenedModal = null;
            sessionStorage.removeItem('lastOpenedModal');
        }
    }, 500);
}

function showFotoDetail() {
    const overlay = document.getElementById('overlay');
    const fotoDetail = document.getElementById('FotoDetail');

    overlay.style.display = 'block';
    fotoDetail.style.display = 'flex';

    lastOpenedModal = 'FotoDetail';
    sessionStorage.setItem('lastOpenedModal', lastOpenedModal);
}

function closeFotoDetail() {
    const overlay = document.getElementById('overlay');
    const fotoDetail = document.getElementById('FotoDetail');

    fotoDetail.classList.add('closing');
    overlay.style.display = 'none';

    setTimeout(() => {
        fotoDetail.style.display = 'none';
        fotoDetail.classList.remove('closing');

        if (lastOpenedModal === 'FotoDetail') {
            lastOpenedModal = null;
            sessionStorage.removeItem('lastOpenedModal');
        }
    }, 500);
}

function showBrosurDetail() {
    const overlay = document.getElementById('overlay');
    const brosurDetail = document.getElementById('BrosurDetail');

    overlay.style.display = 'block';
    brosurDetail.style.display = 'flex';

    lastOpenedModal = 'BrosurDetail';
    sessionStorage.setItem('lastOpenedModal', lastOpenedModal);
}

function closeBrosurDetail() {
    const overlay = document.getElementById('overlay');
    const brosurDetail = document.getElementById('BrosurDetail');

    brosurDetail.classList.add('closing');
    overlay.style.display = 'none';

    setTimeout(() => {
        brosurDetail.style.display = 'none';
        brosurDetail.classList.remove('closing');

        if (lastOpenedModal === 'BrosurDetail') {
            lastOpenedModal = null;
            sessionStorage.removeItem('lastOpenedModal');
        }
    }, 500);
}

function showEmoneyDetail() {
    const overlay = document.getElementById('overlay');
    const emoneyDetail = document.getElementById('EmoneyDetail');

    overlay.style.display = 'block';
    emoneyDetail.style.display = 'flex';

    lastOpenedModal = 'EmoneyDetail';
    sessionStorage.setItem('lastOpenedModal', lastOpenedModal);
}

function closeEmoneyDetail() {
    const overlay = document.getElementById('overlay');
    const emoneyDetail = document.getElementById('EmoneyDetail');

    emoneyDetail.classList.add('closing');
    overlay.style.display = 'none';

    setTimeout(() => {
        emoneyDetail.style.display = 'none';
        emoneyDetail.classList.remove('closing');

        if (lastOpenedModal === 'EmoneyDetail') {
            lastOpenedModal = null;
            sessionStorage.removeItem('lastOpenedModal');
        }
    }, 500);
}

function showKaosDetail() {
    const overlay = document.getElementById('overlay');
    const kaosDetail = document.getElementById('KaosDetail');

    overlay.style.display = 'block';
    kaosDetail.style.display = 'flex';

    lastOpenedModal = 'KaosDetail';
    sessionStorage.setItem('lastOpenedModal', lastOpenedModal);
}

function closeKaosDetail() {
    const overlay = document.getElementById('overlay');
    const kaosDetail = document.getElementById('KaosDetail');

    kaosDetail.classList.add('closing');
    overlay.style.display = 'none';

    setTimeout(() => {
        kaosDetail.style.display = 'none';
        kaosDetail.classList.remove('closing');

        if (lastOpenedModal === 'KaosDetail') {
            lastOpenedModal = null;
            sessionStorage.removeItem('lastOpenedModal');
        }
    }, 500);
}

function showJamDetail() {
    const overlay = document.getElementById('overlay');
    const jamDetail = document.getElementById('JamDetail');

    overlay.style.display = 'block';
    jamDetail.style.display = 'flex';

    lastOpenedModal = 'JamDetail';
    sessionStorage.setItem('lastOpenedModal', lastOpenedModal);
}

function closeJamDetail() {
    const overlay = document.getElementById('overlay');
    const jamDetail = document.getElementById('JamDetail');

    jamDetail.classList.add('closing');
    overlay.style.display = 'none';

    setTimeout(() => {
        jamDetail.style.display = 'none';
        jamDetail.classList.remove('closing');

        if (lastOpenedModal === 'JamDetail') {
            lastOpenedModal = null;
            sessionStorage.removeItem('lastOpenedModal');
        }
    }, 500);
}

// Fungsi untuk membuka modal dan delay ke halaman baru
// Ambil semua elemen dengan kelas 'product-link'
const productLinks = document.querySelectorAll('.product-link');

// Tambahkan event listener untuk masing-masing link produk
productLinks.forEach(function (productLink) {
    productLink.addEventListener('click', function (event) {
        event.preventDefault(); // Mencegah link untuk langsung membuka halaman

        // Tampilkan modal dan overlay
        const modal = document.getElementById('orderModal');
        modal.style.display = 'block';
        document.getElementById('overlay').style.display = 'block';

        // Dapatkan URL produk yang diklik
        const productUrl = productLink.getAttribute('href');

        // Tunda beberapa detik, lalu buka halaman baru
        setTimeout(function () {
            window.location.href = productUrl;
        }, 3000); // Delay 3000 ms (3 detik) sebelum pindah halaman
    });
});


// Fungsi untuk menutup modal
function closeOrderModal() {
    document.getElementById('orderModal').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}


// Fungsi untuk menutup modal
function closeOrderModal() {
    document.getElementById("orderModal").style.display = "none";
    sessionStorage.removeItem('lastOpenedModal'); // Menghapus informasi modal terakhir saat ditutup
}

// Fungsi untuk membuka modal dan menyimpan ID modal ke sessionStorage
function openModalAndSaveState(modalId) {
    // Menutup modal yang sebelumnya terbuka
    const previousModal = document.querySelector('.modal');
    if (previousModal) {
        previousModal.style.display = 'none';
    }

    // Buka modal yang dipilih
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex'; // atau 'block', sesuai dengan styling modal Anda
        localStorage.setItem('lastOpenedModal', modalId); // Simpan modal yang terakhir dibuka
    }
}

// Pastikan DOM selesai dimuat sebelum mengecek modal
document.addEventListener('DOMContentLoaded', () => {
    const savedModalId = localStorage.getItem('lastOpenedModal');
    if (savedModalId) {
        const modal = document.getElementById(savedModalId);
        if (modal) {
            modal.style.display = 'flex';  // Atau sesuaikan dengan styling modal Anda

            // Jika modal adalah modal produk, pastikan container produk terlihat
            const productContainer = document.getElementById('productContainer');
            if (savedModalId === 'productModal' && productContainer) {
                productContainer.style.display = 'flex';
            } else if (savedModalId === 'HVSDetail') {
                const overlay = document.getElementById('overlay');
                if (overlay) {
                    overlay.style.display = 'block';
                }
            }
        }
    }
});

// Menangani tombol "Back" pada browser (popstate)
window.addEventListener('popstate', function () {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.style.display = 'none';
        localStorage.removeItem('lastOpenedModal');  // Menghapus modal yang terbuka
    }
});

// Menambahkan fungsi untuk membuka modal dari elemen lain
const openOrderModalButton = document.getElementById('openOrderModalButton');
if (openOrderModalButton) {
    openOrderModalButton.addEventListener('click', function () {
        openModalAndSaveState('orderModal');
    });
}

// Event listener untuk menyimpan status sebelum halaman ditutup atau pengguna berpindah halaman
window.addEventListener('beforeunload', () => {
    const modal = document.querySelector('.modal');
    if (modal && modal.style.display === 'flex') {
        const modalId = modal.id;
        localStorage.setItem('lastOpenedModal', modalId);
    }
});
