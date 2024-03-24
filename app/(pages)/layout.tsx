import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="mt-20">{children}</main>
      <Footer />
    </>
  );
}
