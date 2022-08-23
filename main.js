function adminCheck() {
  const userEmail = prompt(`Enter email`)
    .trim()
    .toLowerCase()
    .split(" ")
    .join("");
  const adminEmail = "admin@test.io";

  if (userEmail !== adminEmail) {
    return `Wrong email`;
  }

  const userLogin = prompt(`Enter login`)
    .trim()
    .toLowerCase()
    .split(" ")
    .join("");
  const adminLogin = "admin1234";

  if (userLogin !== adminLogin) {
    return `Wrong login`;
  }

  return `You in`;
}
