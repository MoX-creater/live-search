const input = document.getElementById("search"); 
const resultContainer = document.getElementById("result");

const users = [
    { name: "Mohit Sharma", email: "mohit@gmail.com" },
    { name: "Rahul Singh", email: "rahul@gmail.com" },
    { name: "Aman Kumar", email: "aman@gmail.com" },
    { name: "Riya Verma", email: "riya@gmail.com" },
    { name: "Ankit Sharma", email: "ankit@gmail.com" },
    { name: "Priya Singh", email: "priya@gmail.com" }
];

//display name and email on search 
input.addEventListener("input", ()=>{
  const val = input.value.toLowerCase();
  
  // if the search box is empty show nothing
  if(val === ""){
    resultContainer.innerHTML = "";
    return;
  }

  const searchresult = users.filter(user => {
    return user.name.toLowerCase().includes(val) || user.email.toLowerCase().includes(val);
  })

  if(searchresult.length === 0){
    resultContainer.textContent = "No Result Found";
    return;
  }
  
  resultContainer.innerHTML = "";

  searchresult.forEach(user => {
    const div = document.createElement("div");
    
    // display name 
    const name = document.createElement("h3");
    name.textContent = user.name;
    
    const mail = document.createElement("p");
    mail.textContent = user.email;

    div.appendChild(name);
    div.appendChild(mail);

    resultContainer.appendChild(div);

  });
    
  
  console.log(searchresult);
})
