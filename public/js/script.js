function stringifyAddItem(fd) {
    const data = {
      title: fd.get("title"),
      catagory: fd.get("catagory"),
      body: fd.get("body"),
    };
    return JSON.stringify(data);
  }
  
  const addItem = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(data);
    const stringified = stringifyBlogData(data);
    const response = await fetch("http://127.0.0.1:3000/create-post", {
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
  
  const form = document.getElementById("add-contact");
  addBlog.addEventListener("submit", addPost);