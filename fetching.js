import { formatString } from './utils.js';

export function fetchNewLine(previousLines, currentIndex) {
    fetch('getRandomLine.php')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(line => {
            line = formatString(line);
            const entry = document.getElementById('entry');
            entry.innerHTML = line;
            previousLines.push(line); // Add the new line at the end of previousLines
            currentIndex++; // Increment currentIndex
            entry.blur(); // Remove focus from the input field
        })
        .catch(e => {
            console.log('There was a problem with the fetch operation: ' + e.message);
        });
}