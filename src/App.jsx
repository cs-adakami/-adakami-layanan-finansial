import {
  AlertTriangle,
  ChevronRight,
  Clock,
  CreditCard,
  Headphones,
  Info,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Wallet,
} from 'lucide-react';
import { contactConfig, getWhatsappLink } from './config/contact.js';

const menuItems = [
  {
    title: 'Informasi Pembayaran',
    description: 'Bantuan cek metode pembayaran dan status transaksi.',
    icon: Wallet,
  },
  {
    title: 'Konsultasi Cicilan',
    description: 'Diskusi kendala cicilan dan kebutuhan layanan.',
    icon: CreditCard,
  },
  {
    title: 'Bantuan Akun',
    description: 'Bantuan umum seputar akses akun dan aplikasi.',
    icon: Headphones,
  },
  {
    title: 'Chat WhatsApp',
    description: 'Hubungi bantuan melalui pesan WhatsApp.',
    icon: MessageCircle,
  },
];

function App() {
  const whatsappUrl = getWhatsappLink();

  const openWhatsapp = () => {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <main className="page-shell">
      <div className="hero-bg" />

      <section className="container">
        <header className="hero-header">
          <div className="badge">
            <ShieldCheck size={14} />
            {contactConfig.serviceName}
          </div>
          <h1>{contactConfig.pageTitle}</h1>
          <p>{contactConfig.pageSubtitle}</p>
        </header>

        <section className="main-card">
          <div className="logo-mark">A</div>
          <h2>Butuh Bantuan Sekarang?</h2>
          <p>
            Klik tombol di bawah untuk membuka WhatsApp dengan pesan otomatis yang sudah disiapkan.
          </p>
          <button className="primary-button" onClick={openWhatsapp}>
            <MessageCircle size={19} />
            Hubungi via WhatsApp
          </button>
        </section>

        <section className="menu-list">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button className="menu-card" key={item.title} onClick={openWhatsapp}>
                <span className="menu-icon">
                  <Icon size={23} />
                </span>
                <span className="menu-text">
                  <strong>{item.title}</strong>
                  <small>{item.description}</small>
                </span>
                <ChevronRight size={18} className="chevron" />
              </button>
            );
          })}
        </section>

        <section className="info-card">
          <div className="section-title">
            <Info size={18} />
            <h3>Informasi Halaman</h3>
          </div>
          <p>
            Halaman ini dibuat untuk mempermudah pengunjung menghubungi bantuan melalui WhatsApp.
          </p>

          <div className="detail-row">
            <MapPin size={18} />
            <div>
              <strong>Area Layanan</strong>
              <span>{contactConfig.address}</span>
            </div>
          </div>

          <button className="phone-row" onClick={openWhatsapp}>
            <Phone size={16} />
            <strong>{contactConfig.displayPhone}</strong>
          </button>
        </section>

        <section className="warning-card">
          <div>
            <AlertTriangle size={17} />
            <strong>Catatan Keamanan</strong>
          </div>
          <p>{contactConfig.disclaimer}</p>
        </section>

        <footer>
          <Clock size={13} />
          Siap digunakan untuk project Vite React.
        </footer>
      </section>
    </main>
  );
}

export default App;
