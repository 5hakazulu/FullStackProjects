console.log("This is a test.")

document.addEventListener('DOMContentLoaded', getAllItems);

async function getAllItems() {
    const itemResponse = await fetch('http://localhost:3000/items');
    const items = await itemResponse.json();
    let htmlString = '';
    console.log(items)

    for (let i = 0; i < items.length; i++) {
        htmlString += ` <tr>
                    <th scope="row">${items[i].itemName}</th>
                    <td>${items[i].itemPicture}</td>
                    <td>${items[i].itemDescription}</td>
                    <td>${items[i].Consignor.firstName}${items[i].Consignor.lastName}</td>
                    <td>${items[i].Auction.auctionName}</td>
                </tr> `


    }
    console.log(htmlString)
    document.getElementById("inventoryTable").innerHTML = htmlString


}