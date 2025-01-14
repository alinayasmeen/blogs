import Link from 'next/link';
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import {ModeToggle} from "@/components/themebtn"

  

const Navbar = () => {
  return (
    <nav className="bg-background/50 backdrop-blur sticky border-b top-0 p-4">
      <div className="container mx-auto flex justify-between pb-3 items-center">
        <Link href="/"><div className=" text-lg font-bold">
          Alina&apos;s Blog
        </div></Link>
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/" className=" hover:text-white">Home</Link>
          <Link href="/blog" className=" hover:text-white">Blog</Link>
          <Link href="/about" className=" hover:text-white">About</Link>
          <Link href="/contact" className=" hover:text-white">Contact</Link>
          <Button variant="outline">
          <Link href = '/logIn'>
          LogIn
          </Link>
          </Button>
          <Button variant="outline">
            <Link href= '/signUp'>
            SignUp
            </Link>
            </Button>
          <ModeToggle />
        </div>
        <div className=" md:hidden">
      <Sheet>
  <SheetTrigger> ☰</SheetTrigger>
  <SheetContent >
    <SheetHeader>
      <SheetTitle> <Link href="/"><div className=" text-lg font-bold">
          Alina&apos;s Blog
        </div></Link></SheetTitle>
      <SheetDescription className="flex flex-col gap-2 items-center space-y-4">
     
          <Link href="/" className=" hover:text-white">Home</Link>
          <Link href="/blog" className=" hover:text-white">Blog</Link>
          <Link href="/about" className=" hover:text-white">About</Link>
          <Link href="/contact" className=" hover:text-white">Contact</Link>
          <Button variant="outline">
          <Link href = '/logIn'>
          LogIn
          </Link>
          </Button>
          <Button variant="outline">
            <Link href= '/signUp'>
            SignUp
            </Link>
            </Button>
        <ModeToggle />
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

        </div>
       
      </div>
    </nav>
  );
};

export default Navbar;