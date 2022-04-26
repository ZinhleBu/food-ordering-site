import { categories } from "../../../data"

export default function categoryHandler({ query: { id } }, res) {
  const filtered = categories.filter((c) => c.id === id)

  // Category with id exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `Category with id: ${id} not found.` })
  }
}
