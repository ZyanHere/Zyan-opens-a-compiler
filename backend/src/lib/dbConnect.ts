import mongoose from "mongoose"

export const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI!, {
            dbName: "zb-compiler",
        })
        console.log("connection established!")
    } catch (error) {
        console.error("connection error")
    }
}