import mongoose from 'mongoose'

const connectDB = (url) =>{
    return mongoose.connect(url)
}

export default connectDB
const connectionString = 'mongodb+srv://chinmay:<password>@chinmay.bagzn1u.mongodb.net/?retryWrites=true&w=majority'