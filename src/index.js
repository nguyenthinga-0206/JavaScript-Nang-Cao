const callback = (error, data) => {
  if (error) {
    console.log("Error >> ", error);
  }
  if (data) {
    console.log("OK >> ", data);
  }
};

function getTodos(id, callback) {
  return new Promise((resolve, reject) => {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const data = JSON.parse(request.responseText);
        // const dataString = JSON.stringify(data);
        // callback(undefined, data);
        // callback(undefined, dataString);
        resolve(data);
      }

      if (this.readyState === 4 && this.status !== 200) {
        // callback("Somethings wrongs", undefined);
        reject("Error id " + id);
      }
    };

    request.open(
      "GET",
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      true
    );
    // request.open("GET", "src/data.json", true);
    request.send();
  });
}

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((Response) => {
    return Response.json();
  })
  .then((data) => {
    console.log("check fetch data >> ", data);
  });

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

// Promise example
// getTodos(1)
//   .then((data) => {
//     console.log("OK1 >> ", data);

//     getTodos(2).then((data) => {
//       console.log("OK2 >> ", data);
//     });
//   })
//   .catch((error) => {
//     console.log(">> ", error);
//   });

// getTodos(1)
//   .then((data1) => {
//     console.log("OK1 >> ", data1);
//     return getTodos(2);
//     // return getTodos("2jasj");
//   })
//   .then((data2) => {
//     console.log("OK2 >> ", data2);
//     return getTodos(3);
//   })
//   .then((data3) => {
//     console.log("OK3 >> ", data3);
//   })
//   .catch((error) => {
//     console.log(">> ", error);
//   });

// promise example
// const promiseExp = () => {
//   // Cach 1
//   return new Promise((resolve, reject) => {
//     // resolve("get some data");
//     resolve({ name: "Nga", channel: "erict" });
//   });

//   // Cach 2
//   // return new Promise(function(resolve, reject) {});
// };
// promiseExp()
//   .then((data) => {
//     console.log(data);
//   }).then((error) => {
//     console.log("Error");
//   });
