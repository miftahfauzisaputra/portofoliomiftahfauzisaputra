import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Check, Copy, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    service: 'Meta & TikTok Ads',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.message) return;

    // Simulate sending and trigger WhatsApp option as fallback
    setIsSubmitted(true);
  };

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <section id="kontak" className="py-24 relative border-t border-zinc-900 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-3">
              <span className="w-2 h-2 rounded-full bg-red-600" />
              <span>Mari Berkolaborasi</span>
            </div>
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              LET&#39;S CONQUER <br />
              <span className="text-zinc-500 font-light">YOUR CAMPAIGNS.</span>
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md font-normal leading-relaxed">
            Siap mengakselerasi brand interior, e-commerce, atau bisnis Anda melalui strategi periklanan terarah dan visual memikat.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Cards & Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Highlight Box */}
            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-red-950/30 border border-red-900/40 text-red-500 flex items-center justify-center font-bold">
                  <MessageCircle className="w-5 h-5 text-red-500" />
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-red-400 px-2.5 py-0.5 rounded bg-red-950/30 border border-red-900/40">
                  Respon Cepat
                </span>
              </div>

              <h3 className="font-['Space_Grotesk'] text-lg font-bold text-white mb-1">
                Chat Langsung via WhatsApp
              </h3>
              <p className="text-xs text-zinc-400 mb-4 leading-relaxed font-normal">
                Konsultasikan kebutuhan kampanye digital marketing, setup iklan, atau kolaborasi visual interior sekarang.
              </p>

              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full bg-red-600 text-white hover:bg-red-700 font-bold text-xs uppercase tracking-wider py-3 rounded transition-colors shadow-lg shadow-red-950/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
              >
                <span>Buka WhatsApp (+6285523831120)</span>
                <ArrowUpRight className="w-4 h-4 text-white" />
              </a>
            </div>

            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-zinc-900 text-red-500 border border-zinc-800 shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Email Resmi</p>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm sm:text-base font-bold text-white hover:text-red-400 transition-colors break-all"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                  <p className="text-[11px] text-zinc-400 mt-0.5">Terbuka untuk penawaran proyek &amp; agensi</p>
                </div>
              </div>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors shrink-0 border border-zinc-800"
                title="Salin Email"
              >
                {copiedType === 'email' ? <Check className="w-4 h-4 text-red-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-zinc-900 text-red-500 border border-zinc-800 shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Telepon / Kontak</p>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="text-sm sm:text-base font-bold text-white hover:text-red-400 transition-colors"
                  >
                    {PERSONAL_INFO.phoneDisplay}
                  </a>
                  <p className="text-[11px] text-zinc-400 mt-0.5">Senin - Sabtu (08:00 - 18:00 WIB)</p>
                </div>
              </div>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors shrink-0 border border-zinc-800"
                title="Salin Nomor"
              >
                {copiedType === 'phone' ? <Check className="w-4 h-4 text-red-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-zinc-900 text-red-500 border border-zinc-800 shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Alamat Domisili</p>
                <p className="text-sm font-medium text-white mt-1 leading-relaxed">
                  {PERSONAL_INFO.address}
                </p>
                <p className="text-[11px] text-zinc-400 mt-1">
                  Jawa Barat, Indonesia · Fleksibel Remote &amp; On-Site Jabodetabek / Priangan Timur
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-zinc-950 border border-zinc-800 relative">
              <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-white mb-2">
                Kirim Pesan Langsung
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mb-8 font-normal leading-relaxed">
                Isi formulir di bawah ini untuk mendiskusikan anggaran iklan, audit campaign, atau konsultasi kebutuhan marketing Anda.
              </p>

              {isSubmitted ? (
                <div className="p-8 rounded-xl bg-black border border-zinc-800 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-red-600 text-white mx-auto flex items-center justify-center font-bold shadow-lg shadow-red-950/50">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-['Space_Grotesk'] text-xl font-bold text-white">
                    Terima Kasih atas Pesan Anda!
                  </h4>
                  <p className="text-sm text-zinc-300 max-w-md mx-auto font-normal">
                    Pesan Anda dari <span className="text-white font-semibold">{formData.firstName}</span> telah tercatat. Miftah Fauzi Saputra akan segera menghubungi Anda kembali via email atau WhatsApp.
                  </p>
                  <div className="pt-4 flex flex-wrap justify-center gap-3">
                    <a
                      href={`https://wa.me/6285523831120?text=Halo%20Miftah,%20saya%20${encodeURIComponent(formData.firstName)}.%20Saya%20tertarik%20dengan%20layanan%20${encodeURIComponent(formData.service)}:%20${encodeURIComponent(formData.message)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-red-600 text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded hover:bg-red-700 transition-colors shadow-lg shadow-red-950/40"
                    >
                      <MessageCircle className="w-4 h-4 text-white" />
                      <span>Lanjutkan ke WhatsApp</span>
                    </a>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ firstName: '', lastName: '', email: '', service: 'Meta & TikTok Ads', message: '' });
                      }}
                      className="px-4 py-2.5 rounded bg-zinc-900 hover:bg-zinc-800 text-xs font-semibold text-zinc-300 hover:text-white uppercase tracking-wider border border-zinc-800 transition-colors"
                    >
                      Kirim Pesan Lain
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-zinc-400 mb-2">
                        Nama Depan *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        placeholder="Miftah"
                        className="w-full px-4 py-3 rounded-lg bg-black border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-zinc-400 mb-2">
                        Nama Belakang
                      </label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        placeholder="Saputra"
                        className="w-full px-4 py-3 rounded-lg bg-black border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-zinc-400 mb-2">
                        Alamat Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="nama@perusahaan.com"
                        className="w-full px-4 py-3 rounded-lg bg-black border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-zinc-400 mb-2">
                        Layanan yang Dibutuhkan
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-black border border-zinc-800 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm transition-colors"
                      >
                        <option value="Meta & TikTok Ads">Meta Ads &amp; TikTok Ads</option>
                        <option value="Marketplace Shopee & Tokopedia">Shopee &amp; Tokopedia Ads</option>
                        <option value="Pemasaran Industri Interior">Pemasaran Industri Interior</option>
                        <option value="Produksi Film & Videografi">Produksi Film &amp; Videografi</option>
                        <option value="Konsultasi Strategi Digital">Konsultasi Strategi Digital</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-zinc-400 mb-2">
                      Pesan atau Keterangan Proyek *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Jelaskan kebutuhan bisnis Anda, target audiens, estimasi anggaran iklan, atau timeline peluncuran..."
                      className="w-full px-4 py-3 rounded-lg bg-black border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm resize-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider py-4 rounded transition-colors shadow-lg shadow-red-950/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-white" />
                    <span>Kirim Pesan Sekarang</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
