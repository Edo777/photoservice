require("colors");
const Service = require("../service.dao");

class Test {
    static async update(logResult) {
        try {
            const result = await Service.update({ name: "edgarik" })
            logResult ? console.log("+ UPDATE".green, result) : console.log("+ UPDATE".green);
        } catch (error) {
            console.error("- UPDATE".red, error)
        }
    }

    static async create(logResult) {
        try {
            const result = await Service.create({
                "type" : "876761d7-bba4-4e49-bdf8-48e1f0e3a406",
                "categoryId" : "876761d7-bba4-4e49-bdf8-48e1f0e3a406",
                "name" : "xanuttttttttttttttttttttttttt",
                "data" : {
                    "name" : "dvsbghdvs"
                }
            });
            logResult ? console.log("+ CREATED".green, result) : console.log("+ CREATED".green);
        } catch (error) {
            console.error("- CREATED".red, error)
        }
    };
}

setImmediate(async () => {
    try {
        await Test.create(true);
        await Test.update(true);
        process.exit()
    } catch (error) {
        process.exit()
    }
})
