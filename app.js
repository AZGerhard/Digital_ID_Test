function getKeyFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get("key");
}

async function loadProduct() {
    const key = getKeyFromUrl();
    if(!key) return;

    const url = `data/produkt_${key}.json`;
    try {
        const res = await fetch(url);
        const data = await res.json();

        document.getElementById("produktbild").src = data.bild;
        document.getElementById("typ").innerText = data.typ;
        document.getElementById("abdichtung").innerText = data.abdichtung;
        document.getElementById("anschluss").innerText = data.anschluss;
        document.getElementById("dichtleiste").innerText = data.dichtleiste;
        document.getElementById("nennweite").innerText = data.nennweite;
        document.getElementById("nenndruck").innerText = data.nenndruck;
        document.getElementById("baulaenge").innerText = data.baulaenge;

        document.getElementById("gehaeuse").innerText = data.werkstoffe.gehaeuse;
        document.getElementById("kueken").innerText = data.werkstoffe.kueken;
        document.getElementById("deckel").innerText = data.werkstoffe.deckel;

        document.getElementById("dichtbuchse").innerText = data.dichtbuchse;
        document.getElementById("schrauben").innerText = data.schrauben;

        document.getElementById("pdf-link").href = data.pdf;

    } catch (err) {
        document.body.innerHTML = "<h2>Produkt nicht gefunden</h2>";
    }
}

function togglePdf() {
  const container = document.getElementById("pdf-container");
  if(container.style.maxHeight && container.style.maxHeight !== "0px") {
    container.style.maxHeight = "0px";
  } else {
    container.style.maxHeight = container.scrollHeight + "px";
  }
}