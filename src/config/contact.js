export const contactConfig = {
  whatsappNumber: '62822111378',
  whatsappMessage: 'Halo, saya perlu informasi bantuan layanan finansial.',
  displayPhone: '0822 1113 78',
  serviceName: 'Pusat Informasi Finansial',
  pageTitle: 'Bantuan finansial yang jelas, aman, dan mudah dihubungi.',
  pageSubtitle:
    'Temukan panduan pembayaran, konsultasi kendala cicilan, dan informasi bantuan akun melalui halaman responsif yang terhubung ke WhatsApp.',
  address: 'Indonesia',
  supportHours: 'Setiap hari, 08.00 - 21.00 WIB',
  responseTime: 'Respons awal ±5 menit',
  logoImage: './logoweb.png',
  aboutTitle: 'Informasi layanan',
  aboutText:
    'Halaman ini bersifat informatif dan bukan kanal resmi institusi keuangan mana pun. Kami tidak meminta OTP, PIN, password, data kartu, dokumen identitas, atau data sensitif pengguna.',
};

export function getWhatsappLink(message = contactConfig.whatsappMessage) {
  const number = contactConfig.whatsappNumber
    .replace(/[^0-9]/g, '')
    .replace(/^0/, '62');

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
