// Quick script to check product status
const { getPayload } = require('payload')
const config = require('./src/cms/config.ts')

async function checkProducts() {
  const payload = await getPayload({ config })

  const allProducts = await payload.find({
    collection: 'products',
    limit: 100,
    depth: 1,
  })

  console.log('\n📦 All Products in CMS:')
  console.log('='.repeat(60))

  allProducts.docs.forEach((p, i) => {
    console.log(`\n${i + 1}. ${p.title || 'Untitled'}`)
    console.log(`   Status: ${p.status || 'NOT SET'}`)
    console.log(`   Featured: ${p.featured ? '✅ YES' : '❌ NO'}`)
    console.log(`   Has Image: ${p.gallery?.length > 0 ? '✅ YES' : '❌ NO'}`)
    console.log(`   Price: ${p.price || 'NOT SET'}`)
    console.log(
      `   Will Show on Website: ${p.status === 'published' && p.featured ? '✅ YES' : '❌ NO'}`,
    )
  })

  console.log('\n' + '='.repeat(60))
  console.log('\n💡 To show on website:')
  console.log('   1. Set Status = "Published" (in sidebar)')
  console.log('   2. Check "Featured" checkbox')
  console.log('   3. Add at least one image in Gallery')
  console.log('   4. Set a price')
}

checkProducts().catch(console.error)
