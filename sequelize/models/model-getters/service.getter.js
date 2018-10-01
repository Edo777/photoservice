class Getter {
    get createGetter() {
        return function () {
            return {
                uid : this.getDataValue('uid'),
                name : this.getDataValue('name'),
                data : this.getDataValue('data'),
                categoryId : this.getDataValue('categoryId'),
                createdAt: this.getDataValue('createdAt')
            }
        }
    };
}

module.exports = new Getter()