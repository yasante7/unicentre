import { GraduationCap, Instagram, Twitter, Youtube } from "lucide-react"
import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-blue-50 via-white to-white mt-20 py-12">
      <div className="container grid gap-10 md:grid-cols-4 text-sm px-4">
        {/* Logo & Description */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
            <GraduationCap className="h-6 w-6" />
            <span className="text-xl font-extrabold">UniMatch</span>
          </div>
          <p className="text-muted-foreground">
            Guiding students to their dream campus — one match at a time 🎓✨
          </p>
          {/* Socials */}
          <div className="flex gap-3 pt-2">
            <Link href="#" className="hover:text-blue-600 transition">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="hover:text-blue-400 transition">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="hover:text-red-600 transition">
              <Youtube className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Product */}
        <div className="space-y-3">
          <h3 className="text-base font-semibold text-foreground">Product</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link href="#" className="hover:text-foreground">Features</Link></li>
            <li><Link href="#" className="hover:text-foreground">How It Works</Link></li>
            <li><Link href="#" className="hover:text-foreground">FAQ</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div className="space-y-3">
          <h3 className="text-base font-semibold text-foreground">Company</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link href="#" className="hover:text-foreground">About</Link></li>
            <li><Link href="#" className="hover:text-foreground">Blog</Link></li>
            <li><Link href="#" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div className="space-y-3">
          <h3 className="text-base font-semibold text-foreground">Legal</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link href="#" className="hover:text-foreground">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-foreground">Terms of Service</Link></li>
            <li><Link href="#" className="hover:text-foreground">Cookie Policy</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-12 border-t pt-6 text-center text-xs text-muted-foreground px-4">
        <p>
          &copy; {new Date().getFullYear()} UniMatch. Built with 💙 for future scholars.
        </p>
      </div>
    </footer>
  )
}
