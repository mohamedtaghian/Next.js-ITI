import dbConnect from "@/lib/mongodb";
import Product from "@/models/product";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    const products = await Product.find({});
    return res.status(200).json(products);
  }

  if (req.method === "POST") {
    try {
      const { title, price, description, productImage } = req.body;

      // Auto-generate numeric id from the current max
      const lastProduct = await Product.findOne().sort({ id: -1 });
      const newId = lastProduct ? lastProduct.id + 1 : 1;

      const product = await Product.create({
        id: newId,
        title,
        price,
        description,
        images: productImage ? [productImage] : [],
      });

      return res.status(201).json({ success: true, product });
    } catch (error) {
      return res.status(400).json({ success: false, error: error.message });
    }
  }

  return res.status(405).json({ message: "Method not allowed" });
}
