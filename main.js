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


input.addEventListener("input", ()=>{
  const val = input.value.toLowerCase();

  const searchresult = users.filter(user => {
    return user.name.toLowerCase().includes(val);
  })

  resultContainer.innerText = "";
    
  searchresult.forEach()
  console.log(searchresult);
})
