const headerText = document.getElementById('headerText');
        headerText.addEventListener('mouseover', () => {
            headerText.style.color = 'indianred';
        });
        headerText.addEventListener('mouseout', () => {
            headerText.style.color = 'white';
        });

        // Change navbar background color on scroll
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            } else {
                navbar.style.backgroundColor = 'transparent';
            }
        });