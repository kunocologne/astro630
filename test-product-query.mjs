import { getPayload } from 'payload';
import config from './src/cms/config.ts';

async function testQuery() {
  try {
    const payload = await getPayload({ config });
    
    console.log('🔍 Testing product query...\n');
    
    // Test the exact query from the homepage
    const result = await payload.find({
      collection: 'products',
      where: {
        and: [
          { status: { equals: 'published' } },
          { featured: { equals: true } },
        ],
      },
      limit: 4,
      depth: 2,
      overrideAccess: false,
    });
    
    console.log(`Found ${result.docs.length} products:\n`);
    
    result.docs.forEach((p, i) => {
      console.log(`${i + 1}. ${p.title}`);
      console.log(`   ID: ${p.id}`);
      console.log(`   Status: ${p.status}`);
      console.log(`   Featured: ${p.featured}`);
      console.log(`   Has Gallery: ${p.gallery?.length > 0 ? 'YES' : 'NO'}`);
      console.log(`   Price: ${p.price}`);
      console.log('');
    });
    
    if (result.docs.length === 0) {
      console.log('❌ No products found! Checking all products...\n');
      
      const allProducts = await payload.find({
        collection: 'products',
        limit: 100,
        depth: 1,
      });
      
      console.log(`Total products in database: ${allProducts.docs.length}\n`);
      allProducts.docs.forEach((p) => {
        console.log(`- ${p.title}: status=${p.status}, featured=${p.featured}`);
      });
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

testQuery();
