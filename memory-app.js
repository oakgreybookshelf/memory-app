function nextPage() { 
            // Replace with your next page URL 
            window.location.href = 'https://oakgreybookshelf.github.io/memory-app/memory2'; 
        } 

function next() { 
            document.getElementById('submit-btn').addEventListener('click', function() {
                const selectedAnswer = document.querySelector('input[name="colors"]:checked');
                if (!selectedAnswer) {
                    alert("Please select an answer.");
                    return;
                }
                if (selectedAnswer.value === "yellow") {
                    window.location.href = 'https://oakgreybookshelf.github.io/memory-app/memory3.html'; 
                } else {
                    window.location.href = 'https://oakgreybookshelf.github.io/memory-app/memory4.html';
                }
            }); 
        } 

function restart() { 
            // Replace with your next page URL 
            window.location.href = 'https://oakgreybookshelf.github.io/memory-app/'; 
        } 
