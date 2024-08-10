// script.js
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (validateForm(name, email, message)) {
            // Here you would typically send the form data to a server
            console.log('Form submitted:', { name, email, message });
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        }
    });

    function validateForm(name, email, message) {
        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            alert('Please fill in all fields.');
            return false;
        }

        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        return true;
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    var ctx = document.getElementById('obesityChart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['1994','1996','2006','2008', '2015', '2019','2023'],
            datasets: [{
                label: 'Male Adults (%)',
                data: [0,0,0,0, 0, 0, 0],  // Start with zero data
                borderColor: 'rgb(0, 0, 255)',
                tension: 0.1
            },
            {
                label: 'Female Adults (%)',
                data: [0,0,0,0, 0, 0, 0],  // Start with zero data
                borderColor: 'rgb(255, 0, 0)',
                tension: 0.1
            }]
       
        },
        options: {
            responsive: true,
            animation: {
                duration: 2000,
                easing: 'easeInOutQuart'
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 30
                }
            },
            plugins:{
            title: {
                display: true,
                text: 'Obesity Rate in Malaysia (%)'
              }
            }
        }


          
    });

    // Animate the chart
    setTimeout(function() {
        chart.data.datasets[0].data = [4.7,4,10.1,14.1,15.0, 15.3, 21.8];
        chart.data.datasets[1].data = [7.9,7.6,17.4,22.5,20.6, 24.7, 21.8];  // Actual data
        chart.update();
    }, 1000);
});



window.sr = ScrollReveal();
sr.reveal('.aboutus-left',{
    duration: 2000,
    origin: 'left',
    distance: '300px'
});
sr.reveal('.aboutus-right',{
    duration: 2000,
    origin: 'right',
    distance: '300px'
});
sr.reveal('.mission-right',{
    duration: 2000,
    origin: 'right',
    distance: '300px'
});
sr.reveal('.mission-left',{
    duration: 2000,
    origin: 'left',
    distance: '300px'
});
sr.reveal('#features .row',{
    duration: 2000,
    origin: 'bottom',
    distance: '300px'
});

sr.reveal('#testimonial',{
    duration: 2000,
    origin: 'top',
    distance: '300px'
});