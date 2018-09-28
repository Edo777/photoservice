class Getter {
    get createGetter() {
        return function () {
            return {
                createdAt: this.getDataValue('createdAt')
            }
        }
    };
}

module.exports = new Getter()