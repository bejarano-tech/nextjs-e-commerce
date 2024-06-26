interface Rating {
  count: number
  rate: number
}

export interface Product {
  id: string
  title: string
  category: string
  description: string
  image: string
  price: number
  rating: Rating
}