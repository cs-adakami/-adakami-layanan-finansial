export const contactConfig = {
  whatsappNumber: 'YOUR_WHATSAPP_NUMBER',
  whatsappMessage: 'Tulis pesan WhatsApp di sini',
  displayPhone: 'YOUR_WHATSAPP_NUMBER',
  serviceName: 'Layanan Finansial',
  pageTitle: 'Pusat Bantuan Layanan Finansial',
  pageSubtitle: 'Informasi bantuan umum, pembayaran, akun, dan konsultasi layanan.',
  address: 'Indonesia',
  disclaimer:
    'Halaman ini bukan situs resmi institusi keuangan mana pun. Jangan kirim OTP, PIN, password, data kartu, dokumen identitas, atau data sensitif melalui chat.',
};

export function getWhatsappLink() {
  const number = contactConfig.whatsappNumber
    .replace(/[^0-9]/g, '')
    .replace(/^0/, '62');

  return `https://wa.me/${number}?text=${encodeURIComponent(contactConfig.whatsappMessage)}`;
}
