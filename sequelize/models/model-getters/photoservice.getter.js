class Getter {
    get signUpGetter() {
        return function () {
            return {
                uid: this.getDataValue('uid'),
                isVerified: this.getDataValue('isVerified')
            }
        }
    };

    get loginGetter() {
        return function () {
            return {
                uid: this.getDataValue('uid'),
                name: this.getDataValue('name'),
                verifyNumber : this.getDataValue('verifyNumber'),
                isVerified : this.getDataValue('isVerified'),
                isDeleted: this.getDataValue('isDeleted'),
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
                isVerified: this.getDataValue('isVerified'),
                isUnActive : this.getDataValue('isUnActive'),
                isDeleted : this.getDataValue('isDeleted')
            }
        }
    }
}

module.exports = new Getter();