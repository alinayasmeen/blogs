import { type SchemaTypeDefinition } from 'sanity'
import  blogs  from '@/sanity/blogs'
import author from '@/sanity/author'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogs, author],
}
