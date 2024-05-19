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