class Getter {
    get signUpGetter() {
        return function () {
            return {
                isVerified: this.getDataValue('isVerified')
            }
        }
    };

    get loginGetter() {
        return function () {
            return {
                uid: this.getDataValue('uid'),
                name: this.getDataValue('name'),
                refreshToken: this.getDataValue('refreshToken')
            }
        }
    };

    get getGetter() {
        return function () {
            return {
                uid: this.getDataValue('uid'),
                name: this.getDataValue('name'),
                username: this.getDataValue('username'),
                image: this.getDataValue('image'),
                avatar: this.getDataValue('avatar'),
                card: this.getDataValue('card'),
                phone: this.getDataValue('phone'),
                description: this.getDataValue('description'),
                address: this.getDataValue('address'),
                isVerified: this.getDataValue('isVerified')
            }
        }
    }
}

module.exports = new Getter();