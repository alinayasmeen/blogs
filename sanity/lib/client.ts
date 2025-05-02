import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, token } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  ignoreBrowserTokenWarning: true,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
async function testQuery() {
  try {
    const result = await client.fetch(`*[_type == "blogs"]{title, slug}`)
    console.log('Fetched blogs:', result)
  } catch (error) {
    if (error instanceof Error) {
      console.error('Sanity query failed:', error.message)
    } else {
      console.error('Sanity query failed:', error)
    }
  }
}

testQuery()