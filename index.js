// Add your code here

// const submitData = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//     },
  
//   body: JSON.Stringify({            //convert objects to strings
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   }),

// };
// fetch("http://localhost:3000/dogs", configurationObject);

function submitData(userName, userEmail) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            Accept : "application/json"
        },
        body : JSON.stringify( {
            "name" : userName,
            "email" : userEmail
        })
    })
    .then(resp => resp.json())
    .then(data => {
        const newId = document.createElement("p");
        newId.textContent = data.id;
        const bodyText = document.querySelector("body");
        bodyText.appendChild(newId);
    })
    .catch(error => {
        const errorMsg = document.createElement("p");
        errorMsg.textContent = error.message;
        const bodyText = document.querySelector("body");
        bodyText.appendChild(errorMsg);
    })
}