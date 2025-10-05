// Example products for JUNO demo
// These will be replaced when users set up their own Payload CMS

export const exampleProducts = [
  {
    id: '1',
    title: 'Premium Wireless Headphones',
    slug: 'premium-wireless-headphones',
    price: 299,
    description: 'High-quality wireless headphones with noise cancellation and premium sound quality. Perfect for professionals and audiophiles.',
    images: [
      {
        url: '/placeholder-products/headphones-1.jpg',
        alt: 'Premium Wireless Headphones'
      }
    ],
    category: 'Electronics',
    featured: true,
    inStock: true,
    variants: [
      { name: 'Color', options: ['Black', 'White', 'Silver'] },
      { name: 'Size', options: ['Standard'] }
    ]
  },
  {
    id: '2',
    title: 'Minimalist Laptop Stand',
    slug: 'minimalist-laptop-stand',
    price: 89,
    description: 'Ergonomic aluminum laptop stand designed for productivity. Adjustable height and angle for optimal comfort.',
    images: [
      {
        url: '/placeholder-products/laptop-stand-1.jpg',
        alt: 'Minimalist Laptop Stand'
      }
    ],
    category: 'Accessories',
    featured: true,
    inStock: true,
    variants: [
      { name: 'Color', options: ['Silver', 'Space Gray'] },
      { name: 'Material', options: ['Aluminum'] }
    ]
  },
  {
    id: '3',
    title: 'Smart Fitness Watch',
    slug: 'smart-fitness-watch',
    price: 199,
    description: 'Advanced fitness tracking with heart rate monitoring, GPS, and 7-day battery life. Waterproof design for all activities.',
    images: [
      {
        url: '/placeholder-products/smartwatch-1.jpg',
        alt: 'Smart Fitness Watch'
      }
    ],
    category: 'Electronics',
    featured: true,
    inStock: true,
    variants: [
      { name: 'Size', options: ['40mm', '44mm'] },
      { name: 'Band', options: ['Sport Band', 'Leather Band'] }
    ]
  },
  {
    id: '4',
    title: 'Premium Coffee Maker',
    slug: 'premium-coffee-maker',
    price: 149,
    description: 'Professional-grade coffee maker with precision temperature control and built-in grinder. Perfect for coffee enthusiasts.',
    images: [
      {
        url: '/placeholder-products/coffee-maker-1.jpg',
        alt: 'Premium Coffee Maker'
      }
    ],
    category: 'Kitchen',
    featured: false,
    inStock: true,
    variants: [
      { name: 'Capacity', options: ['6 Cups', '12 Cups'] },
      { name: 'Color', options: ['Black', 'Stainless Steel'] }
    ]
  },
  {
    id: '5',
    title: 'Ergonomic Office Chair',
    slug: 'ergonomic-office-chair',
    price: 399,
    description: 'High-quality ergonomic office chair with lumbar support, adjustable height, and breathable mesh back.',
    images: [
      {
        url: '/placeholder-products/office-chair-1.jpg',
        alt: 'Ergonomic Office Chair'
      }
    ],
    category: 'Furniture',
    featured: false,
    inStock: true,
    variants: [
      { name: 'Color', options: ['Black', 'Gray', 'Blue'] },
      { name: 'Size', options: ['Standard', 'Large'] }
    ]
  },
  {
    id: '6',
    title: 'Wireless Charging Pad',
    slug: 'wireless-charging-pad',
    price: 49,
    description: 'Fast wireless charging pad compatible with all Qi-enabled devices. Sleek design with LED indicator.',
    images: [
      {
        url: '/placeholder-products/wireless-charger-1.jpg',
        alt: 'Wireless Charging Pad'
      }
    ],
    category: 'Accessories',
    featured: false,
    inStock: true,
    variants: [
      { name: 'Color', options: ['White', 'Black'] },
      { name: 'Power', options: ['10W', '15W'] }
    ]
  }
]

export const exampleCategories = [
  { id: '1', name: 'Electronics', slug: 'electronics' },
  { id: '2', name: 'Accessories', slug: 'accessories' },
  { id: '3', name: 'Kitchen', slug: 'kitchen' },
  { id: '4', name: 'Furniture', slug: 'furniture' }
]
