// get element
const ig = document.getElementById("username");
const req = document.getElementById("request");
const send = document.getElementById("kirim");
/* Contact */
send.addEventListener("click", kirim);

const noWA = "081234567890"; //Masukan nower wa disini

function kirim() {
  if (ig.value === "") {
    alert("username instagram tidak boleh kosong ");
  } else if (req.value === "") {
    alert("katanya mau request, ko ga di isi? _-  ");
  } else {
    //buat pesan
    let pembatas = "---------------------------------------------------";
    let enter = "\n\n";
    let asal = "📥 *Pesan dari Website*";
    let detail = "🔎 *Detail Pesan";
    let akhir = "👾 Jangan Lupa di Balas";
    let nama = "Instagram  :  " + ig.value;
    let permintaan = "Request :   " + enter + '" ' + req.value + ' "';

    //gabungin pesan jadi satu
    let group =
      pembatas +
      enter +
      asal +
      enter +
      pembatas +
      enter +
      detail +
      enter +
      nama +
      enter +
      permintaan +
      enter +
      pembatas +
      enter +
      akhir +
      enter +
      pembatas;

    let enc = encodeURIComponent(group);
    let createLink = `https://wa.me/${noWA}?text=${enc}`;

    send.innerText = "mengalihkan...";
    setTimeout(function () {
      window.open(createLink);
      ig.value = "";
      req.value = "";
      send.innerText = "kirim request";
    }, 1500);
  }
}

/* end Contact */
