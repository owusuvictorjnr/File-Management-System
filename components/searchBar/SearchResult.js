import { connectMongoDB } from '@/utils/mongodb'

export default async function SearchResult(str) {
  await connectMongoDB(),
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }

  let searchTerm = `${str}`
}
