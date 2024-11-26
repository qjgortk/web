const adElement = document.getElementById('ad');
        const closeButton = document.getElementById('closeBtn');
        const showAdSymbol = document.getElementById('showAdSymbol');

        closeButton.addEventListener('click', () => {
            adElement.style.transform = 'translateX(150%)';
            adElement.style.opacity = '0';
            setTimeout(() => {
                adElement.style.display = 'none';
                showAdSymbol.style.display = 'block';
                showAdSymbol.style.opacity = '1';
            }, 500);
        });

        showAdSymbol.addEventListener('click', () => {
            adElement.style.display = 'flex';
            setTimeout(() => {
                adElement.style.transform = 'translateX(0)';
                adElement.style.opacity = '1';
            }, 0);
            showAdSymbol.style.opacity = '0';
            setTimeout(() => {
                showAdSymbol.style.display = 'none';
            }, 300);
        });

        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            adElement.style.top = `${100 + scrollY}px`;
            showAdSymbol.style.top = `${100 + scrollY}px`;
        });
