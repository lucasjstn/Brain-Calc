"use strict";
var UserState;
(function (UserState) {
    UserState[UserState["Admin"] = 1] = "Admin";
    UserState[UserState["Editor"] = 2] = "Editor";
    UserState[UserState["User"] = 3] = "User";
})(UserState || (UserState = {}));
function checkStatus(status) {
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
