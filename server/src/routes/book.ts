import { Response, Request, Router } from "express";
import { Book } from "../module/book";
const router = Router();

router.post("/", async (req: Request, res: Response) => {
  const { tittle, author, description } = req.body;
  const errors: any = {};
  try {
    //input validation
    if (!tittle || tittle.trim() === "") errors.tittle = "field is required";
    if (!author || author.trim() === "") errors.author = "field is required";
    if (!description || description.trim() === "")
      errors.description = "field is required";

    if (Object.keys(errors).length > 0) return res.status(400).json(errors);

    //check if tittle of the book is already exist
    const confirmTittle = await Book.findOne({ tittle });
    if (confirmTittle) res.status(400).json({ tittle: "tittle already exist" });
    const newBook = new Book({
      tittle,
      author,
      description,
    });

    await newBook.save();
    res.json(newBook);

    res.json({ msg: "" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (req: Request, res: Response) => {
  try {
    const Books = await Book.find().sort("-createdAt");
    res.json(Books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/:id", async (req: Request, res: Response) => {
  const { tittle, author, description } = req.body;
  try {
    const book = await Book.findOne({ _id: req.params.id });

    if (tittle !== book.tittle) {
      //check if tittle of the book is already exist
      const confirmTittle = await Book.findOne({ tittle });
      if (confirmTittle)
        res.status(400).json({ tittle: "tittle already exist" });
    }
    book.tittle = tittle;
    book.author = author;
    book.description = description;
    await book.save();
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      res.status(404).json({ error: "book not found" });
    }
    await Book.findOneAndDelete({ _id: req.params.id });
    res.json({ msg: "book deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
