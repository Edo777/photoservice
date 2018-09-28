require("colors");
const Photoservice = require("../photoservice.dao");

class Test {
    static async signUp(logResult) {
        try {
            const result = await Photoservice.signUp({
                "username": "ed111",
                "password": "123456",
                "image": "husxbhdbs",
                "avatar": "bhjcjsbcdssds",
                "card": "51515151515",
                "name": "edogar",
                "address": "data.address",
                "phone": 56415415515,
            });
            logResult ? console.log("+ SIGNUP".green, result) : console.log("+ SIGNUP".green);
        } catch (error) {
            console.error("- SIGNUP".red, error)
        }
    };

    static async login(logResult) {
        try {
            const result = await Photoservice.login({
                "username": "ed111",
                "password": "123456"
            });
            logResult ? console.log("+ LOGIN".green, result) : console.log("+ LOGIN".green);
        } catch (err) {
            console.error("- LOGIN".red, err)
        }

    };

    static async getAll(logResult) {
        try {
            const result = await Photoservice.getAll()
            logResult ? console.log("+ GET ALL".green, result) : console.log("+ GET ALL".green);
        } catch (error) {
            console.error("- GETALL".red, error)
        }
    };

    static async getOne(logResult) {
        try {
            const result = await Photoservice.getOne('0e6b2753-71e8-44ba-9cff-fba1bced7c63');
            logResult ? console.log("+ GET ONE".green, result) : console.log("+ GET ONE".green);
        } catch (error) {
            console.error("- GET ONE".red, error)
        }
    };

    static async update(logResult) {
        try {
            const result = await Photoservice.update({ name: "edgarik" })
            logResult ? console.log("+ UPDATE".green, result) : console.log("+ UPDATE".green);
        } catch (error) {
            console.error("- UPDATE".red, error)
        }
    }
}

setImmediate(async () => {
    try {
        await Test.signUp(false);
        await Test.login(false);
        await Test.getAll(false);
        await Test.getOne(false);
        await Test.update(true);
        process.exit(0)
    } catch (error) {
        process.exit(1)
    }
})
