import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StarIcon } from "lucide-react";

interface Testimonial {
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: "Budi Santoso",
      avatar: "BS",
      rating: 5,
      comment:
        "Lokasi sangat strategis dekat dengan Universitas Brawijaya. Kamar bersih dan nyaman. Pelayanan ramah. Pasti akan kembali lagi!",
      date: "April 2023",
    },
    {
      name: "Siti Rahayu",
      avatar: "SR",
      rating: 4,
      comment:
        "Penginapan syariah yang sangat nyaman dan tenang. Dekat dengan pusat kota dan kampus. Harga terjangkau untuk fasilitas yang ditawarkan.",
      date: "Mei 2023",
    },
    {
      name: "Ahmad Faisal",
      avatar: "AF",
      rating: 5,
      comment:
        "Tempat yang sempurna untuk keluarga. Bersih, nyaman, dan sesuai dengan prinsip syariah. Staff sangat membantu dan ramah.",
      date: "Juni 2023",
    },
    {
      name: "Anisa Putri",
      avatar: "AP",
      rating: 5,
      comment:
        "Alhamdulillah, penginapan yang sangat nyaman dan sesuai syariah. Dekat dengan kampus UB, cocok untuk orang tua yang mengunjungi anaknya yang kuliah.",
      date: "Juli 2023",
    },
    {
      name: "Hendra Wijaya",
      avatar: "HW",
      rating: 4,
      comment:
        "Penginapan terbaik di sekitar UB. WiFi kencang, kamar bersih, dan sarapan enak. Sangat direkomendasikan untuk keluarga mahasiswa.",
      date: "Agustus 2023",
    },
  ];

  return (
    <div className="w-full py-8">
      <div className="text-center mb-8">
        <p className="text-gray-600">
          Pengalaman dari tamu-tamu kami yang puas
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow"
          >
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${testimonial.name}`}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="text-xs text-gray-500">
                      {testimonial.date}
                    </div>
                  </div>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-600">"{testimonial.comment}"</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
