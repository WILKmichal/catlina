export function Axios() {

var axios = require("axios");
// var MockAdapter = require("axios-mock-adapter");

// // This sets the mock adapter on the default instance
// var mock = new MockAdapter(axios);

// // Mock any GET request to /users
// // arguments for reply are (status, data, headers)
// mock.onGet("/../components/TstDashboard").reply(200, {
//   users: [{ id: 1, name: "John Smith" }],
// });

// axios.get("/../components/TstDashboard").then(function (response) {
//   console.log(response.data);
// });

// } 

const loginRes = await Axios.post("http://localhost:3001/maxiconcours/login", newUser)
            .then(res => { console.log(res) })
            .catch(err => { console.log(err) })
          }