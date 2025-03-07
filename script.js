    
        fetch('https://api.jsonsilo.com/public/4cbd0295-e986-48af-ac5d-6b9f9ca45d9a')
            .then(response => response.json())
            .then(data => {
                document.getElementById('marquee').innerHTML = data;
            })
            .catch(error => {
                document.getElementById('error-message').innerText = 'Error loading text file: ' + error;
                new bootstrap.Modal(document.getElementById('errorModal')).show();
            });
    
