const randomTexts = [
    'Best Unblocked Games Playground',
    'Shell Shockers coming soon!',
    'V2 coming soon!',
    'Fun website',
    'Read the notes that are placed around the site (They are there for a reason)',
    'Stop saying that the sites are broken, they arent some are just down sometimes',
    'THIS SITE IS NOT COPIED',
    '...',
    'Do people actually read these?',
];

// Function to change the link text to a random one
function randomizeText() {
    const randomIndex = Math.floor(Math.random() * randomTexts.length);
    document.getElementById('random-link').innerText = randomTexts[randomIndex];
}

window.onload = randomizeText;

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
    document.exitFullscreen();
}

function changeFaviconAndTitle(faviconURL, titleText) {
    var link = document.getElementById('favicon');
    link.href = faviconURL;
    document.title = titleText;
}

const redirectUrl = 'https://classroom.google.com/';

function checkKeyInput() {
    const input = document.getElementById('key-input').value.toLowerCase();
    if (input) {
        window.location.href = redirectUrl;
    }
}

document.getElementById('key-input').addEventListener('input', function() {
    checkKeyInput();
});

//custom cursors test
const buttons = document.querySelectorAll('button');

        // Iterate over each button and add click event listener
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                // Get the cursor image tied to the clicked button
                const cursorImage = button.getAttribute('data-cursor');
                
                // Set the cursor to the image associated with the clicked button
                document.body.style.cursor = `url(${cursorImage}), auto`;
            });
        });

        var elem = document.getElementById("game-iframe");
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}
