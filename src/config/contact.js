export const contactConfig = {
  whatsappNumber: '62822111378',
  whatsappMessage: 'Hallo Adakami Saya Memerlukan Bantuan?',
  displayPhone: '0822111378',
  serviceName: 'Layanan Adakami',
  pageTitle: 'Pusat Layanan Bantuan Adakami',
  pageSubtitle: 'Informasi bantuan umum, pembayaran, akun, dan konsultasi layanan.',
  address: 'Indonesia',
  logoImage: './logoweb.png',
  aboutTitle: 'Tentang Kami',
  aboutText:
    'Kami menyediakan halaman informasi bantuan layanan finansial yang mudah diakses, responsif, dan terhubung ke WhatsApp untuk memudahkan pengunjung mengirim pesan.',
};

export function getWhatsappLink() {
  const number = contactConfig.whatsappNumber
    .replace(/[^0-9]/g, '')
    .replace(/^0/, '62');

  return `https://wa.me/${number}?text=${encodeURIComponent(contactConfig.whatsappMessage)}`;
}
