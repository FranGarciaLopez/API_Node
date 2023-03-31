const getUser = (userId) => {
          return userDatabase[userId];
}
const getUserIdFromUserName = (userName) => {
          for (let user in userDatabase) {
                    if(userDatabase[user].userName == userName) {
                              return userDatabase[user];
                    }
          }
}
