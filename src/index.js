const callback = (error, data) => {
  if (error) {
    console.log("Error >> ", error);
  }
  if (data) {
    console.log("OK >> ", data);
  }
};

function getTodos(id, callback) {
  var request = new XMLHttpRequest();

  request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const data = JSON.parse(request.responseText);
      // const dataString = JSON.stringify(data);
      callback(undefined, data);
      // callback(undefined, dataString);
    }

    if (this.readyState === 4 && this.status !== 200) {
      callback("Somethings wrongs", undefined);
    }
  };

  request.open("GET", `https://jsonplaceholder.typicode.com/todos/${id}`, true);
  // request.open("GET", "src/data.json", true);
  request.send();
}

// Callbacck Hell example
// getTodos(1, (error, data) => {
//   if (error) {
//     console.log("Error >> ", error);
//   }
//   if (data) {
//     console.log("OK >> ", data);
//     getTodos(2, (error, data) => {
//       if (error) {
//         console.log("Error >> ", error);
//       }
//       if (data) {
//         console.log("OK >> ", data);
//         getTodos(3, (error, data) => {
//           if (error) {
//             console.log("Error >> ", error);
//           }
//           if (data) {
//             console.log("OK >> ", data);
//           }
//         });
//       }
//     });
//   }
// });

// getTodos(1, callback);

// promise example
const promiseExp = () => {
  // Cach 1
  return new Promise((resolve, reject) => {
    // resolve("get some data");
    resolve({ name: "Nga", channel: "erict" });
  });

  // Cach 2
  // return new Promise(function(resolve, reject) {});
};
promiseExp().then((data) => {
  console.log(data);
});
