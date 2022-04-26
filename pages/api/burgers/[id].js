import { burgers } from "../../../data"

export default function burgerHandler({ query: { id } }, res) {
  const filtered = burgers.filter((b) => b.id === id)

  // Burger with id exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `Burger with id: ${id} not found.` })
  }
}
