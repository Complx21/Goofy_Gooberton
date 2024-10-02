function showContent(id) {
    var contents = document.querySelectorAll('.tab-content');
    for (var i = 0; i < contents.length; i++) {
        contents[i].classList.remove('active');
    }
    document.getElementById(id).classList.add('active');
}

function filterGames() {
    const searchInput = document.getElementById('searchBar').value.toLowerCase();
    const gameCards = document.getElementsByClassName('game-card');
    
    for (let i = 0; i < gameCards.length; i++) {
        const gameName = gameCards[i].getElementsByTagName('a')[0].innerText.toLowerCase();
        if (gameName.includes(searchInput)) {
            gameCards[i].style.display = '';
        } else {
            gameCards[i].style.display = 'none';
        }
    }
}

function toggleSettingsPanel() {
    document.getElementById('settingsPanel').classList.toggle('active');
}

function setTheme(theme) {
    document.body.className = theme + '-theme';
    toggleSettingsPanel();
}

const listUrl = 'https://raw.githubusercontent.com/Complx21/files/main/list.json';

fetch(listUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data); // Log the fetched data
        const gameButtons = document.getElementById('game-buttons');
        data.forEach(game => {
            const button = document.createElement('button');
            button.className = 'game-card';
            button.innerHTML = `
                <img src="https://raw.githubusercontent.com/Complx21/files/main/Icons/${game.gameroot.replace(/\//g, '')}.webp" class="button-img">
                <a>${game.game}</a>
            `;
            button.onclick = () => loadGame(`https://goofygooberton-files.netlify.app/${game.gameroot}index.html`);
            gameButtons.appendChild(button);
        });
    })
    .catch(error => console.error('Error fetching the game list:', error));

function loadGame(url) {
    const gameContainer = document.getElementById('game-container');
    const gameIframe = document.getElementById('game-iframe');
    gameIframe.src = url;
    gameContainer.style.display = 'block';
}

function closeGame() {
    const gameContainer = document.getElementById('game-container');
    const gameIframe = document.getElementById('game-iframe');
    gameIframe.src = '';
    gameContainer.style.display = 'none';
}

        // Redirect immediately when the script is executed
        (function() {
            // Create a new about:blank page
            var newWindow = window.open('about:blank', '_self');
            // Use a small delay to ensure the new window is ready
            setTimeout(function() {
                // Write the iframe into the new page
                newWindow.document.write('<iframe src="https://goofygooberton.netlify.app/" style="width:100%; height:100%; border:none;"></iframe>');
            }, 100); // 100 milliseconds delay
        })();

