import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Clock,
  CreditCard,
  Headphones,
  Info,
  LockKeyhole,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Wallet,
} from 'lucide-react';
import { useMemo, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { contactConfig, getWhatsappLink } from './config/contact.js';

const menuItems = [
  {
    title: 'Panduan Pembayaran',
    description: 'Arahkan pengunjung ke informasi metode pembayaran dan status transaksi.',
    icon: Wallet,
    message: 'Halo, saya perlu panduan pembayaran.',
  },
  {
    title: 'Konsultasi Cicilan',
    description: 'Bantu jelaskan kendala cicilan, jatuh tempo, dan opsi tindak lanjut.',
    icon: CreditCard,
    message: 'Halo, saya ingin konsultasi kendala cicilan.',
  },
  {
    title: 'Bantuan Akun',
    description: 'Informasi umum untuk kendala akses, data akun, dan penggunaan aplikasi.',
    icon: Headphones,
    message: 'Halo, saya perlu bantuan akun.',
  },
  {
    title: 'Chat WhatsApp',
    description: 'Buka percakapan WhatsApp dengan pesan awal yang sudah disiapkan.',
    icon: MessageCircle,
    message: contactConfig.whatsappMessage,
  },
];

const processSteps = [
  'Pilih topik bantuan yang paling sesuai.',
  'WhatsApp terbuka dengan pesan otomatis.',
  'Lanjutkan percakapan tanpa mengirim data sensitif.',
];

const faqItems = [
  {
    question: 'Apakah halaman ini meminta OTP, PIN, atau password?',
    answer:
      'Tidak. Halaman ini hanya menyediakan informasi dan tombol kontak. Jangan pernah mengirim OTP, PIN, password, data kartu, atau dokumen identitas melalui chat.',
  },
  {
    question: 'Apa fungsi halaman ini?',
    answer:
      'Halaman ini membantu pengunjung memilih topik bantuan dan membuka WhatsApp dengan pesan awal yang relevan.',
  },
  {
    question: 'Apakah bisa digunakan dari HP?',
    answer:
      'Bisa. Tampilan dibuat responsif, dengan tombol bantuan tetap tersedia di bagian bawah layar pada perangkat mobile.',
  },
];

function LogoMark() {
  return (
    <div className="logo-mark" aria-label="Logo layanan">
      <img
        src={contactConfig.logoImage}
        alt="Logo website"
        onError={(event) => {
          event.currentTarget.style.display = 'none';
          event.currentTarget.nextElementSibling.style.display = 'grid';
        }}
      />
      <span>A</span>
    </div>
  );
}

function App() {
  const [activeFaq, setActiveFaq] = useState(0);

  const whatsappUrl = useMemo(() => getWhatsappLink(), []);

  const openWhatsapp = (message = contactConfig.whatsappMessage) => {
    window.open(getWhatsappLink(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <main className="page-shell">
      <div className="hero-bg" />
      <div className="noise-layer" />

      <section className="container app-layout">
        <nav className="topbar reveal reveal-1" aria-label="Navigasi utama">
          <div className="brand-lockup">
            <LogoMark />
            <div>
              <strong>{contactConfig.serviceName}</strong>
              <span>Informasi bantuan terarah</span>
            </div>
          </div>
          <button className="nav-cta" onClick={() => openWhatsapp()}>
            <MessageCircle size={17} />
            Hubungi
          </button>
        </nav>

        <header className="hero-section reveal reveal-1">
          <div className="hero-copy">
            <div className="badge">
              <ShieldCheck size={14} />
              Kanal informasi aman & responsif
            </div>
            <h1>{contactConfig.pageTitle}</h1>
            <p>{contactConfig.pageSubtitle}</p>
            <div className="hero-actions">
              <button className="primary-button" onClick={() => openWhatsapp()}>
                <MessageCircle size={19} />
                Mulai Chat WhatsApp
                <ArrowRight size={17} />
              </button>
              <a className="secondary-button" href="#faq">
                Lihat FAQ
              </a>
            </div>
          </div>

          <aside className="hero-panel reveal reveal-2" aria-label="Ringkasan layanan">
            <div className="panel-glow" />
            <div className="status-pill">
              <span />
              Siap membantu
            </div>
            <h2>Support center ringkas untuk kebutuhan bantuan finansial.</h2>
            <div className="metric-grid">
              <div>
                <strong>{contactConfig.responseTime}</strong>
                <span>Estimasi respons</span>
              </div>
              <div>
                <strong>{contactConfig.supportHours}</strong>
                <span>Jam layanan</span>
              </div>
            </div>
            <div className="security-note">
              <LockKeyhole size={18} />
              <span>Tidak meminta OTP, PIN, password, atau data sensitif.</span>
            </div>
          </aside>
        </header>

        <section className="menu-list reveal reveal-3" aria-label="Pilihan bantuan">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button className="menu-card" key={item.title} onClick={() => openWhatsapp(item.message)}>
                <span className="menu-icon">
                  <Icon size={23} />
                </span>
                <span className="menu-text">
                  <strong>{item.title}</strong>
                  <small>{item.description}</small>
                </span>
                <ArrowRight size={18} className="chevron" />
              </button>
            );
          })}
        </section>

        <section className="split-section reveal reveal-4">
          <div className="info-card premium-card">
            <div className="section-title">
              <Sparkles size={18} />
              <h3>Alur bantuan</h3>
            </div>
            <div className="step-list">
              {processSteps.map((step, index) => (
                <div className="step-row" key={step}>
                  <span>{index + 1}</span>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="info-card warning-card">
            <div className="section-title">
              <AlertTriangle size={18} />
              <h3>Catatan keamanan</h3>
            </div>
            <p>{contactConfig.aboutText}</p>
            <div className="safe-list">
              <span><CheckCircle2 size={16} /> Informasi umum</span>
              <span><CheckCircle2 size={16} /> Pesan WhatsApp otomatis</span>
              <span><CheckCircle2 size={16} /> Tidak ada formulir data sensitif</span>
            </div>
          </div>
        </section>

        <section className="split-section reveal reveal-5" id="faq">
          <div className="about-card">
            <div>
              <Info size={17} />
              <strong>{contactConfig.aboutTitle}</strong>
            </div>
            <p>
              Dibuat untuk membantu pengunjung memahami topik bantuan sebelum membuka WhatsApp.
              Gunakan halaman ini sebagai pengarah, bukan tempat mengirim data pribadi.
            </p>
            <button className="phone-row" onClick={() => openWhatsapp()}>
              <Phone size={16} />
              <strong>{contactConfig.displayPhone}</strong>
              <span>{contactConfig.address}</span>
            </button>
          </div>

          <div className="faq-card">
            <div className="section-title">
              <Info size={18} />
              <h3>Pertanyaan umum</h3>
            </div>
            {faqItems.map((item, index) => {
              const isOpen = activeFaq === index;
              return (
                <button
                  className={`faq-item ${isOpen ? 'is-open' : ''}`}
                  key={item.question}
                  onClick={() => setActiveFaq(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <span>
                    <strong>{item.question}</strong>
                    {isOpen && <small>{item.answer}</small>}
                  </span>
                  <ChevronDown size={18} />
                </button>
              );
            })}
          </div>
        </section>

        <footer className="site-footer reveal reveal-5">
          <span><Clock size={13} /> ©2026 Pusat Informasi Layanan.</span>
          <span>Seluruh hak cipta dilindungi.</span>
        </footer>
      </section>

      <button className="mobile-sticky-cta" onClick={() => openWhatsapp()}>
        <MessageCircle size={18} />
        Chat WhatsApp
      </button>

      <Analytics />
      <SpeedInsights />
    </main>
  );
}

export default App;
