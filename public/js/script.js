
// HANDLE ITEM FORM
function stringifyAddItem(fd) {
  const data = {
    itemName: fd.get("itemName"),
    // itemPictures: fd.get("itemPictures"),
    itemDescription: document.getElementById("itemDescription").value,
    auctionId: document.getElementById("auctionId").value,
    consignorId: document.getElementById("consignorId").value,
  };
  console.log(data);
  return JSON.stringify(data);
}

const sendItem = async (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const stringified = stringifyAddItem(data);
  const response = await fetch("http://127.0.0.1:3000/newItem", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: stringified,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      location.reload();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

// const itemForm = document.getElementById("addItem");
// itemForm.addEventListener("submit", sendItem);


// HANDLE AUCTION FORM
function stringifyAddAuction(fd) {
  const data = {
    auctionName: document.getElementById("auctionName").value,
    auctonDate: document.getElementById("auctionDate").value,
  };
  console.log(data)
  return JSON.stringify(data);
}

const sendAuction = async (e) => {
  e.preventDefault();
  console.log(`click`)
  const data = new FormData(e.target);
  const stringified = stringifyAddAuction(data);
  console.log(data)
  console.log(stringified)
  const response = await fetch("http://127.0.0.1:3000/newAuction", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: stringified,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      location.reload();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

// const auctionForm = document.getElementById("addAuction");
// auctionForm.addEventListener("submit", sendAuction);

// HANDLE CONSIGNOR FORM
function stringifyAddConsignor(fd) {
  const data = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    username: document.getElementById("username").value,
    email: document.getElementById("email").value,
  };
  console.log(data)
  return JSON.stringify(data);
}

const sendConsignor = async (e) => {
  e.preventDefault();
  console.log(`click`)
  const data = new FormData(e.target);
  const stringified = stringifyAddConsignor(data);
  console.log(data)
  console.log(stringified)
  const response = await fetch("http://127.0.0.1:3000/newConsignor", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: stringified,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      location.reload();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

const consignorForm = document.getElementById("addConsignor");
consignorForm.addEventListener("submit", sendConsignor);