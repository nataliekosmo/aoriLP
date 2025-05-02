import Link from "next/link";
import {
  Instagram,
  Facebook,
  Twitter,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function AoriFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-lg">
              AORI Guest House Malang
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-blue-400" />
                <span>
                  Jl. Sigura-gura VI no 22, Lowokwaru, Malang, Jawa Timur 65145
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-blue-400" />
                <a href="tel:+6282257673337" className="hover:text-white">
                  +6282257673337
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-blue-400" />
                <a
                  href="mailto:info@aoriguesthouse.com"
                  className="hover:text-white"
                >
                  info@aoriguesthouse.com
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-lg">
              Menu Cepat
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#rooms" className="hover:text-white">
                  Kamar Kami
                </Link>
              </li>
              <li>
                <Link href="#facilities" className="hover:text-white">
                  Fasilitas
                </Link>
              </li>
              <li>
                <Link href="#location" className="hover:text-white">
                  Lokasi
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Syarat & Ketentuan
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Kebijakan Privasi
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-lg">
              Ikuti Kami
            </h3>
            <p className="mb-4">
              Dapatkan info terbaru tentang promo dan berita kami
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-sm">
          <p>© {currentYear} AORI Guest House Malang. Hak Cipta Dilindungi.</p>
          <p className="mt-2">
            Penginapan Syariah Terbaik dekat Universitas Brawijaya
          </p>
        </div>
      </div>
    </footer>
  );
}
