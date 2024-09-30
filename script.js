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
            button.onclick = () => loadGame(`https://raw.githubusercontent.com/Complx21/files/main/${game.gameroot}index.html`);
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

