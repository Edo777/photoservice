const clickatell = require('clickatell-node').http('edgar.khachatryan95@gmail.com', 'zxcvbnm1234567', '8HomXqboTBKzBFSJcczoGA==');

class Phone {
    static send(phoneNumber, text) {
        return new Promise((resolve, reject) => {
            clickatell.sendMessage([phoneNumber], text, {}, function (err, messages) {
                if (err) {
                    return reject(err)
                } else {
                    resolve();
                }
            });
        })
    }
}

module.exports = Phone;