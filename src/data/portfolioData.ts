export interface Project {
  id: string;
  title: string;
  category: 'advertising' | 'videography' | 'film' | 'ecommerce' | 'branding';
  categoryLabel: string;
  client: string;
  year: string;
  image?: string;
  description: string;
  metrics?: string;
  deliverables: string[];
  youtubeId?: string;
  isFolder?: boolean;
}

export interface PhotographyItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export const PHOTOGRAPHY_COLLECTION: PhotographyItem[] = [
  {
    id: 'photo-1',
    title: 'Karya Fotografi Tradisional & Pengrajin Bambu (Landscape)',
    category: 'Human Interest & Craft',
    image: 'https://static.wixstatic.com/media/e38e42_1db96be404b14f7b93ff46c3ffd18df5~mv2.jpg',
    description: 'Karya fotografi penataan ruang dan kerajinan anyaman bambu tradisional.'
  },
  {
    id: 'photo-2',
    title: 'Karya Fotografi Arsitektur & Portrait #1',
    category: 'Portrait & Space',
    image: 'https://static.wixstatic.com/media/e38e42_4986e1ad6784467380383c24f42f63f7~mv2.jpg',
    description: 'Karya fotografi komposisi visual arsitektur dan subjek membaca.'
  },
  {
    id: 'photo-3',
    title: 'Karya Fotografi Pengrajin Bambu (Portrait)',
    category: 'Human Interest & Craft',
    image: 'https://static.wixstatic.com/media/e38e42_1c89d85e0419405ea4f77a7dd1d0d2ab~mv2.jpg',
    description: 'Karya fotografi portrait vertikal pengrajin anyaman bambu.'
  },
  {
    id: 'photo-4',
    title: 'Karya Fotografi Arsitektur & Portrait #2',
    category: 'Portrait & Space',
    image: 'https://static.wixstatic.com/media/e38e42_22ce823808fa4f748c8a8d78825ab321~mv2.jpg',
    description: 'Karya fotografi komposisi visual sudut arsitektur geometris.'
  },
  {
    id: 'photo-5',
    title: 'Karya Fotografi Arsitektur & Portrait #3',
    category: 'Portrait & Space',
    image: 'https://static.wixstatic.com/media/e38e42_71d2930c516742c5a652956167017d47~mv2.jpg',
    description: 'Karya fotografi eksplorasi pencahayaan alami dan siluet arsitektural.'
  }
];

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  image: string;
  credentialId?: string;
  description: string;
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  highlights: string[];
}

export interface Education {
  period: string;
  school: string;
  degree: string;
  major: string;
  location: string;
  description: string;
}

export const PERSONAL_INFO = {
  name: 'Miftah Fauzi Saputra',
  title: 'Digital Advertising & Creative Marketing Specialist',
  tagline: 'Empowering brands through data-driven digital advertising & cinematic creative storytelling.',
  bioShort: 'Spesialis Digital Advertising & E-Commerce Marketing dengan pengalaman 3+ tahun di industri interior.',
  bioFull: 'Saya adalah seorang digital marketer yang sudah berpengalaman lebih dari 3 tahun di industri interior. Saya lulusan LP3I Tasikmalaya dengan program studi Digital Marketing. Sebagai spesialis digital advertising dan pemasaran e-commerce, saya mahir mengelola kampanye iklan di berbagai platform seperti Meta Ads, TikTok, Shopee, dan Tokopedia secara efektif. Didukung oleh minat besar dalam bidang videografi dan fotografi, saya konsisten menggabungkan kreativitas visual dengan strategi pemasaran yang terarah untuk menghasilkan solusi bisnis yang inovatif dan berorientasi pada hasil.',
  avatar: '/assets/aistudio/Gemini_Generated_Image_us15hrus15hrus15_6ec6b7ad.jpg',
  phone: '+6285523831120',
  phoneDisplay: '+6285-5238-31120',
  whatsappUrl: 'https://wa.me/6285523831120?text=Halo%20Miftah,%20saya%20tertarik%20berkolaborasi%20untuk%20layanan%20Digital%20Advertising%20&%20Marketing.',
  email: 'miftahfauzisaputra@gmail.com',
  address: 'Kp. Cibangkerong Rt 03 / Rw 02 Des. Mekarmulya, Kec. Malangbong, Kab. Garut 44133',
  cvUrl: '/assets/aistudio/CV_MIFTAH_FAUJI_SAPUTRA_2026_a3495c6a.pdf',
  cvFilename: 'CV_MIFTAH_FAUJI_SAPUTRA_2026.pdf',
  cvPreviewImage: '/assets/aistudio/cv_preview.png',
  socials: {
    linkedin: 'https://www.linkedin.com/in/miftah-fauzi-saputra',
    instagram: 'https://www.instagram.com/miftahfauzisaputra',
    facebook: 'https://www.facebook.com/miftahfauzisaputra'
  },
  stats: [
    { label: 'Pengalaman Industri', value: '3+ Thn' },
    { label: 'Average ROAS Iklan', value: '4.8x' },
    { label: 'Kampanye Terkelola', value: '50+' },
    { label: 'Platform Periklanan', value: '5 Meta/TikTok/GAds/Marketplace' }
  ]
};

export const SERVICES = [
  {
    id: 'digital-ads',
    number: '01',
    title: 'Digital Advertising & Media Buying',
    headline: 'Kampanye iklan berkinerja tinggi dengan ROAS optimal dan konversi terukur.',
    description: 'Perancangan, eksekusi, dan optimasi iklan digital omnichannel untuk brand interior, retail, dan UMKM berkembang.',
    capabilities: [
      'Meta Ads (Facebook & Instagram)',
      'TikTok Ads & Spark Ads',
      'Google Search & Performance Max',
      'Marketplace Ads (Shopee & Tokopedia)',
      'Pixel Tracking, CAPI & Custom Conversions',
      'A/B Testing Audience & Creative Ads'
    ]
  },
  {
    id: 'creative-production',
    number: '02',
    title: 'Creative Production & Videography',
    headline: 'Produksi visual sinematik yang memikat audiens dan menaikkan nilai brand.',
    description: 'Menggabungkan keahlian sinematografi dan videografi untuk menciptakan video komersial, reels pendek, dan materi visual iklan.',
    capabilities: [
      'Film Pendek & Commercial Video Production',
      'Camera Direction & Cinematic Lighting',
      'Video Editing (Adobe Premiere Pro)',
      'Color Grading & Audio Mastering',
      'Fotografi Produk Interior & Studio',
      'Social Media Reels & TikTok Formats'
    ]
  },
  {
    id: 'ecommerce-interior',
    number: '03',
    title: 'E-Commerce & Interior Growth',
    headline: 'Strategi pemasaran industri interior dan optimalisasi marketplace.',
    description: 'Pengalaman spesifik dalam memimpin pemasaran digital industri interior furniture, custom kitchen set, dan produk home living.',
    capabilities: [
      'Manajemen Toko Shopee & Tokopedia',
      'Lead Generation Proyek Interior',
      'Katalog Produk Digital & Merchandising',
      'Customer Funneling WhatsApp Sales',
      'Promosi Musiman & Flash Sale Campaigns',
      'Strategi Penawaran & Konsultasi Interior'
    ]
  },
  {
    id: 'analytics-strategy',
    number: '04',
    title: 'Brand Strategy & Analytics',
    headline: 'Keputusan pemasaran berbasis metrik data riil, bukan sekadar intuisi.',
    description: 'Monitoring menyeluruh terhadap return on ad spend (ROAS), cost per acquisition (CPA), dan pertumbuhan audiens loyal.',
    capabilities: [
      'Audit Kampanye & Funnel Performance',
      'Analisis ROAS & Biaya Akuisisi (CPA/CPL)',
      'Desain Identitas Visual (Photoshop, Canva)',
      'Copywriting Iklan Hipnotik & Call-to-Action',
      'Laporan Berkala & Rekomendasi Scale-up',
      'Konsultasi Pertumbuhan Brand Digital'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'interiorlab-instagram-organic',
    title: 'Brand Visual Identity & Social Media Organic — Instagram Interiorlab',
    category: 'branding',
    categoryLabel: 'Branding & Social Media',
    client: 'Interiorlab — Puri Kembangan, Jakarta Barat',
    year: '2026',
    image: 'https://static.wixstatic.com/media/e38e42_b1126c948fbb4c2b9116b1cb028ff637~mv2.png',
    description: 'Bukti pengelolaan akun Instagram resmi @interiorlab.creative. Bertanggung jawab atas tata letak feed grid interior premium, kurasi visual arsitektural, highlight kategori proyek hunian mewah, dan interaksi konsultasi calon klien.',
    metrics: 'Official Managed Account · Curated Luxury Grid · Lead Conversion',
    deliverables: ['Aesthetic Grid Planning', 'Visual Guidelines & Typography', 'Highlight Story Architecture', 'Creative Content Scheduling']
  },
  {
    id: 'interiorlab-tiktok-organic',
    title: 'Brand Visual Identity & Social Media Organic — TikTok Interiorlab',
    category: 'branding',
    categoryLabel: 'Branding & Social Media',
    client: 'Interiorlab — Puri Kembangan, Jakarta Barat',
    year: '2026',
    image: 'https://static.wixstatic.com/media/e38e42_59909ba55f69415ca710e85639a56c1d~mv2.png',
    description: 'Bukti pengelolaan akun TikTok resmi @interiorlab.creative secara organik. Memproduksi dan mengelola konten video room tour, showcase pengerjaan interior custom, serta interaksi audiens untuk membangun brand trust dan awareness.',
    metrics: 'Official Account Admin · Short-Form Video Showcase · Organic Growth',
    deliverables: ['TikTok Account Management', 'Short-Form Video Production', 'Trend & Sound Curation', 'Caption & Community Engagement']
  },
  {
    id: '7furniture-social-organic',
    title: 'Brand Visual Identity & Social Media Organic — 7 Furniture',
    category: 'branding',
    categoryLabel: 'Branding & Social Media',
    client: '7 Furniture — Indihiang, Tasikmalaya',
    year: '2023 - 2026',
    image: 'https://static.wixstatic.com/media/e38e42_6989f376c318449f8058a41220b1d53e~mv2.png',
    description: 'Bukti pengelolaan akun media sosial resmi Instagram @7.furniture (14K+ followers, 3.700+ postingan). Bertanggung jawab atas visual identity, kurasi foto/video proyek interior custom & kitchen set, highlight stories, serta pertumbuhan interaksi audiens secara organik.',
    metrics: '14K+ Followers · 3.700+ Posts · Managed Official Account',
    deliverables: ['Instagram Feed Architecture', 'Visual Brand Identity', 'Content Curation & Story Highlights', 'Organic Engagement & Lead Generation']
  },
  {
    id: 'folder-hasil-fotografi',
    title: 'Folder: Hasil Fotografi Saya',
    category: 'videography',
    categoryLabel: 'Folder Fotografi',
    client: 'Koleksi Dokumentasi Visual & Interior',
    year: '2020 - 2026',
    isFolder: true,
    description: 'Satu folder terpadu yang merangkum seluruh hasil karya fotografi komersial, interior space styling, detail material produk custom, serta penataan lighting studio karya Miftah Fauzi Saputra.',
    metrics: 'Folder Album · 5 Foto Resolusi Tinggi',
    deliverables: ['Interior Space Photography', 'Product & Craft Staging', 'Cinematic Composition & Lighting', 'Master High-Res Deliverables']
  },
  {
    id: 'film-karya',
    title: 'HASIL KARYA FILM: Sinematografi & Narrative Direction',
    category: 'film',
    categoryLabel: 'Film Pendek & Sinematografi',
    client: 'Independent Creative Film Production',
    year: '2023',
    description: 'Karya film sinematik orisinal yang memadukan visual storytelling, komposisi artistik kamera, dan atmosfer dramatis. Menampilkan kedalaman pencahayaan dan narasi emosional terarah.',
    metrics: 'Official Showcase · YouTube Embedded Preview',
    deliverables: ['Director of Photography', 'Screenplay & Blocking', 'Video Editing', 'Color Grading'],
    youtubeId: 'cfSbwmieTaQ'
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: 'cert-1',
    title: 'Certificate of Competence: Marketing Fundamental',
    issuer: 'MarkPlus Institute',
    year: '2022',
    image: 'https://static.wixstatic.com/media/e38e42_21e5c5be15324a76a27b426e8eb80766~mv2.jpg',
    credentialId: 'MI-MICP-12851-VII-2022',
    description: 'Sertifikat kompetensi resmi Marketing Fundamental yang diterbitkan oleh MarkPlus Institute kepada Miftah Fauzi Saputra, disahkan oleh Chief Executive Officer MarkPlus, Inc. (Jacky Mussry).'
  },
  {
    id: 'cert-2',
    title: 'Transkrip Penilaian Kompetensi: Marketing Fundamental',
    issuer: 'MarkPlus Institute',
    year: '2022',
    image: 'https://static.wixstatic.com/media/e38e42_7e3487fbb7784ffcaaf45b3d230ec8c8~mv2.jpg',
    credentialId: 'MI-MICP-12851-VII-2022',
    description: 'Lembar transkrip resmi penilaian kelulusan program Marketing Fundamental mencakup Analyzing Marketing Outlook, Formulating Marketing Strategy, Designing Marketing Tactic, dan Enhancing Marketing Value dengan predikat Competent.'
  },
  {
    id: 'cert-3',
    title: 'Juara 1 Lomba Photography Se-Jawa Barat',
    issuer: 'Fakultas Ekonomi Universitas Galuh (HIMMAN)',
    year: '2022',
    image: 'https://static.wixstatic.com/media/e38e42_eb99a8279a204492a89faf644ef4fddc~mv2.jpg',
    credentialId: '004/P/PAN-MC/VII/2022',
    description: 'Penghargaan Juara 1 Lomba Photography tingkat Se-Jawa Barat dalam ajang Management Competition Season 3 ("Make An Impact and Create Solidarity") yang diselenggarakan oleh Himpunan Mahasiswa Manajemen Fakultas Ekonomi Universitas Galuh.'
  },
  {
    id: 'cert-4',
    title: 'Juara Terbaik Festival Film Pendek ("Bathil")',
    issuer: 'Politeknik LP3I Kampus Tasikmalaya',
    year: '2023',
    image: 'https://static.wixstatic.com/media/e38e42_ded586bc49074aa09e3103d0b7af4907~mv2.jpg',
    credentialId: 'LP3I-FEST-BATHIL-2023',
    description: 'Piagam sertifikat penghargaan Juara Terbaik kategori Festival Film Pendek untuk karya film "Bathil" pada kegiatan LP3I Festival bertema "Generasi Muda Berkarya Bersatu dalam Keberagaman Budaya" di Politeknik LP3I Tasikmalaya.'
  },
  {
    id: 'cert-5',
    title: 'Sertifikat Uji Kompetensi: Tenaga Operator Komputer',
    issuer: 'Lembaga Sertifikasi Profesi (LSP) LP3I',
    year: '2021',
    image: 'https://static.wixstatic.com/media/e38e42_f84c485c1e3e4138bef9f6fab594e7b9~mv2.jpg',
    credentialId: 'No. LSP.025.05.09.10.21.004780',
    description: 'Sertifikat resmi kelulusan Uji Kompetensi untuk kualifikasi Tenaga Operator Komputer pada bidang pekerjaan Operator Komputer yang diterbitkan oleh Lembaga Sertifikasi Profesi (LSP) LP3I di Jakarta.'
  },
  {
    id: 'cert-6',
    title: 'Sertifikat Uji Kompetensi Keahlian Multimedia',
    issuer: 'SMK Negeri 7 Garut & Garut Creative Hub',
    year: '2020',
    image: 'https://static.wixstatic.com/media/e38e42_d0b35e22d4ad40418dd9472b43aceef4~mv2.jpg',
    credentialId: '01/UKK/I/2020 · 02.17.K13.0107.2154.0360.9',
    description: 'Sertifikat resmi kompetensi keahlian Multimedia menyatakan lulus Ujian Nasional Kompetensi Keahlian (audio-visual, kamera, pengeditan dan desain) yang diselenggarakan bersama Dinas Pendidikan Jawa Barat dan Garut Creative Hub.'
  },
  {
    id: 'cert-7',
    title: 'Sertifikat Kompetensi BNSP: Tenaga Operator Komputer',
    issuer: 'Badan Nasional Sertifikasi Profesi (BNSP)',
    year: '2021',
    image: 'https://static.wixstatic.com/media/e38e42_edcfd92cc45f4bd28ab0c806ee12d7bd~mv2.jpg',
    credentialId: 'No. 62090 3122 3 0005469 2021 · Reg TIK 589 05469 2021',
    description: 'Sertifikat kompetensi resmi berlisensi Garuda Emas dari Badan Nasional Sertifikasi Profesi (BNSP) Republik Indonesia melalui LSP LP3I, menyatakan kompeten pada kualifikasi Tenaga Operator Komputer.'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    period: '2026 - Sekarang',
    role: 'Digital Marketer & Advertising Specialist',
    company: 'Interiorlab',
    location: 'Puri Kembangan, Jakarta Barat',
    type: 'Full-time / In-house Specialist',
    highlights: [
      'Memimpin perancangan dan implementasi kampanye periklanan digital omnichannel untuk brand interior premium.',
      'Mengoptimalkan Meta Ads dan TikTok Ads terfokus pada akuisisi lead klien residensial high-end dan komersial.',
      'Mengembangkan strategi digital content & storytelling spesifik industri interior (showcase transformasi ruangan before-after dan edukasi material custom) untuk membangun brand awareness serta kepercayaan calon klien.',
      'Mengoptimalkan digital marketing funnel dari periklanan media sosial menuju saluran konsultasi desain, guna meningkatkan konversi prospek menjadi booking survei lokasi proyek interior.'
    ]
  },
  {
    period: '2023 - 2026',
    role: 'Digital Marketing',
    company: '7 Furniture',
    location: 'Indihiang, Tasikmalaya',
    type: 'Full-time (3 Tahun Pengalaman)',
    highlights: [
      'Mengelola social media organik mulai dari merencanakan konsep konten, produksi konten, proses editing video & foto, hingga posting serta membangun engagement dengan audiens.',
      'Menjalankan dan mengoptimalkan kampanye Meta Ads (Facebook & Instagram Ads), mulai dari riset target audiens, penyusunan materi visual & copywriting iklan, hingga monitoring efisiensi biaya konversi lead.',
      'Melakukan pengambilan footage (foto & video) langsung di workshop maupun lokasi instalasi interior, mencakup penataan sudut kamera (angle), pencahayaan sinematik, dan dokumentasi detail produk furniture custom.',
      'Mendesain aset design grafis untuk materi promosi digital, feed media sosial, banner penawaran khusus, e-katalog produk, hingga cover video reels dengan identitas visual yang profesional.'
    ]
  },
  {
    period: '2022 - 2022',
    role: 'Magang Digital Marketing',
    company: 'PT. Sinergi Berkah Insani',
    location: 'Pancalang, Kuningan',
    type: 'Internship',
    highlights: [
      'Menyusun strategi konten media sosial dan riset tren audiens digital.',
      'Melakukan setting campaign iklan perdana serta analisis performa CTR (Click-Through Rate) dan CPC.',
      'Membantu penyusunan laporan analitik bulanan dan rekomendasi perbaikan konten visual.'
    ]
  },
  {
    period: '2019 - 2019',
    role: 'Magang Perfilman, Videography, Photography & Graphic Design',
    company: 'ZBX Corporation',
    location: 'Geger Kalong, Bandung',
    type: 'Creative Internship',
    highlights: [
      'Terlibat langsung dalam pra-produksi, produksi syuting, hingga pasca-produksi karya film dan video promosi.',
      'Mengoperasikan kamera sinematik, lighting rig, dan sound capture profesional di lapangan.',
      'Melakukan editing video menggunakan Adobe Premiere Pro dan color grading untuk hasil visual sinematik.',
      'Mendesain aset grafis untuk materi poster, branding visual, dan publikasi digital.'
    ]
  },
  {
    period: '2018 - 2019',
    role: 'Freelance Creative & Digital Marketer',
    company: 'Independent Professional',
    location: 'Malangbong, Garut',
    type: 'Freelance',
    highlights: [
      'Menyediakan layanan jasa video editing, fotografi komersial, dan perancangan materi promosi untuk pelaku UMKM lokal.',
      'Membantu klien membangun kehadiran digital di media sosial Instagram dan Facebook.'
    ]
  }
];

export const EDUCATION_LIST: Education[] = [
  {
    period: '2020 - 2023',
    school: 'Politeknik LP3I Tasikmalaya',
    degree: 'Diploma (D3)',
    major: 'Digital Marketing',
    location: 'Tasikmalaya, Jawa Barat',
    description: 'Menyelesaikan studi kejuruan Digital Marketing dengan penekanan pada strategi periklanan berbayar, riset pasar digital, e-commerce ecosystem, manajemen kampanye, dan analisis data konversi.'
  },
  {
    period: '2018 - 2020',
    school: 'SMKN 7 Garut',
    degree: 'Sekolah Menengah Kejuruan (SMK)',
    major: 'Multimedia',
    location: 'Malangbong, Garut',
    description: 'Mendalami dasar keilmuan multimedia audio-visual, operasional kamera sinematografi, teknik tata cahaya, pengeditan video digital, fotografi studio, serta desain grafis komersial.'
  }
];

export const SKILLS_CATEGORIES = [
  {
    category: 'Periklanan Digital (Paid Advertising)',
    items: ['Meta Ads (Facebook & Instagram)', 'TikTok Ads & Spark Ads', 'Google Ads (Search & PMax)', 'Shopee Ads', 'Tokopedia TopAds', 'Pixel & CAPI Setup', 'A/B Testing Funnel', 'Audience Retargeting']
  },
  {
    category: 'Produksi Kreatif & Software',
    items: ['Adobe Premiere Pro', 'Adobe Photoshop', 'Adobe Lightroom', 'CorelDraw', 'Canva Pro', 'Videography Sinematik', 'Commercial Photography', 'Color Grading']
  },
  {
    category: 'E-Commerce & Industri Interior',
    items: ['Pemasaran Furniture & Interior', 'Manajemen Marketplace', 'Lead Gen WhatsApp Sales', 'Product Cataloging', 'Merchandising', 'Promo Campaign Strategy']
  },
  {
    category: 'Analitika & Metriks Bisnis',
    items: ['ROAS (Return on Ad Spend)', 'CPA & CPL Optimization', 'Google Analytics 4', 'Conversion Rate (CR)', 'Microsoft Office (Excel/Sheets)', 'Reporting Performance']
  }
];
