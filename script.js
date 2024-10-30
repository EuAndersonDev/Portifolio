function downloadPDF() {
    const link = document.createElement('a');
    link.href = './CV_AndersonReis.pdf';
    link.download = 'CV_AndersonReis.pdf';
    link.click();
}

document.addEventListener('DOMContentLoaded', function() {
    const infoCard = document.getElementById('infoCard');
    const infoCardTitle = document.getElementById('infoCardTitle');
    const infoCardDescription = document.getElementById('infoCardDescription');
    const closeBtn = document.querySelector('.closeBtn');

    const servicoInfo = {
        desenvolvimentoWeb: {
            title: 'Desenvolvimento Web',
            description: 'Desenvolvimento de sites e aplicações web responsivas e otimizadas.'
        },
        consultoria: {
            title: 'Consultoria',
            description: 'Consultoria em tecnologia e desenvolvimento de software.'
        },
        manutencao: {
            title: 'Manutenção',
            description: 'Manutenção de sites e aplicações web.'
        }
    };

    document.querySelectorAll('.saibaMais').forEach(button => {
        button.addEventListener('click', function() {
            const servico = this.getAttribute('data-servico');
            infoCardTitle.textContent = servicoInfo[servico].title;
            infoCardDescription.textContent = servicoInfo[servico].description;
            infoCard.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', function() {
        infoCard.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == infoCard) {
            infoCard.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const carrosselContainer = document.querySelector('.carrosselContainer');
    const carrosselItems = document.querySelectorAll('.carrosselItem');
    const prevBtn = document.querySelector('.prevBtn');
    const nextBtn = document.querySelector('.nextBtn');
    let currentIndex = 0;

    function showItem(index) {
        const offset = -index * 100;
        carrosselContainer.style.transform = `translateX(${offset}%)`;
    }

    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : carrosselItems.length - 1;
        showItem(currentIndex);
    });

    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex < carrosselItems.length - 1) ? currentIndex + 1 : 0;
        showItem(currentIndex);
    });

    showItem(currentIndex);
});