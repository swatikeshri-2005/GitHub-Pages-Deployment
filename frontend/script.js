async function getMessage() {
    const res = await fetch("https://your-backend-url.onrender.com");
    const data = await res.json();
    document.getElementById("output").innerText = data.message;
}