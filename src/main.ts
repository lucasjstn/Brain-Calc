function checkStatus(status: number) {
  switch (status) {
    case 1:
      console.log("is admin");
      break;
    case 2:
      console.log("is editor");
      break;
    case 3:
      console.log("is user");
      break;

    default:
      break;
  }
}

checkStatus(3);
