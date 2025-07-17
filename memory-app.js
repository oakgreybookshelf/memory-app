function nextPage() { 
            // Replace with your next page URL 
            window.location.href = 'memory2.html'; 
        } 

function next() { 
                const selectedAnswer = document.querySelector('input[name="colors"]:checked');
                if (!selectedAnswer) {
                    alert("Please select an answer.");
                    return;
                }
                if (selectedAnswer.value === "yellow") {
                    window.location.href = 'memory3.html'; 
                } else {
                    window.location.href = 'memory4.html';
                }
            }); 
        } 

function restart() { 
            // Replace with your next page URL 
            window.location.href = 'index.html'; 
        } 
