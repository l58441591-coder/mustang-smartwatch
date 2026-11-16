/**
 * Single source of truth for the storefront's product content.
 *
 * Specifications below were checked against GoBoult's official Mustang Muscle
 * product page (goboult.co.in/products/mustang-muscle-frost) and the official
 * Amazon.in listing in November 2026. Change values here, not in components.
 */

/** Builds a Netlify Image CDN URL for a file in /public/img. */
export function cdn(file: string, width: number, quality = 80) {
  return `/.netlify/images?url=/img/${file}&w=${width}&fm=webp&q=${quality}`
}

/** Responsive srcset for a /public/img file, capped at the source's native width. */
export function srcSet(file: string, nativeWidth: number, widths = [480, 800, 1200]) {
  const list = widths.filter((w) => w < nativeWidth)
  list.push(nativeWidth)
  return list.map((w) => `${cdn(file, w)} ${w}w`).join(', ')
}

export const pricing = {
  currency: '₹',
  /** Launch price charged on this storefront. */
  price: 799,
  /** Regular price the launch price is compared against. */
  comparePrice: 2999,
  /** Delivery charge per order. 0 renders as "Free". */
  shipping: 0,
  maxQuantity: 3,
}

export const discountPercent = Math.round(
  ((pricing.comparePrice - pricing.price) / pricing.comparePrice) * 100,
)

export function formatINR(value: number) {
  return `${pricing.currency}${value.toLocaleString('en-IN')}`
}

export type Photo = {
  file: string
  width: number
  height: number
  label: string
  view: string
  alt: string
}

/** Supplied product photography. Never remove entries; add new ones alongside. */
export const photos: Photo[] = [
  {
    file: 'partnership.jpg',
    width: 1114,
    height: 975,
    label: 'Signature',
    view: 'Hero view',
    alt: 'Mustang Limited Edition smartwatch with gold case, rotor crown and racing blue strap beside the GoBoult × Mustang partnership logo',
  },
  {
    file: 'front-strap.jpg',
    width: 1184,
    height: 896,
    label: 'Front',
    view: 'Front & dual straps',
    alt: 'Front view of the Mustang smartwatch dial with racing blue and dual-stripe white straps',
  },
  {
    file: 'side-crown.jpg',
    width: 1084,
    height: 540,
    label: 'Side',
    view: 'Side profile & crown',
    alt: 'Side profile of the gold Mustang smartwatch case showing the rotor-style crown against a car silhouette',
  },
  {
    file: 'extra-strap.jpg',
    width: 348,
    height: 258,
    label: 'Strap',
    view: 'Extra strap',
    alt: 'Mustang smartwatch on a white strap with an extra racing blue strap',
  },
  {
    file: 'charging-dock.jpg',
    width: 554,
    height: 395,
    label: 'Close-up',
    view: 'Crown & magnetic charger',
    alt: 'Close-up of the Mustang smartwatch case and crown resting on its glowing magnetic charger',
  },
  {
    file: 'sports-modes.jpg',
    width: 554,
    height: 462,
    label: 'Display',
    view: 'Sports modes & mini games',
    alt: 'Mustang smartwatch showing its sports mode menu next to built-in mini game icons',
  },
  {
    file: 'collector-box.jpg',
    width: 1112,
    height: 656,
    label: 'Edition',
    view: 'Mustang edition packaging',
    alt: 'Mustang edition smartwatch packaging with a blue strap and Mustang heritage stickers',
  },
]

export const photo = (file: string) => photos.find((p) => p.file === file)!

export type StrapOption = {
  id: string
  name: string
  detail: string
  swatch: [string, string]
}

export const strapOptions: StrapOption[] = [
  {
    id: 'frost',
    name: 'Frost Edition',
    detail: 'Dual-stripe white strap + extra racing blue strap',
    swatch: ['#f4f1ea', '#1f4fa8'],
  },
  {
    id: 'black-fury',
    name: 'Black Fury Edition',
    detail: 'Stealth black strap + extra strap',
    swatch: ['#111216', '#c9a35e'],
  },
]

export type Spec = { group: string; label: string; value: string }

export const specs: Spec[] = [
  { group: 'Display', label: 'Screen size', value: '2.01" (5.10 cm) 3D curved' },
  { group: 'Display', label: 'Panel type', value: 'TFT' },
  { group: 'Display', label: 'Resolution', value: '320 × 385 px' },
  { group: 'Display', label: 'Brightness', value: 'Up to 600 nits' },
  { group: 'Display', label: 'Watch faces', value: '150+ cloud & custom faces' },
  { group: 'Control', label: 'Crown', value: 'Functional rotating crown' },
  { group: 'Control', label: 'Navigation', value: 'Menus, faces & scrolling via crown' },
  { group: 'Connectivity', label: 'Bluetooth', value: 'Single-chip BT v5.3' },
  { group: 'Connectivity', label: 'Calling', value: 'BT calling, built-in speaker & mic' },
  { group: 'Connectivity', label: 'Companion app', value: 'GoBoult Fit' },
  { group: 'Power', label: 'Battery', value: '300 mAh' },
  { group: 'Power', label: 'Battery life', value: 'Up to 7 days' },
  { group: 'Power', label: 'Charging', value: 'Fast charging, magnetic charger' },
  { group: 'Health & fitness', label: 'Sports modes', value: '120+' },
  {
    group: 'Health & fitness',
    label: 'Health monitoring',
    value: 'Heart rate, SpO2, blood pressure, stress, sleep',
  },
  { group: 'Health & fitness', label: 'Wellness', value: 'Meditation, water & sedentary reminders' },
  { group: 'Build', label: 'Water resistance', value: 'IP68' },
  { group: 'Build', label: 'Case finish', value: 'Gold-tone metallic case' },
  { group: 'Build', label: 'Warranty', value: '1 year manufacturer warranty' },
]

export const specSource = {
  name: 'GoBoult official product page',
  url: 'https://goboult.co.in/products/mustang-muscle-frost',
}

/** Optional storefront contact details. Leave empty to hide a row. */
export const contact = {
  email: '',
  phone: '',
  hours: '',
  manufacturerSupport: 'https://goboult.co.in',
}

export const indianStates = [
  'Andaman and Nicobar Islands',
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chandigarh',
  'Chhattisgarh',
  'Dadra and Nagar Haveli and Daman and Diu',
  'Delhi',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jammu and Kashmir',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Ladakh',
  'Lakshadweep',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Puducherry',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',
]

export type Policy = { id: string; title: string; body: string[] }

/** Draft store policies. Review with your business details before launch. */
export const policies: Policy[] = [
  {
    id: 'about',
    title: 'About Us',
    body: [
      'This storefront presents the Mustang Limited Edition smartwatch, a racing-inspired wearable from the official GoBoult × Mustang collaboration.',
      'We focus on one product and on a straightforward ordering experience: you submit an order request, we confirm it with you personally, and then arrange delivery.',
    ],
  },
  {
    id: 'shipping',
    title: 'Shipping Policy',
    body: [
      'We deliver across India. Every order request is confirmed with you by phone before it is dispatched.',
      'Estimated delivery time depends on your pincode and is shared with you when your order is confirmed. You receive courier tracking details on the mobile number you provide.',
      'Delivery charges, if any, are shown in the order summary before you submit your request.',
    ],
  },
  {
    id: 'returns',
    title: 'Return Policy',
    body: [
      'If your watch arrives damaged, defective or different from what you ordered, contact us within 7 days of delivery with your order reference and photos of the item and packaging.',
      'Approved returns are collected or replaced once the item is inspected. Items must be returned with the original box, straps, charger and accessories.',
      'Manufacturing defects after this period are covered by the 1-year manufacturer warranty, handled through GoBoult support.',
    ],
  },
  {
    id: 'privacy',
    title: 'Privacy Policy',
    body: [
      'We collect only the details needed to process your order: name, mobile number, delivery address, city, state, pincode and product selection.',
      'Your details are used to confirm, deliver and support your order. We do not sell your personal information.',
      'You can ask us to correct or delete your details at any time by contacting us with your order reference.',
    ],
  },
  {
    id: 'terms',
    title: 'Terms & Conditions',
    body: [
      'Submitting the order form sends an order request. It is not a payment and does not by itself form a contract of sale; an order is accepted only once we confirm it with you.',
      'Prices, launch offers and availability may change without notice. Limited edition stock is allocated in the order that requests are confirmed.',
      'Product specifications are published by the manufacturer. Health features are for general wellness only and are not a medical device.',
      'Mustang and the running horse logo are trademarks of their respective owner, used in this collaboration under licence.',
    ],
  },
]
