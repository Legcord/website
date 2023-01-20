
window.onload = async () => {
    const response = await fetch("/latest.json");
    const data = await response.json();
    document.body.innerHTML = await document.body.innerHTML.replaceAll("VERSIONNUM", data.version);
}
