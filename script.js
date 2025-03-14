    
        fetch('scroll1.json')
            .then(response => response.json())
            .then(data => {
                document.getElementById('marquee').innerHTML = data;
            })
            .catch(error => {
                document.getElementById('error-message').innerText = 'Error loading text file: ' + error;
                new bootstrap.Modal(document.getElementById('errorModal')).show();
            });
    
