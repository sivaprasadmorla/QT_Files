const createFolder = () => {
  let inputtext = document.getElementById("inputText").value;
  fetch(`http://localhost:3636/create/${inputtext}`)
    .then((res) => {
      return res.text();
    })
    .then((data) => {
      alert("folder Created")
    })
    .catch((error) => {
      alert("error while sending the request to create");
    });
};

const deleteFolder = () => {
  let inputtext = document.getElementById("inputText").value;
  fetch(`http://localhost:3636/delete/${inputtext}`)
    .then((res) => {
      return res.text();
    })
    .then((data) => {
      alert("Folder is removed");
    })
    .catch((error) => {
      alert("error while sending the request to delete");
    });
};
