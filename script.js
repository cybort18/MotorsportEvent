// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Team Modal Functionality
const modal = document.getElementById('teamModal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.querySelector('.close-modal');

const teamData = {
    'red-bull': {
        name: 'Red Bull Racing',
        fullName: 'Oracle Red Bull Racing',
        image: 'https://via.placeholder.com/800x400',
        description: 'Red Bull Racing adalah tim Formula 1 yang berbasis di Milton Keynes, Inggris. Tim ini telah memenangkan beberapa gelar juara dunia konstruktor dan pembalap.',
        stats: {
            championships: '6',
            wins: '95',
            podiums: '250',
            poles: '85'
        }
    },
    'mercedes': {
        name: 'Mercedes-AMG',
        fullName: 'Mercedes-AMG Petronas F1 Team',
        image: 'https://via.placeholder.com/800x400',
        description: 'Mercedes-AMG Petronas F1 Team adalah tim Formula 1 yang berbasis di Brackley, Inggris. Tim ini telah mendominasi Formula 1 sejak era hybrid dimulai.',
        stats: {
            championships: '8',
            wins: '125',
            podiums: '300',
            poles: '130'
        }
    },
    'ferrari': {
        name: 'Ferrari',
        fullName: 'Scuderia Ferrari',
        image: 'https://via.placeholder.com/800x400',
        description: 'Scuderia Ferrari adalah tim Formula 1 tertua dan paling sukses dalam sejarah. Berbasis di Maranello, Italia.',
        stats: {
            championships: '16',
            wins: '242',
            podiums: '800',
            poles: '250'
        }
    },
    'toyota': {
        name: 'Toyota Gazoo Racing',
        fullName: 'Toyota Gazoo Racing WEC',
        image: 'https://via.placeholder.com/800x400',
        description: 'Toyota Gazoo Racing adalah tim balap ketahanan yang telah mendominasi FIA WEC dengan mobil Hypercar mereka.',
        stats: {
            championships: '5',
            wins: '35',
            podiums: '80',
            poles: '25'
        }
    },
    'porsche': {
        name: 'Porsche',
        fullName: 'Porsche Penske Motorsport',
        image: 'https://via.placeholder.com/800x400',
        description: 'Porsche Penske Motorsport adalah tim balap ketahanan yang kembali ke FIA WEC dengan program Hypercar mereka.',
        stats: {
            championships: '3',
            wins: '20',
            podiums: '45',
            poles: '15'
        }
    },
    'toyota-wrc': {
        name: 'Toyota Gazoo Racing WRC',
        fullName: 'Toyota Gazoo Racing World Rally Team',
        image: 'https://via.placeholder.com/800x400',
        description: 'Toyota Gazoo Racing WRC adalah tim rally yang telah memenangkan beberapa gelar juara dunia konstruktor dan pembalap.',
        stats: {
            championships: '4',
            wins: '45',
            podiums: '120',
            poles: '30'
        }
    },
    'hyundai': {
        name: 'Hyundai Motorsport',
        fullName: 'Hyundai Shell Mobis World Rally Team',
        image: 'https://via.placeholder.com/800x400',
        description: 'Hyundai Motorsport adalah tim rally yang telah menjadi pesaing kuat di WRC sejak kembali ke kejuaraan pada 2014.',
        stats: {
            championships: '2',
            wins: '35',
            podiums: '100',
            poles: '25'
        }
    }
};

function openTeamModal(teamId) {
    const team = teamData[teamId];
    if (!team) return;

    const modalHTML = `
        <div class="team-details">
            <img src="${team.image}" alt="${team.name}">
            <div class="team-info">
                <h2>${team.fullName}</h2>
                <p>${team.description}</p>
                <div class="team-stats">
                    <div class="stat-item">
                        <h4>Championships</h4>
                        <p>${team.stats.championships}</p>
                    </div>
                    <div class="stat-item">
                        <h4>Wins</h4>
                        <p>${team.stats.wins}</p>
                    </div>
                    <div class="stat-item">
                        <h4>Podiums</h4>
                        <p>${team.stats.podiums}</p>
                    </div>
                    <div class="stat-item">
                        <h4>Pole Positions</h4>
                        <p>${team.stats.poles}</p>
                    </div>
                </div>
            </div>
        </div>
    `;

    modalContent.innerHTML = modalHTML;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// News Category Filtering
const categoryButtons = document.querySelectorAll('.category-btn');
const newsCards = document.querySelectorAll('.news-card');

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const category = button.getAttribute('data-category');

        newsCards.forEach(card => {
            if (category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = 'block';
                card.style.animation = 'fadeIn 0.5s ease';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Pagination
const paginationButtons = document.querySelectorAll('.pagination-btn');

paginationButtons.forEach(button => {
    button.addEventListener('click', () => {
        paginationButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        // Add pagination logic here
    });
});

// News Modal Functionality
const newsModal = document.getElementById('newsModal');
const newsModalContent = document.getElementById('newsModalContent');
const closeNewsModal = newsModal.querySelector('.close-modal');

const newsData = {
    'f1-1': {
        title: 'INFORMASI MONACO: Semua momen penting saat Norris mewujudkan mimpinya, Racing Bulls bersinar dan wajah-wajah terkenal menikmati pertunjukannya',
        category: 'Formula 1',
        date: '25 Mei 2025',
        image: 'https://media.formula1.com/image/upload/f_auto,c_limit,w_960,q_auto/f_auto/q_auto/fom-website/2025/Monaco/Formula%201%20header%20templates%20-%202025-05-25T202128.636',
        content: `Dengan latar belakang yang tak ada duanya, Lando Norris dari McLaren mengklaim kemenangan pertamanya di Grand Prix Monaco – memenuhi salah satu mimpinya dalam prosesnya – dan mencatatkan pole lap Kualifikasi yang sangat menakjubkan. Namun, itu belum semuanya yang dapat dilaporkan dari Monte Carlo saat kami merangkum semua hal menarik dalam rangkuman Monaco kami...
        <p>Lando Norris membuat pernyataan besar ketika musim 2025 dimulai di Australia, melaju ke posisi terdepan sebelum menguasai kondisi cuaca yang sulit dan beragam serta menahan tekanan dari Max Verstappen pada hari balapan. 
        <p>Namun, perjalanannya tidak semulus yang dibayangkan sebelumnya, pembalap Inggris itu kesulitan untuk secara konsisten mendapatkan hasil maksimal dari paket baru McLaren, melakukan beberapa kesalahan penting di Kualifikasi dan dikalahkan oleh rekan setimnya yang kurang berpengalaman, Oscar Piastri.
        <p>Dengan Piastri yang mulai memperlebar keunggulannya dalam kejuaraan berkat empat kemenangan dalam tujuh balapan, akhir pekan Monte Carlo merupakan akhir pekan yang krusial bagi Norris, yang telah berbicara terbuka dalam beberapa tahun terakhir tentang perjuangannya untuk menjadi yang terbaik di dalam dan luar lintasan.
        <p>Di sirkuit tempat para pembalap dapat membuat perbedaan, Norris menghasilkan salah satu putaran Kualifikasi terbaik dalam kariernya – satu-satunya orang di dalam braket 1m 09s – untuk meraih posisi pole pertama sejak pembukaan Melbourne itu dan membalas semakin banyaknya kritik.
        <p>Kemudian, dalam Grand Prix yang menegangkan, ia berhadapan dengan Virtual Safety Car, berbagai fase lalu lintas, dan aturan dua pit stop untuk mengubah posisi pole menjadi kemenangan, yang menggarisbawahi dominasinya di akhir pekan dan memangkas keunggulan Piastri dalam kejuaraan.
        <p>Dengan Piastri, Norris, dan Verstappen yang hanya terpaut 25 poin di klasemen Kejuaraan Pembalap, sangat penting untuk menuju ke Spanyol…`
    },
    'f1-2': {
        title: 'Wolff ungkapkan bos Williams Vowles mengiriminya pesan permintaan maaf selama GP Monaco',
        category: 'Formula 1',
        date: '26 Mei 2025',
        image: 'https://media.formula1.com/image/upload/f_auto,c_limit,w_960,q_auto/f_auto/q_auto/fom-website/2025/Monaco/Copy%20of%20Formula%201%20header%20template%20(3)',
        content: `<b>Toto Wolff terpaksa menyaksikan Grand Prix yang sulit di Monaco, di mana kedua pembalapnya terjebak di belakang mobil Williams yang menggunakan taktik tim untuk kepentingan mereka sendiri. Bos Mercedes itu mengungkapkan setelah balapan bahwa kepala Williams James Vowles bahkan telah mengiriminya pesan teks di tengah balapan untuk meminta maaf.</b>
        <p>Sebenarnya, masalah tim dimulai pada hari Sabtu ketika Antonelli mengalami kecelakaan saat Kualifikasi sebelum Russell mengalami kehilangan tenaga. Hal itu membuat keduanya berada di posisi ke-14 dan ke-15 di grid – dan tahu bahwa sore yang berat telah menanti.
        <p>Namun, dengan kedua mobil menggunakan ban keras di awal dan bertekad untuk melaju jauh sebelum pit, hari Mercedes berubah dari buruk menjadi lebih buruk ketika mobil Racing Bulls mulai memainkan permainan tim, dan kemudian Williams mengikutinya.
        <p>Saat keduanya mulai tertinggal di belakang untuk menciptakan celah untuk pit stop, Mercedes tertinggal di belakang, masing-masing membutuhkan dua pit stop saat mereka sudah tertinggal satu putaran dari pemimpin.
        <p><img src="https://media.formula1.com/image/upload/f_auto,c_limit,w_960,q_auto/f_auto/q_auto/trackside-images/2025/F1_Grand_Prix_of_Monaco/2216993631"
        <p>Wolff menyebut balapan itu "membuat frustrasi" dan memang begitulah kelihatannya. Pertama, Liam Lawson berlari pelan untuk memberi waktu bagi rekan setimnya Isack Hadjar untuk masuk pit dua kali, lalu Carlos Sainz melakukan hal yang sama untuk Alex Albon – dan dengan begitu, memungkinkan Lawson untuk melakukan pit stop.
        <p>Williams kemudian mengganti pembalap mereka dan mengizinkan Sainz melakukan pit stop, sementara Russell dan Antonelli di belakang semakin tidak sabar karena melihat balapan menjauh dari mereka, dan dengan itu kehilangan kesempatan untuk mencapai 10 besar. Russell akhirnya finis di urutan ke-11, sementara Antonelli di urutan ke-18. 
        <p><a href="https://www.formula1.com/en/latest/article/wolff-reveals-williams-boss-vowles-sent-him-an-apology-text-during-monaco-gp.6Ql1QI6ZNBGUhuVc7FYq89" target="_blank" style="color: #ff0000;">Baca Selengkapnya</a></p>`
    },
    'wec-1': {
        title: 'Porsche Dominasi Le Mans',
        category: 'FIA WEC',
        date: '21 Mei 2025',
        image: 'https://www.fiawec.com/media/cache/resolve/hero_desktop/umbrella_media/693081-682df24ddc33d666147347.jpg',
        content: `Genesis Magma Racing akan menurunkan sepasang prototipe GMR-001 di ajang FIA WEC tingkat atas mulai musim depan , dengan juara dunia bertahan André Lotterer dan pemenang gelar IMSA dua kali Luis 'Pipo' Derani yang telah mengonfirmasi kekuatan berkendara. Selain itu, Jamie Chadwick, Mathys Jaubert, dan Dani Juncadella saat ini sedang mengikuti program 'Trajectory' merek tersebut dengan IDEC Sport di European Le Mans Series, di mana mereka tidak terkalahkan dalam dua putaran pertama kampanye.
        <p>Proyek Hypercar menandai usaha balap motor perdana bagi Genesis, yang perusahaan induknya adalah raksasa otomotif Korea Selatan Hyundai – produsen mobil terbesar ketiga di dunia. Donckerwolke – orang di balik corak oranye-merah cerah GMR-001 , yang diperkenalkan ke publik pada malam New York International Auto Show bulan lalu – mengatakan keberhasilan tidak akan dinilai hanya berdasarkan kinerja dan hasil tim di lintasan.
        <p>"Saya sudah lama mengganggu [para direktur Hyundai] untuk ikut balapan," ungkap pembalap asal Belgia itu dalam wawancara eksklusif dengan FIA WEC. "Di Korea, tidak ada budaya balapan yang sebenarnya. Ketika saya pertama kali ke sana hampir sepuluh tahun yang lalu, saya bertanya, di mana saja balapannya, di mana saja pertemuan 'Cars and Coffee' – dan semua orang hanya menatap saya dengan mata lebar. Kemudian saya sadar, ketika saya membawa tim saya ke acara balapan, itu adalah pertama kalinya mereka melakukan itu!
        <p><img src="https://www.fiawec.com/umbrella_media/606243-682df1183ae7e513545231.jpg"
        <p>“Saya meluncurkan jajaran mobil jalan raya Magma dari Genesis lebih dari setahun yang lalu, dengan tujuan mengembangkan jajaran mobil yang sporty dan – akhirnya – untuk balapan. Masalah yang saya hadapi adalah orang Korea pada dasarnya adalah orang yang sangat rendah hati dan tidak suka membanggakan diri. Saya agak khawatir bahwa penggunaan kata 'Magma' pada GMR-001 dalam bahasa Korea akan terlalu berlebihan bagi pimpinan kami, jadi saya berbicara dengannya tetapi dia sebenarnya sangat mendukung gagasan tersebut.
        <p>“Itu sangat penting bagi saya, karena penggunaan kata Magma sangat relevan. Ini adalah pertama kalinya Korea berpartisipasi dalam balap sirkuit di level ini, dan saya ingin memanfaatkannya untuk akhirnya menciptakan gairah terhadap olahraga ini di negara ini. Sulit untuk membayangkan banyak pembalap Korea yang telah berkompetisi di panggung internasional, jadi salah satu tujuan utama saya dengan inisiatif ini adalah agar generasi baru Korea mengidentifikasi diri mereka dengan olahraga bermotor dan mungkin menjadi pembalap sendiri.
        <p>“Sama seperti 'Bentley Boys' yang membantu membangun legenda Bentley, tujuan saya adalah agar André Lotterer, 'Pipo' Derani, Jamie Chadwick, Mathys Jaubert, Dani Juncadella, dan semua yang akan datang – mudah-mudahan termasuk beberapa pengemudi Korea – akan menjadi duta merek Genesis sekaligus duta merek untuk Korea. Proyek ini memiliki makna yang sangat kuat bagi negara ini, yang melampaui sekadar inisiatif pemasaran merek. Ini tentang menciptakan sesuatu yang baru dalam budaya bangsa.”`
    },
    'wrc-1': {
        title: 'Rovanpera Menang di Rally Portugal',
        category: 'WRC',
        date: '25 Mei 2024',
        image: 'https://via.placeholder.com/800x400',
        content: `Kalle Rovanpera dari Toyota Gazoo Racing berhasil memenangkan Rally Portugal dengan dominan. Pembalap Finlandia tersebut memenangkan 8 dari 22 special stages untuk meraih kemenangan keduanya musim ini.

Kemenangan ini mengangkat Rovanpera ke puncak klasemen pembalap WRC, mengungguli pesaing terdekatnya dengan 5 poin.`
    }
};

function openNewsModal(newsId) {
    const news = newsData[newsId];
    if (!news) return;

    const modalHTML = `
        <div class="news-detail">
            <img src="${news.image}" alt="${news.title}">
            <div class="news-detail-content">
                <span class="news-category">${news.category}</span>
                <h2>${news.title}</h2>
                <div class="news-meta">
                    <span>${news.date}</span>
                </div>
                <p>${news.content}</p>
            </div>
        </div>
    `;

    newsModalContent.innerHTML = modalHTML;
    newsModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

closeNewsModal.addEventListener('click', () => {
    newsModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === newsModal) {
        newsModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}); 