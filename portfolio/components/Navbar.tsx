import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-4xl font-bold">Natalia Jagiela</div>
        <div className="space-x-4">
          <Link href="/" className="navlink">Home</Link>
          <Link href="/projects" className="navlink">Projecte</Link>
          <Link href="/contact" className="navlink">Blog</Link>
        </div>
        <div>
            <Link href="/resume" className="navlink">CV</Link>
      </div>
    </nav>
  );
}