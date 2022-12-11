interface IPerson {
  role: "moderator" | "admin";
  name: string;
}
const Person: IPerson = {
  role: "admin",
  name: "John",
};

console.log(Person);
