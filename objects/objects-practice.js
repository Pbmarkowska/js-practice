/*
Stwórz nowy obiekt updatedUser, który:
zmieni city na "Krakow"
doda nową rolę "admin"
NIE zmodyfikuje oryginalnego obiektu user
Użyj wyłącznie spread operatora.
*/

const user = {
  id: 1,
  name: "Alice",
  address: {
    city: "Warsaw",
    zip: "00-001",
  },
  roles: ["user"],
};

const updatedUser = {
  ...user,
  address: {
    ...user.address,
    city: "Krakow",
  },
  roles: [...user.roles, "admin"],
};

console.log("user1", user);
console.log("updatedUser", updatedUser);
console.log("user2", user);
