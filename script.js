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