import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqSection() {
  const faqs = [
    {
      question: "Bagaimana cara memesan kamar di AORI Guest House?",
      answer:
        "Anda dapat memesan kamar dengan mudah melalui WhatsApp kami. Cukup klik tombol 'Book via WhatsApp' di website ini, dan tim kami akan segera merespon permintaan Anda.",
    },
    {
      question: "Apakah AORI Guest House dekat dengan Universitas Brawijaya?",
      answer:
        "Ya, AORI Guest House berlokasi sangat strategis, hanya berjarak sekitar 500 meter atau 5-7 menit berjalan kaki dari kampus Universitas Brawijaya.",
    },
    {
      question: "Apa saja fasilitas yang tersedia di AORI Guest House?",
      answer:
        "AORI Guest House menyediakan berbagai fasilitas termasuk WiFi gratis, kamar mandi dalam dengan air panas, ruang sholat, area parkir, dan masih banyak lagi.",
    },
    {
      question: "Apakah AORI Guest House menerapkan prinsip syariah?",
      answer:
        "Ya, AORI Guest House adalah penginapan syariah yang menerapkan prinsip-prinsip Islam dalam seluruh operasional dan layanannya. Kami hanya menerima tamu yang memiliki hubungan mahram atau tamu dengan jenis kelamin yang sama dalam satu kamar.",
    },
    {
      question: "Berapa tarif menginap di AORI Guest House?",
      answer:
        "Tarif kamar di AORI Guest House bervariasi mulai dari Rp 150.000 hingga Rp 298.000 per malam, tergantung pada tipe kamar dan musim. Silakan hubungi kami untuk informasi tarif terbaru dan penawaran spesial.",
    },
    {
      question: "Apakah ada tempat makan di sekitar AORI Guest House?",
      answer:
        "Ya, terdapat banyak pilihan tempat makan di sekitar AORI Guest House, mulai dari warung makan lokal hingga restoran. Sebagian besar dapat dijangkau dengan berjalan kaki.",
    },
  ];

  return (
    <div className="w-full py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-gray-600">
            Temukan jawaban untuk pertanyaan umum tentang AORI Guest House
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
