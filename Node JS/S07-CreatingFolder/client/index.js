const createFolder = () => {
  fetch("http://localhost:3636")
    .then((res) => {
      return res.text();
    })
    .then((data) => {
      alert("Folder Created");
    })
    .catch((error) => {
      alert("error while sending the request to create");
    });
};

const deleteFolder = () => {
    fetch("http://localhost:3636")
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