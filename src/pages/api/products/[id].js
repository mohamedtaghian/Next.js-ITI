import dbConnect from "@/lib/mongodb";
import Product from "@/models/product";

export default async function handler(req, res) {
  await dbConnect();
  const { id } = req.query;

  if (req.method === "GET") {
    const product = await Product.findOne({ id: +id });
    if (!product) return res.status(404).json({ message: "Product not found" });
    return res.status(200).json(product);
  }

  if (req.method === "PUT") {
    try {
      const { title, price, description, productImage } = req.body;

      const updated = await Product.findOneAndUpdate(
        { id: +id },
        {
          title,
          price,
          description,
          images: productImage ? [productImage] : [],
        },
        { new: true, runValidators: true },
      );

      if (!updated)
        return res.status(404).json({ message: "Product not found" });

      return res.status(200).json({ success: true, product: updated });
    } catch (error) {
      return res.status(400).json({ success: false, error: error.message });
    }
  }

  if (req.method === "DELETE") {
    try {
      const deleted = await Product.findOneAndDelete({ id: +id });
      if (!deleted)
        return res.status(404).json({ message: "Product not found" });

      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(400).json({ success: false, error: error.message });
    }
  }

  return res.status(405).json({ message: "Method not allowed" });
}
