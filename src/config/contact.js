export const contactConfig = {
  whatsappNumber: '62822111378',
  whatsappMessage: 'Tulis pesan WhatsApp di sini',
  displayPhone: '0822111378',
  serviceName: 'Layanan Finansial',
  pageTitle: 'Pusat Bantuan Layanan Finansial',
  pageSubtitle: 'Informasi bantuan umum, pembayaran, akun, dan konsultasi layanan.',
  address: 'Indonesia',
  disclaimer:
    'Layanan Pelanggan Resmi Pusat informasi dan bantuan resmi AdaKami yang memberikan dukungan terpadu 24 jam untuk kenyamanan dan kepuasan pelanggan.',
};

export function getWhatsappLink() {
  const number = contactConfig.whatsappNumber
    .replace(/[^0-9]/g, '')
    .replace(/^0/, '62');

  return `https://wa.me/${number}?text=${encodeURIComponent(contactConfig.whatsappMessage)}`;
}
