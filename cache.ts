const useDatabase = (): Function[] => {
  let storage: string[] = ["Apple", "banana", "grapes"];
  const addToDB = (item: string): void => {
    storage.push(item);
    console.log(`${item} added`);
  };
  const clearDB = (): void => {
    storage = [];
    console.log("DB is empty now");
  };
  return [addToDB, clearDB];
};
const [addNum, clearItem] = useDatabase();
addNum("Grapes");
clearItem();
