# PENJANA INVOIS(INVOICE GENERATOR)

##  Penjana Invois Dalam HTML Javascript (Serverless Web App)

* Penjana Invois ini berkonsepkan HTML javascript yang tidak memerlukan web server.
* Invois ini menggukan sistem kakulator pengiraan harga secara automatik.
* Biar Kaitou_E membimbing anda melalui contoh penjana invois tanpa web server. Ya, tiada skrip sebelah server dan tiada pangkalan data – Jom! 
* Saya telah mengeluarkan ini di bawah lesen MIT, jangan ragu untuk menggunakannya dalam projek anda sendiri - Peribadi atau komersial. Walau bagaimanapun, beberapa bentuk kredit adalah bagus.🥰

### Contoh gambaran setelah siap untuk digunakan.

<img src="https://github.com/MIFNtechnology/Invoice-Generator/raw/main/contoh1.jpg" alt="cth1" width="120" />(invoice.html)

<img src="https://github.com/MIFNtechnology/Invoice-Generator/raw/main/contoh2.jpg" alt="cth2" width="120" />(print.html)

* Boleh lihat contoh hasil di link url ini
* Klik👉 [invois mifn](<https://mifntechnology.github.io/Invoice-Generator/>)

## Cara guna

### 1. Halaman Html Invois 

(invoice.html)

* Mari kita mulakan dengan halaman buat/edit invois.
* Ini sepatutnya sangat mudah, hanya "bentuk HTML yang panjang lebar". 
* Nombor invois, tarikh dan bil kepada. 
* Item invois. 
* Jumlah… termasuk Jumlah Besar di sini. 
* Tambahkan pengiraan cukai anda sendiri dan caj tambahan di sini. 
* Kawalan – Simpan, muatkan, cetak.

```script
<form onsubmit="return invoice.print()">
  <!-- (PART A) INVOICE -->
  <div class="header">Invoice</div>
  <div id="inRow">
    <input type="text" id="inNum" placeholder="Invoice Number" required>
    <input type="date" id="inDate" required>
  </div>
  <textarea id="inBill" placeholder="Bill To" required></textarea>

  <!-- (PART B) ITEMS -->
  <div class="header">Items</div>
  <div id="itemsList"></div>
  <div id="itemsAdd" class="irow">
    <input type="number" class="qty" min="1" placeholder="Qty">
    <input type="text" class="item" list="itemsData" placeholder="Item Name" onchange="invoice.price(this)">
    <input type="number" class="price" min="0.00" step="0.01" placeholder="Price Each">
    <input type="button" class="action" value="+" onclick="invoice.add(true)">
  </div>
  <datalist id="itemsData"></datalist>

  <!-- (PART C) TOTALS -->
  <div class="header">Totals</div>
  <div id="totals">Grand Total: $0.00</div>

  <!-- (PART D) CONTROLS -->
  <div id="controls">
    <label id="loader">
      <input type="file" accept=".json" onchange="invoice.load()"> Load
    </label>
    <input type="button" value="Save" onclick="invoice.save()">
    <input type="submit" value="Print">
  </div>
</form>
```

### 2. Item Javascript & Mulakan Senarai Barangan Dan Harga.

(Item.js)

* Oleh kerana tiada pangkalan data, satu-satunya tempat untuk menyimpan produk adalah dalam objek Javascript. Ini hanya digunakan sebagai dalam "autocadangan" .
* Ini memudah kita dengan hanya klik nama barangan pada sistem.
* Contoh; "Cappuccino" adalah nama barang. " : 2.22, " adalah harga pada barang tersebut.

```javaScript
var items = {
  "Americano" : 1.11,
  "Cappuccino" : 2.22,
  "Espresso" : 3.33,
  "Latte" : 4.44,
  "Mocha" : 5.55,
};
```

### 3. Memulakan app

(invoice.js)

* var invois mengandungi semua mekanik. invoice.init() akan dijalankan pada beban tetingkap. 
* Cukup banyak hanya mendapat sekumpulan elemen HTML, dan mengisi dengan item dibawah.

```javaScript
var invoice = {
  // (PART A) PROPERTIES
  hNum : null,   // html invoice number
  hDate : null,  // html invoice date
  hBill : null,  // html bill to
  hItems : null, // html items list
  hAdd : null,   // html add item row
  hData : null,  // html items datalist
  hTotal : null, // html total amount
  hLoad : null,  // html load invoice

  // (PART B) INIT ITEMS LIST
  init : () => {
    // (B1) GET HTML ELEMENTS
    invoice.hNum = document.getElementById("inNum");
    invoice.hDate = document.getElementById("inDate");
    invoice.hBill = document.getElementById("inBill");
    invoice.hItems = document.getElementById("itemsList");
    invoice.hAdd = document.getElementById("itemsAdd");
    invoice.hData = document.getElementById("itemsData");
    invoice.hTotal = document.getElementById("totals");
    invoice.hLoad = document.querySelector("#loader input[type=file]");

    // (B2) POPULATE ITEMS DATALIST
    for (let i of Object.keys(items)) {
      let row = document.createElement("option")
      row.value = i;
      invoice.hData.appendChild(row);
    }
  },
  // ...
};

// (PART J) START
window.addEventListener("load", invoice.init);
```

### 4. Javascript Tambah & Keluarkan Item

(invoice.js)

* (C) price() Seperti di bawah, apabila pengguna memilih item yang "didaftarkan" dalam item var, ini juga akan menetapkan harga secara automatik.
* (D) add() Untuk menambah item baharu pada invois – Kami mengklon , buat beberapa perubahan pada medan dan masukkannya ke dalam . 
* (E) remove() Untuk mengalih keluar item daripada invois – Mudah padam keseluruhan baris. 
* (F) total() Setiap kali pengguna menukar kuantiti atau harga item, kira semula jumlah. 
* Sekali lagi, tambahkan pengiraan cukai anda dan caj tambahan di sini.

```javaScript
// (PART C) SET PRICE EACH (WHEN CHOOSING ITEM)
price : item => { if (items[item.value]) {
  item.nextElementSibling.value = items[item.value];
}},

// （PART D）ADD ITEM
add : calc => {
  // (D1) CLONE NEW ITEM ROW
  let row = invoice.hAdd.cloneNode(true),
      qty = row.querySelector(".qty"),
      item = row.querySelector(".item"),
      price = row.querySelector(".price"),
      act = row.querySelector(".action");
  row.removeAttribute("id");
  qty.required = true;
  qty.setAttribute("onchange", "invoice.total()");
  item.required = true;
  price.required = true;
  price.setAttribute("onchange", "invoice.total()");
  act.value = "X";
  act.setAttribute("onclick", "invoice.remove(this.parentElement)");
  document.getElementById("itemsList").appendChild(row);

  // (D2) RESET ADD ITEM
  for (let i of invoice.hAdd.querySelectorAll("input:not(.action)")) {
    i.value = "";
  }

  // (D3) CALCULATE TOTAL
  if (calc) { invoice.total(); }
},

// (PART E) REMOVE ITEM
remove : row => {
  row.remove();
  invoice.total();
},

// (PART F) CALCULATE TOTAL
total : () => {
  let total = 0;
  for (let row of invoice.hItems.querySelectorAll(".irow")) {
    let qty = parseInt(row.querySelector(".qty").value),
        price = parseFloat(row.querySelector(".price").value);
    if (isNaN(qty) || isNaN(price)) { continue; }
    total += qty * price;
  }
  invoice.hTotal.innerHTML = "Grand Total: $" + total.toFixed(2);
},
```

### 5. Simpan invois

(invoice.js)

* Kumpulkan semua medan ke dalam data var. 
* Buat objek Blob() baharu, masukkan data dalam format yang dikodkan JSON. 
* Muat turun paksa. 
* Ambil perhatian, tiada semakan borang di sini.
* Kami membenarkan pengguna menyimpan draf invois.

```javaScript
// (PART G) SAVE INVOICE
save : () => {
  // (G1) GET INVOICE DATA
  let data = {};
  data.num = invoice.hNum.value;
  data.date = invoice.hDate.value;
  data.bill = invoice.hBill.value;
  data.items = [];
  for (let row of invoice.hItems.querySelectorAll(".irow")) {
    let item = [];
    for (let i of row.querySelectorAll("input:not(.action)")) {
      item.push(i.value);
    }
    data.items.push(item);
  }

  // (G2) CONSTRUCT BLOB & "FORCE DOWNLOAD"
  let url = window.URL.createObjectURL(
    new Blob([JSON.stringify(data)], { type: "application/json" })
  );
  let a = document.createElement("a");
  a.href = url;
  a.download = "invoice.json";
  a.click();
  window.URL.revokeObjectURL(url);
},
```

### 6. Memuatkan Invois

(invoice.js)

* Pengguna memilih fail JSON yang dijana oleh fungsi save() di bawah. 
* Secara literal – Baca fail JSON, nyahkod, dan isikan borang HTML.

```javaScript
// (PART H) LOAD INVOICE
load : () => {
  // (H1) FILE READER
  const reader = new FileReader();

  // (H2) DRAW INVOICE
  reader.onload = e => {
    invoice.hLoad.value = "";
    try {
      let data = JSON.parse(reader.result);
      invoice.hNum.value = data.num;
      invoice.hDate.value = data.date;
      invoice.hBill.value = data.bill;
      invoice.hItems.innerHTML = "";
      for (let row of data.items) {
        invoice.hAdd.querySelector(".qty").value = row[0];
        invoice.hAdd.querySelector(".item").value = row[1];
        invoice.hAdd.querySelector(".price").value = row[2];
        invoice.add();
      }
      invoice.total();
    } catch (e) {
      alert("Error loading file");
      console.error(e);
    }
  };

  // (H3) ERROR READING
  reader.onerror = e => {
    alert("Error loading file");
    console.error(e);
  };

  // (H4) GO!
  reader.readAsText(invoice.hLoad.files[0]);
},
```

### 7. Cetak Invois

(print.html)

* Cetak halaman html invois.
* Nah, halaman ini hanyalah templat. 
* Jangan ragu untuk menukar reka bentuk, reka letak dan CSS.

```script
<!-- (PART A) YOUR COMPANY -->
<div id="company">
  <img id="cologo" src="logo.png">
  <div id="coinfo">
    Company Name<br>
    Address<br>
    http://your-site.com<br>
    Email: jon@doe.com<br>
    Tel: 12345678
  </div>
</div>

<!-- (PART B) INVOICE -->
<div id="inHead">SALES INVOICE</div>
<div id="inRow">
  <div id="billto"></div>
  <div id="inData">
    <div id="inNum"></div>
    <div id="inDate"></div>
  </div>
</div>

<!-- (PART C) ITEMS -->
<div id="items">
  <div class="irow ihead">
    <div>Qty</div> <div>Item</div> <div>Price Each</div>
  </div>
</div>

<!-- (PART D) TOTALS -->
<div id="totals"></div>
```

### 8. Cetak Invois JavaScript

(invoice.js)

* Bahagian akhir Javascript. 
* Sangat mudah, pindahkan data borang invois ke halaman cetakan. 
* P.S. Ambil perhatian bahawa fungsi ini dicetuskan oleh butang serah - Semakan borang akan dicetuskan, kami tidak membenarkan pengguna menjana "invois tidak lengkap".

```javaScript
// (PART I) PRINT INVOICE
print : () => {
  // (I1) CHECK FOR ITEMS
  if (invoice.hItems.querySelectorAll(".irow").length==0) {
    alert("Please add at least one item.");
    return false;
  }

  // (I2) OPEN PRINT PAGE
  let page = window.open("print.html");
  page.onload = () => {
    // (I2-1) INVOICE
    page.document.getElementById("billto").innerHTML = "<strong>BILL TO:</strong><br>" + invoice.hBill.value.replace(/\n/g, "<br>");
    page.document.getElementById("inNum").innerHTML = "<strong>INVOICE #: </strong>" + invoice.hNum.value;
    page.document.getElementById("inDate").innerHTML = "<strong>DATE: </strong>" + invoice.hDate.value;

    // (I2-2) ITEMS
    for (let row of invoice.hItems.querySelectorAll(".irow")) {
      let clone = row.cloneNode(true);
      clone.querySelector(".action").remove();
      for (let i of clone.querySelectorAll("input")) { i.readOnly = true; }
      page.document.getElementById("items").appendChild(clone);
    }

    // (I2-3) TOTALS
    page.document.getElementById("totals").innerHTML = invoice.hTotal.innerHTML;

    // (I2-4) PRINT INVOICE
    page.print();
  };
  return false;
}
```

### 9. Apl Web Progresif

(manifest.json)

* Apa itu fail manifest?  - Mengandungi maklumat tentang nama apl, ikon, URL mula, warna, tetapan, dsb.

```scriptJson
{
  "short_name": "Invoice Generator",
  "name": "Invoice",
  "icons": [{
    "src": "logo.png",
    "sizes": "512x512",
    "type": "image/png"
  }],
  "start_url": "/invoice.html",
  "scope": "/",
  "background_color": "white",
  "theme_color": "white",
  "display": "standalone"
}
```

### 10. Kepala html(html header)

(invoice.html)

* Seterusnya, kami memasukkan coretan kecil di bahagian kepala halaman invois untuk:Tentukan fail manifes. 
* Daftarkan pekerja perkhidmatan. 
* Cipta cache untuk menyimpan semua fail apl – Ini bukan cache penyemak imbas, tetapi cache apl berterusan yang berbeza.

```script
<!-- (PART E) PROGRESSIVE WEB APP -->
<link rel="icon" href="logo.png" type="image/png">
<link rel="manifest" href="manifest.json">
<script>if ("serviceWorker" in navigator) {
  // (E1) REGISTER SERVICE WORKER
  navigator.serviceWorker.register("worker.js", {scope: "/"});

  // (E2) CACHE WEB APP FILES
  caches.open("invoice").then(cache => cache.addAll([
    "invoice.css", "invoice.html", "invoice.js", "items.js",
    "logo.png", "manifest.json", "print.css", "print.html"
  ]));
}</script>
```

### 11. Had Akhir

Itu sahaja untuk tutorial dan perkongsian ini. Sebelum kita tamat, saya akan melakukan sorotan pantas tentang batasan (dan kemungkinan masalah) penjana invois tanpa pelayan ini:

* Tiada pangkalan data, semua invois disimpan dalam fail JSON pada peranti pengguna. 
* Jika pengguna berkongsi dan menyalin fail invois, anda mungkin mendapat berbilang versi berbeza.
* Anda boleh membuat folder kongsi dalam rangkaian anda untuk menyimpan fail invois, tetapi bukankah itu "server"? 
* Mungkin juga melaksanakan pangkalan data. Tiada keselamatan dan akauntabiliti. 
* Tiada log masuk, sesiapa sahaja boleh membuat invois, dan tiada cara untuk mengesan siapa yang mencipta/mengemas kini invois. 
* Ya, apl tanpa pelayan ini hanya berfungsi hebat di kedai dan syarikat kecil. Jika anda mahukan "sistem invois sebenar", anda tidak boleh lari daripada skrip dan pangkalan data sebelah server.
