export const initiateDb = () => {
  const previousData = localStorage.getItem("db");

  if (!previousData) {
    localStorage.setItem("db", JSON.stringify({ users: [], tasks: [] }));
  }

  return;
};

export const checkIfLoggedIn = () => {
  const db = localStorage.getItem("db");
  console.log(JSON.parse(db), "db");
  const users = JSON.parse(db)?.users;

  if (users?.length > 0) {
    const loggedInUser = users?.some((it) => it?.isLoggedin);
    console.log("checkIfLoggedIn", loggedInUser);
    return loggedInUser;
  } //um
};

export const addToLocalStorage = (key, value) => {
  const oldData = JSON.parse(localStorage.getItem("db"));
  oldData[key] = value;
  // localStorage.setItem(oldData);
  localStorage.setItem("db", JSON.stringify(oldData));
};
