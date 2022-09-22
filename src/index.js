const callback = (error, data) => {
  if (error) {
    console.log("Error >> ", error);
  }
  if (data) {
    console.log("OK >> ", data);
  }
};

function getTodos(callback) {
  var request = new XMLHttpRequest();

  request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const data = JSON.parse(request.responseText);
      const dataString = JSON.stringify(data);
      callback(undefined, data);
      callback(undefined, dataString);
    }

    if (this.readyState === 4 && this.status !== 200) {
      callback("Somethings wrongs", undefined);
    }
  };

  // request.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
  request.open("GET", "src/data.json", true);
  request.send();
}

getTodos(callback);
