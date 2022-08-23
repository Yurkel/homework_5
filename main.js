const userEmail = prompt(`Enter email`)
  .trim()
  .toLowerCase()
  .split(" ")
  .join("");
const adminEmail = "admin@test.io";

function adminCheck(userEmail) {
  if (userEmail !== adminEmail) {
    alert("Wrong email");
    return;
  }

  const userLogin = prompt(`Enter login`)
    .trim()
    .toLowerCase()
    .split(" ")
    .join("");
  const adminLogin = "admin1234";

  if (userLogin !== adminLogin) {
    alert("Wrong login");
    return;
  }

  alert("You in");
}

adminCheck(userEmail);
