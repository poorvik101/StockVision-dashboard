// ================= LIVE CLOCK =================

function updateClock(){

    const now = new Date();

    const time = now.toLocaleTimeString();

    document.getElementById("clock").innerText = time;

}

setInterval(updateClock, 1000);

// ================= CHART.JS =================

const ctx = document.getElementById('marketChart');

new Chart(ctx, {

    type: 'line',

    data: {

        labels: [
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri'
        ],

        datasets: [{

            label: 'Market Growth',

            data: [20, 35, 28, 45, 60],

            borderWidth: 3,

            tension: 0.4

        }]
    },

    options: {

        responsive: true

    }

});

// ================= CURRENCY CONVERTER =================

function convertCurrency(){

    const usd =
    document.getElementById("usdInput").value;

    const inr = usd * 83;

    document.getElementById("result").innerText =
    usd + " USD = ₹" + inr;

}

// ================= SEARCH FILTER =================

const searchInput =
document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {

    const filter =
    searchInput.value.toLowerCase();

    const cards =
    document.querySelectorAll(".stock-card");

    cards.forEach(card => {

        const text =
        card.innerText.toLowerCase();

        if(text.includes(filter)){
            card.style.display = "block";
        }
        else{
            card.style.display = "none";
        }

    });

});

// ================= FAKE LIVE STOCK UPDATES =================

const prices =
document.querySelectorAll(".price");

setInterval(() => {

    prices.forEach(price => {

        let current =
        parseFloat(
            price.innerText
            .replace("$", "")
            .replace(",", "")
        );

        let random =
        (Math.random() * 10 - 5);

        current += random;

        price.innerText =
        "$" + current.toFixed(2);

    });

}, 3000);

// ================= REAL STOCK API =================

// Replace with your API key

const API_KEY = "87HOEKT162LCDP3Y";

// Apple Stock

fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=AAPL&apikey=${API_KEY}`)

.then(response => response.json())

.then(data => {

    document.getElementById("applePrice")
    .innerText =
    "$" + data["Global Quote"]["05. price"];

});

// Tesla Stock

fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=TSLA&apikey=${API_KEY}`)

.then(response => response.json())

.then(data => {

    document.getElementById("teslaPrice")
    .innerText =
    "$" + data["Global Quote"]["05. price"];

});

// NVIDIA Stock

fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=NVDA&apikey=${API_KEY}`)

.then(response => response.json())

.then(data => {

    document.getElementById("nvidiaPrice")
    .innerText =
    "$" + data["Global Quote"]["05. price"];

});

// ================= LIVE CRYPTO =================

fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd")

.then(response => response.json())

.then(data => {

    document.getElementById("btcPrice")
    .innerText =
    "$" + data.bitcoin.usd;

    document.getElementById("ethPrice")
    .innerText =
    "$" + data.ethereum.usd;

});

// ================= PORTFOLIO TRACKER =================

function addPortfolio(){

    const stock =
    document.getElementById("stockName").value;

    const amount =
    document.getElementById("stockAmount").value;

    if(stock === "" || amount === ""){

        alert("Fill all fields");

        return;
    }

    const li =
    document.createElement("li");

    li.innerText =
    stock + " : ₹" + amount;

    document.getElementById("portfolioList")
    .appendChild(li);

    localStorage.setItem(
        stock,
        amount
    );

}

// ================= LOGIN POPUP =================

const loginBtn =
document.getElementById("loginBtn");

const loginPopup =
document.getElementById("loginPopup");

loginBtn.addEventListener("click", () => {

    loginPopup.style.display = "flex";

});

function closeLogin(){

    loginPopup.style.display = "none";

    alert("Login Successful!");

}

// ================= THEME MEMORY =================

if(localStorage.getItem("theme") === "light"){

    document.body.classList.add("light-mode");

}

function toggleTheme(){

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){

        localStorage.setItem("theme", "light");

    }
    else{

        localStorage.setItem("theme", "dark");

    }

}

// ================= NOTIFICATION =================

setTimeout(() => {

    alert("📈 Market is highly active today!");

}, 4000);
