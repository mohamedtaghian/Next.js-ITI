import { z } from "zod";

export const ProductSchema = z.object({
  title: z.string().min(3, "Title is too short"),
  description: z.string().min(10, "Description is too short"),
  price: z.coerce.number().positive("Price must be positive"),
  productImage: z.string().url("Must be a valid URL"),
});
