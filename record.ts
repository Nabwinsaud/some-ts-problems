type usersName = "john" | "bill" | "steve" | "larry";

type usersList = Record<
  usersName,
  { age: number; country?: string | undefined }
>;

const users: usersList = {
  bill: { age: 19, country: "Nepal" },
  john: { age: 60, country: "USA" },
  steve: { age: 40, country: "Philipins" },
  larry: {
    age: 30,
    country: "India",
  },
};

interface IUsers {
  [key: string]: { age: number; country?: string | undefined };
}

const userNames: IUsers = {
  bill: { age: 19, country: "Nepal" },
  john: { age: 60, country: "USA" },
  steve: { age: 40, country: "Philipins" },
  larry: { age: 20, country: "Nepal" },
};

const keys = Object.keys(userNames); // array ['john'...others]
for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  const value = userNames[key];
  console.log(key + " : " + value);
}
