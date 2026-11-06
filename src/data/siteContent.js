export const servicesList = [
  {
    id: 'air-freight',
    title: 'Air Freight',
    image: '/images/services/air-freight.webp',
    width: 496,
    height: 341,
    paragraphs: [
      "We are India's leading air freight forwarder, offering complete import and export logistics. Our volume advantage ensures competitive pricing and guaranteed space.",
      'Our expert route planners optimize transit, carrier selection, and cargo handling. We reduce costs and transit time with on-demand pickup, drop-off, and warehousing.',
    ],
    tags: ['Speed', 'Efficiency', 'Reliability', 'Affordability'],
  },
  {
    id: 'sea-freight',
    title: 'Sea Freight',
    image: '/images/services/sea-freight.webp',
    width: 499,
    height: 341,
    paragraphs: [
      'We offer global sea freight services via top shipping lines. Our team understands your products, transit needs, and budget.',
      'With decades of experience, we plan, monitor, and manage shipments, ensuring compliance.',
      'We provide flexible FCL scheduling and cost-efficient LCL options. On-demand pickup, drop-off, and warehousing help cut costs and transit time.',
    ],
    tags: ['Flexibility', 'Cost-Effective', 'Scalability', 'Expertise'],
  },
  {
    id: 'multi-modal-transport',
    title: 'Multi Modal Transport',
    image: '/images/services/multi-modal.webp',
    width: 505,
    height: 341,
    paragraphs: [
      'Every shipment is unique, so we offer multiple affordable transport options.',
      'Along with air and sea freight, we provide multimodal transport via our global network.',
      'Our tailored solutions enable real-time cargo tracking. We streamline your supply chain as your single point of contact.',
    ],
    tags: ['Integration', 'Efficiency', 'Flexibility', 'Convenience'],
  },
  {
    id: 'project-cargo',
    title: 'Project Cargo',
    image: '/images/services/project-cargo.webp',
    width: 469,
    height: 341,
    paragraphs: [
      'We understand the precise needs of customers and shipping lines, ensuring cargo is stuffed, lashed, and choked to specifications.',
      'We handle logistics, clearance, and oversized or breakbulk cargo with expertise.',
      'We transport over-dimensional cargo using open tops, flat racks, and flatbeds.',
    ],
    tags: ['Precision', 'Expertise', 'Oversized', 'Security'],
  },
  {
    id: 'custom-broking',
    title: 'Custom Broking',
    image: '/images/services/custom-broking.webp',
    width: 448,
    height: 341,
    paragraphs: [
      'Our licensed customs agents know domestic and international regulations.',
      'With 30+ years of experience, we have strong ties with authorities and handle all clearance challenges.',
      'We ensure smooth, timely, and transparent cargo clearance. Our experts get your documentation right the first time.',
    ],
    tags: ['Accuracy', 'Compliance', 'Speed', 'Expertise'],
  },
  {
    id: 'warehouse-and-fleet',
    title: 'Transit Warehouse And Fleet',
    image: '/images/services/warehouse.webp',
    width: 560,
    height: 341,
    paragraphs: [
      'Our transit warehouse is near the International Air Cargo Complex and Ocean Ports.',
      'We offer storage for all cargo types, including temperature-controlled (15–25°C, 2–8°C), DGR, and general cargo zones.',
      'We provide specialized packaging, palletizing, and shrink wrapping.',
      'Our reefer and general trucks ensure smooth nationwide transportation.',
    ],
    tags: ['Specialized', 'Accessible', 'Versatile', 'Nationwide'],
  },
]

export const whyChooseReasons = [
  {
    title: 'Comprehensive Solutions',
    description:
      'Full-spectrum logistics services including air, sea, and multimodal transport for seamless handling of your cargo.',
    icon: '/images/icons/why-solutions.png',
  },
  {
    title: 'Expertise and Experience',
    description:
      'Over 30+ years of experience with skilled customs agents ensuring accurate clearance and secure delivery.',
    icon: '/images/icons/why-expertise.png',
  },
  {
    title: 'State-of-the-Art Facilities',
    description:
      'Advanced transit warehouse with specialized storage and a fleet of reefer and general trucks for efficient nationwide transport.',
    icon: '/images/icons/why-facilities.png',
  },
]

export const reviews = [
  {
    id: 'lufthansa',
    company: 'Lufthansa Cargo',
    color: '#FFAD00',
    tagline: 'Networking the world.',
    text: 'Penta Freight India was founded 25 years ago and has been a highly valued and reliable partner of Lufthansa Cargo since then. We know that they always stand by their commitment, which makes a meaningful difference to our business. Their continuous high focus on customer service and their strive towards individual solutions are key to staying dynamic and competitive in the market. Penta Freight is a pioneer in various ways: They were amongst the first forwarders to become our Premium Partner and so far they are the only one in India....',
    author: 'Frank Naeve',
    role: 'Vice President Asia Pacific',
    column: 'left',
  },
  {
    id: 'sun-pharma',
    company: 'Sun Pharma',
    color: '#E87722',
    tagline: null,
    text: "We highly regard Penta Freight's professionalism and knowledge in the freight field. Their team takes the work load and worry off our shoulders. For about two decades we have been satisfied by the flexible, reliable and trustworthy service and excellent quality of work. One key feature that Penta Freight portrays is that they understand our needs and put their best efforts in making thing possible. They have continued to innovate and change with the freight industry.",
    author: 'Makarand Sane',
    role: 'General Manager Head - Export Logistics',
    column: 'right',
  },
  {
    id: 'watson',
    company: 'Watson Pharmaceuticals',
    color: '#0057A8',
    tagline: null,
    text: "Penta Freight has been one of our export LSP's for several years and our experience with them has been consistently good. Besides having strong relationships with airlines to obtain competitive rates, Penta Freight has the ability to get things done.",
    author: 'Operations Head',
    role: 'Export Manager',
    column: 'left',
  },
  {
    id: 'lufthansa-2',
    company: 'Lufthansa Cargo',
    color: '#FFAD00',
    tagline: 'Networking the world.',
    text: 'We know that they always stand by their commitment, which makes a meaningful difference to our business. Penta Freight is a pioneer in various ways: They were amongst the first forwarders to become our Premium Partner and so far they are the only one in India.',
    author: 'Frank Naeve',
    role: 'Vice President Asia Pacific',
    column: 'right',
  },
]

/** Split reviews into left / right columns for masonry layout */
export const reviewColumns = {
  left: reviews.filter((r) => r.column === 'left'),
  right: reviews.filter((r) => r.column === 'right'),
}

export const indiaOffices = [
  {
    city: 'Mumbai',
    address:
      "902, 'A' Wing, Times Square, Andheri-Kurla Road, Marol, Andheri (East), Mumbai 400 059",
    phone: '+91 22-6222-6222',
  },
  {
    city: 'Ahmedabad',
    address: 'D21 The Address, True Value West Gate, SG highway, Ahmedabad 380 009',
    phone: '+91 7940227900',
  },
  {
    city: 'Bengaluru',
    address: '205, 2nd floor, Connection point H.A.L Airport Exit Road, Bangalore 560 017',
    phone: '+91 80-4112-5590',
  },
  {
    city: 'Chennai',
    address:
      'Flat no.A1, 1st floor, No 24 Vembuli Amman koil Street, Palavanthangal Chennai- 600 114',
    phone: '+91-44-22241462/ 1464',
  },
  {
    city: 'Delhi',
    address:
      'Penta Freight Pvt. Ltd. Khasra No. 10/1/10/2, 11/5/1, No. 4, Samalkha, Old Delhi – Gurgaon Road, Opposite Primary School, New Delhi – 110 037',
    phone: '+91 11-4078-2222',
  },
  {
    city: 'Hyderabad',
    address:
      'G-27 & 28, Cargo Satellite Building, Rajiv Gandhi International Airport, Shamshabad 501 218, Telangana, India',
    phone: '+91 40-2400-4048',
  },
  {
    city: 'Kolkata',
    address:
      '131, Jangalpur Road, near airport, Gate No. 3, Motilal Colony, P.O Rajbari, Kolkata 700 081, West Bengal',
    phone: '+91 33-2514-7089',
  },
]
