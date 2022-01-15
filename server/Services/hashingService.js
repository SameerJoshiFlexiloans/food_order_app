const bcrypt = require('bcryptjs');

class HashingService{
    getHash(pass){
        let salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(pass,salt);
    }

    compareHash(pass,hash){
        return bcrypt.compareSync(pass,hash)
    }
}

module.exports = HashingService;