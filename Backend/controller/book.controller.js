import Book from "../model/book.model.js";

export const getBook = async(req, res) => {
    try {
        const book = await Book.find();//wait until we get res so we have used asynchronus fun,other funcn will be executing parallely
        res.status(200).json(book);//200 for success status //since we are req from DB , it gives query object which is stored in book and this query obj is send by the server
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);//500 for internal server error
    }
};