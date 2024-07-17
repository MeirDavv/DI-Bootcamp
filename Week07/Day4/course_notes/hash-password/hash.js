const bcrypt = require("bcrypt");

const hash = (pass) => {
    return bcrypt.hashSync(pass + "",10);
}

module.exports = {
    hash,
}