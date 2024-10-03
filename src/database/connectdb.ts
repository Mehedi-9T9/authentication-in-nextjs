
import mongoose from "mongoose";
// import 'dotenv/config'

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB!)
        // await mongoose.connect("mongodb://localhost:27017")
        console.log("database connect successfull");

        //advance checking
        // const connection = mongoose.connection
        // connection.on("connected", () => {
        //     console.log("mongodb connect successfull");
        // })
        // connection.on("error", () => {
        //     console.log("mongodb connect fail");
        // })
        // process.exit(1)

    } catch (error: any) {
        console.log("database connect fail", error.message);

    }
}