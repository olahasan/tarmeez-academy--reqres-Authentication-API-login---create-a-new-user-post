//////////////////////////////////////
//login request
//////////////////////////////////////

axios
  .post("https://reqres.in/api/login", {
    email: "charles.morris@reqres.in",
    password: "pistol",
  })
  .then(function (response) {
    token = response.data.token;
    localStorage.setItem("token", token);
    createNewUser();
    // console.log(response.data.token);
  });

//////////////////////////////////////
//create a new user/post
//////////////////////////////////////

function createNewUser() {
  let token = localStorage.getItem("token");
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  axios
    .post(
      "https://reqres.in/api/users",
      {
        name: "morpheus",
        job: "leader",
      },
      config
    )
    .then(function (response) {
      console.log(response);
    });
}
