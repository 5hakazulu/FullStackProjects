// HANDLE ITEM FORM
function stringifyAddItem(fd) {
  const data = {
    itemName: fd.get("itemName"),
    // itemPictures: fd.get("itemPictures"),
    itemDescription: document.getElementById("itemDescription").value,
    auctionId: parseInt(document.getElementById("auctionId").value),
    consignorId: parseInt(document.getElementById("consignorId").value),
  };
  return JSON.stringify(data);
}

const sendItem = async (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const stringified = stringifyAddItem(data);
  const response = await fetch("/newItem", {
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

// HANDLE AUCTION FORM
function stringifyAddAuction(fd) {
  const data = {
    auctionName: document.getElementById("auctionName").value,
    auctionDate: document.getElementById("auctionDate").value,
  };
  return JSON.stringify(data);
}

const sendAuction = async (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  console.log(data);
  const stringified = stringifyAddAuction(data);
  const response = await fetch("/newAuction", {
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

// HANDLE CONSIGNOR FORM
function stringifyAddConsignor(fd) {
  const data = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    username: document.getElementById("username").value,
    email: document.getElementById("email").value,
  };
  return JSON.stringify(data);
}

const sendConsignor = async (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const stringified = stringifyAddConsignor(data);
  const response = await fetch("/newConsignor", {
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

//1 event to rule them all
const differentForms = {
  sendConsignor,
  sendAuction,
  sendItem,
};
const submitForm = document.querySelector(".form");
const whichFormToUse = submitForm.id;
submitForm.addEventListener(`submit`, differentForms[whichFormToUse]);

//Fill consignor dropdown
async function getAllConsignors() {
  const consignorResponse = await fetch("/Consignors");
  const consignors = await consignorResponse.json();
  let htmlString = "";
  console.log(consignors);

  for (let i = 0; i < consignors.length; i++) {
    htmlString += ` 
    <option value="${consignors[i].id}">`;
  }
  console.log(htmlString);
  document.getElementById("consignorOptions").innerHTML = htmlString;
}

//Fill Auction Dropdown
async function getAllAuctions() {
  const auctionResponse = await fetch("/Auctions");
  const auctions = await auctionResponse.json();
  let htmlString = "";
  console.log(auctions);

  for (let i = 0; i < auctions.length; i++) {
    htmlString += ` 
    <option value="${auctions[i].id}">`;
  }
  console.log(htmlString);
  document.getElementById("auctionOptions").innerHTML = htmlString;
}

getAllConsignors()
getAllAuctions()