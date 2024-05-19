# Invoice-Generator
* Making invoice in HTML tag

## Usage
* Creat index.html

Example

```script
<!DOCTYPE html>
    <html>
    <head>
      <title>
        DYNAMIC INVOICE GENERATOR
      </title>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width" />
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="styles.css" />
     </head>
     <body>
     
        <h1></h1>
        <h2></h2>
        <h3></h3>
     
     </body>
    </html>
```

* Custum heading logo
1. Replace & edit url link
2. You can make style.css(<link rel="stylesheet" href="style.css">)
3. Or place it into html

Example

```script
<style>
body {
  background-image: url('https://github.com/MIFNtechnology/siaranMy/raw/main/logo_mifn.png');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 25% 10%;
}
      </style>
```

* Replace & edit
1. COMPANY NAME(xxxxxxxx-x)
2. ADDRESS 1 & ADDRESS 2
3. LINK ETC
4. PHONE NUMBER
5. Place raw file in html body tag

```script
<body>
        <h1 align="right" style="color:black; font-size:15px;">
         <div class="invoice-container">
         <div class="invoice-header">
          <a class="invoice-number">
            INVOICE NO :
            <input type="text" placeholder="invoice-number" class="invoice-number" size="10"onkeyup="getInput()">
           </a>
          </div>
        </h1>
  
   <h2 align="center" style="color:black; font-size:20px;">
      <a>
        <strong>
          COMPANY NAME(xxxxxxxx-x)
        </strong>
      </a>
      <p align="center" style="color:black; font-size:15px;">
        ADDRESS 1
        </p>
        <p align="center" style="color:black; font-size:14px;">
          ADDRESS 2
        </p>
   </h2>
    
   <h2 align="center" style="color:black; font-size:13px;">
      <a>
      LINK ETC
      </a>
      <p>
      PHONE NUMBER
      </p>
   </h2>
    
   <h3 align="right" style="color:black; font-size:11px; width:100%;">
    <div class="invoice-body">
      <a class="date">
        <form align="right">
        DATE :
        <input type="date" placeholder="date" class="date" onkeyup="getInput()">
        </form>
      </a>
      </div>
   </h3>
    
   <h3 align="left to right" style="color:black; font-size:11px; width:100%;">
      <fieldset>
        <legend>
          CUSTOMER DETAIL :
        </legend>
        
        BILLED TO :
   <p>
        <input type="text" placeholder="name" class="BILLED TO" size="20" onkeyup="getInput()">
   </p>
       
       ADDRESS :
   <p>
        <input type="text" placeholder="address1" class="ADDRESS" size="50" onkeyup="getInput()">
   </p>
   <p>
        <input type="text" placeholder="address2" class="ADDRESS" size="50" onkeyup="getInput()">
   </p>
      
       TEL NO :
   <p>
        <input type="tel" placeholder="phone number" class="TEL NO" size="20" onkeyup="getInput()">
   </p>
      </fieldset>
   </h3>
    
    
   <h3>
   <table align="center">
   <thead>
   <tr class="single-row" align="left to right" style="color:black; font-size:12px;">
   <th style="height:0.01px; border-color: black; border-width:thick; border-style:solid">
              <strong>
                NO
              </strong>
            </th>
   <th style="height:0.01px;border-color: black; border-width:thick; border-style:solid">
              <strong>
              DESCRIPTION
              </strong>
   </th>
   <th style="height:0.01px;border-color: black; border-width:thick; border-style:solid">
              <strong>
              QTY
              </strong>
            </th>
   <th style="height:0.01px;border-color: black; border-width:thick; border-style:solid">
              <strong>
              UNIT  PRICE
              </strong>
   </th>
   <th style="height:0.01px;border-color: black; border-width:thick; border-style:solid">
              <strong>
              SUBTOTUL(RM)
              </strong>
   </th>
   </tr>
   </thead>
        
   <tbody id="table-body">
   <tr class="single-row" align="left to right" style="color:black; font-size:12px;">
   <td style="height:1px;border-color: transparent; border-width:thick; border-style:solid">
              <input type="tel" id="no" name="no" placeholder="no" maxlength="2" size="1" onkeyup="getInput()">
   </td>
   <td style="height:1px;border-color: transparent; border-width:thick; border-style:solid">
              <input type="text" id="description" placeholder="product left" name="description" size="78" onkeyup="getInput()">
   </td>
   <td style="height:1px;border-color: transparent; border-width:thick; border-style:solid">   
              <input type="tel" id="qty" name="qty" placeholder="qty" maxlength="3" size="1" onkeyup="getInput()">
   </td>
   <td style="height:1px;border-color: transparent; border-width:thick; border-style:solid">
   <input type="tel" id="unitprice" placeholder="RM0.00" name="unitprice" size="5" onkeyup="getInput()">
   </td>
   <td style="height:1px;border-color: transparent; border-width:thick; border-style:solid">
              <input type="tel" id="subtotal" placeholder="RM0.00" name="subtotal" size="5" onkeyup="getInput()">
   </td>
   </tr>
          
   <tr class="single-row" align="left to right" style="color:black; font-size:12px;">
   <td style="height:1px;border-color: transparent; border-width:thick; border-style:solid">
   <input type="tel" id="no" name="no" placeholder="no" maxlength="2" size="1" onkeyup="getInput()">
   </td>
   <td style="height:1px;border-color: transparent; border-width:thick; border-style:solid">
              <input type="text" id="description" placeholder="product left" name="description" size="78" onkeyup="getInput()">
   </td>
   <td style="height:1px;border-color: transparent; border-width:thick; border-style:solid">   
              <input type="tel" id="qty" name="qty" placeholder="qty" maxlength="3" size="1" onkeyup="getInput()">
   </td>
   <td style="height:1px;border-color: transparent; border-width:thick; border-style:solid">
              <input type="tel" id="unitprice" placeholder="RM0.00" name="unitprice" size="5" onkeyup="getInput()">
   </td>
   <td style="height:1px;border-color: transparent; border-width:thick; border-style:solid">
              <input type="tel" id="subtotal" placeholder="RM0.00" name="subtotal" size="5" onkeyup="getInput()">
   </td>
   </tr>
   
   <tr class="single-row" align="left to right" style="color:black; font-size:12px;">
   <td style="height:1px;border-color: transparent; border-width:thick; border-style:solid">
   <input type="tel" id="no" name="no" placeholder="no" maxlength="2" size="1" onkeyup="getInput()">
   </td>
   <td style="height:1px;border-color: transparent; border-width:thick; border-style:solid">
              <input type="text" id="description" placeholder="product left" name="description" size="78" onkeyup="getInput()">
   </td>
   <td style="height:1px;border-color: transparent; border-width:thick; border-style:solid">   
              <input type="tel" id="qty" name="qty" placeholder="qty" maxlength="3" size="1" onkeyup="getInput()">
   </td>
   <td style="height:1px;border-color: transparent; border-width:thick; border-style:solid">
              <input type="tel" id="unitprice" placeholder="RM0.00" name="unitprice" size="5" onkeyup="getInput()">
   </td>
   <td style="height:1px;border-color: transparent; border-width:thick; border-style:solid">
              <input type="tel" id="subtotal" placeholder="RM0.00" name="subtotal" size="5" onkeyup="getInput()">
   </td>
   </tr>

   <tr class="single-row" align="left to right" style="color:black; font-size:11.px;">
   <td>
   </td>
            
   <td>
   </td>
            
   <td>
   </td>
            
   <td align="center," style="height:1px;border-color: transparent; border-width:thick; border-style:solid">
              TOTAL  :
   </td>
   <td id="sum" style="height:1px;border-color: transparent; border-width:thick; border-style:solid" id="sum">
              RM
              <input type="tel" placeholder="0.00" name="rm" class="rm" id="rm" size="5" onkeyup="getInput()">
   </td>
   </tr>
   </tbody>
        
   </div>
   </div>
   </body>
   ```
   
 * To edit raw 
 
 Copy/paste in to tbody
 
 ```script
 <tr class="single-row" align="left to right" style="color:black; font-size:12px;">
   <td style="height:1px;border-color: transparent; border-width:thick; border-style:solid">
              <input type="tel" id="no" name="no" placeholder="no" maxlength="2" size="1" onkeyup="getInput()">
   </td>
   <td style="height:1px;border-color: transparent; border-width:thick; border-style:solid">
              <input type="text" id="description" placeholder="product left" name="description" size="78" onkeyup="getInput()">
   </td>
   <td style="height:1px;border-color: transparent; border-width:thick; border-style:solid">   
              <input type="tel" id="qty" name="qty" placeholder="qty" maxlength="3" size="1" onkeyup="getInput()">
   </td>
   <td style="height:1px;border-color: transparent; border-width:thick; border-style:solid">
   <input type="tel" id="unitprice" placeholder="RM0.00" name="unitprice" size="5" onkeyup="getInput()">
   </td>
   <td style="height:1px;border-color: transparent; border-width:thick; border-style:solid">
              <input type="tel" id="subtotal" placeholder="RM0.00" name="subtotal" size="5" onkeyup="getInput()">
   </td>
   </tr>
```

* Making style CSS

Copy/paste & name it style.css

```scriptCSS
* {
  margin: 0;
  padding: 0;
}

body {
  font-family: roboto;
  background: white;
}

.material-icons {
  cursor: pointer;
}

.invoice-container {
  margin: auto;
  padding: 0px 20px;
}

.invoice-header {
  display: flex;
  padding: 70px 0%;
  width: 100%;
}

.title {
  font-size: 18px;
  letter-spacing: 3px;
  color: rgb(66, 66, 66);
}

.date {
  padding: 5px 0px;
  font-size: 14px;
  letter-spacing: 3px;
  color: rgb(156, 156, 156);
}

.invoice-number {
  font-size: 17px;
  letter-spacing: 2px;
  color: rgb(156, 156, 156);
}

.space {
  width: 50%;
}

table {
  table-layout: auto;
  width: 100%;
}
table, th, td {
  border-collapse: collapse;
}

th {
  padding: 10px 0px;
  border-bottom: 1px solid rgb(187, 187, 187);
  border-bottom-style: dashed;
  font-weight: 400;
  font-size: 13px;
  letter-spacing: 2px;
  color: gray;
  text-align: left;

}

td {
  padding: 10px 0px;
  border-bottom: 0.5px solid rgb(226, 226, 226);
  text-align: left;
}

.dashed {
  border-bottom: 1px solid rgb(187, 187, 187);
  border-bottom-style: dashed;
}

.total {
  font-weight: 800;
  font-size: 20px !important;
  color: black;
}

input[type=number] {
  text-align: center ;
  max-width: 50px;
  font-size: 15px;
  padding: 10px;
  border: none;
  outline: none;
}

input[type=text] {
  max-width: 170px;
  text-align: left;
  font-size: 15px;
  padding: 10px;
  border: none;
  outline: none;
}

input[type=text]:focus {
  border-radius: 5px;
  background: #ffffff;
  box-shadow:  11px 11px 22px #d9d9d9,
           -11px -11px 22px #ffffff;
}

input[type=number]:focus {
  border-radius: 5px;
  background: #ffffff;
  box-shadow:  11px 11px 22px #d9d9d9,
           -11px -11px 22px #ffffff;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
-webkit-appearance: none;
margin: 0;
}
/* Firefox */
input[type=number] {
-moz-appearance: textfield;
}

.float{
  width:40px;
  height:40px;
  background-color:#FF1D89;
  color:#FFF;
  border-radius:100%;
  text-align:center;
  box-shadow:
0 2.8px 2.2px rgba(0, 0, 0, 0.048),
0 6.7px 5.3px rgba(0, 0, 0, 0.069),
0 12.5px 10px rgba(0, 0, 0, 0.085),
0 22.3px 17.9px rgba(0, 0, 0, 0.101),
0 41.8px 33.4px rgba(0, 0, 0, 0.122),
0 100px 80px rgba(0, 0, 0, 0.17);
}

.float:hover {
  background-color:#ff057e;
}

.plus{
  margin-top:10px;
}

#sum {
  text-align: right;
  width: 100%;
}

#sum input[type=text] {
  width: 100%;
  font-size: 33px !important;
  color: black;
  text-align: right !important;

}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  body {
      background: lemonchiffon;
  }
  .invoice-container {
      border: solid 1px gray;
      width: 60%;
      margin: 50px auto;
      padding: 40px;
      padding-bottom: 100px;
      border-radius: 5px;
      background: white;
      box-shadow:
0 2.8px 2.2px rgba(0, 0, 0, 0.02),
0 6.7px 5.3px rgba(0, 0, 0, 0.028),
0 12.5px 10px rgba(0, 0, 0, 0.035),
0 22.3px 17.9px rgba(0, 0, 0, 0.042),
0 41.8px 33.4px rgba(0, 0, 0, 0.05),
0 100px 80px rgba(0, 0, 0, 0.07);
  }

  .title-date {
      width: 20%;
  }
  .invoice-number {
      width: 20%;
  }
  .space {
      width: 80%;
  }
}
```

* Making script Js

Copy/paste & name it script.js

```scriptJs
const tBody = document.getElementById("table-body");

addNewRow =()=> {
    const row = document.createElement("tr");
    row.className = "single-row";
    row.innerHTML = `<td style="height:1px;border-color: transparent; border-width:thick; border-style:solid">
              <input type="tel" id="no" name="no" placeholder="no" maxlength="2" size="1" onkeyup="getInput()">
            </td>
            <td style="height:1px;border-color: transparent; border-width:thick; border-style:solid">
              <input type="text" id="description" placeholder="product left" name="description" size="78" onkeyup="getInput()">
            </td>
            <td style="height:1px;border-color: transparent; border-width:thick; border-style:solid">   
              <input type="tel" id="qty" name="qty" placeholder="qty" maxlength="3" size="1" onkeyup="getInput()">
            </td>
            <td style="height:1px;border-color: transparent; border-width:thick; border-style:solid">
              <input type="tel" id="unitprice" placeholder="RM0.00" name="unitprice" size="5" onkeyup="getInput()">
            </td>
            <td style="height:1px;border-color: transparent; border-width:thick; border-style:solid">
              <input type="tel" id="subtotal" placeholder="RM0.00" name="subtotal" size="5" onkeyup="getInput()">
            </td>`

    tBody.insertBefore(row, tBody.lastElementChild.previousSibling);
}

document.getElementById("add-row").addEventListener("click", (e)=> {
    e.preventDefault();
    addNewRow();
});

//GET INPUTS, MULTIPLY AND GET THE ITEM PRICE
getInput =()=> {
    var rows = document.querySelectorAll("tr.single-row");
    rows.forEach((currentRow) => {
        var unit = currentRow.querySelector("#qty").value;
        var price = currentRow.querySelector("#unit price").value;

        amount = qty * unit price;
        currentRow.querySelector("#subtotal").value = subtotal;
        overallSum();

    })
};

//Get the overall sum/Total
overallSum =()=> {
    var arr = document.getElementsByName("subtotal");
    var total = RM0.00;
    for(var i = RM0.00; i < arr.length; i++) {
        if(arr[i].value) {
            rm += +arr[i].value;
        }
        document.getElementById("rm").value = rm;
    }
}

//Delete row from the table
tBody.addEventListener("click", (e)=>{
    let el = e.target;
    const deleteROW = e.target.getAttribute("action");
    if(deleteROW == "delete") {
        delRow(el);
        overallSum();
    }
})

//Target row and remove from DOM;
delRow =(el)=> {
    el.parentNode.parentNode.parentNode.removeChild(el.parentNode.parentNode);
}
```
