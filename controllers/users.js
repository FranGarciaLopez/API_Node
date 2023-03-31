const userDatabase = {};
// userId - password

const registerUser = (userName, password) => {
          let hashedPwd = crypto.hashPasswordSync(password);

          let userId = uuid.v4();
          userDatabase[userId] = {
                    userName: userName,
                    password: hashedPwd
          }
          teams.bootstrapTeam(userId);
}
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

const checkUserCredentials = (userName, password, done) => {
          console.log('checking user credentials')

          let user = getUserIdFromUserName(userName);
          if(user) {
                    console.log(user);
                    crypto.comparePassword(password, user.password, done);
          } else {
                    done('Missing user');
          }

}
