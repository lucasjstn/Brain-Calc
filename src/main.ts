enum UserState {
  Admin = 1,
  Editor = 2,
  User = 3,
}

function checkStatus(status: number) {
  switch (status) {
    case UserState.Admin:
      console.log("is admin");
      break;
    case UserState.Editor:
      console.log("is editor");
      break;
    case UserState.User:
      console.log("is user");
      break;

    default:
      break;
  }
}

checkStatus(2);
