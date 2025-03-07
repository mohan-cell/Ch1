    
        fetch('https://api.jsonsilo.com/public/d9f4aca3-cf62-4322-95d4-700e4b494eb0')
            .then(response => response.json())
            .then(data => {
                document.getElementById('marquee').innerHTML = data;
            })
            .catch(error => {
                document.getElementById('error-message').innerText = 'Error loading text file: ' + error;
                new bootstrap.Modal(document.getElementById('errorModal')).show();
            });
    