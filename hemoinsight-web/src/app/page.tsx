import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import TokenKick from "@/components/TokenKick";

const Page = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "Login", href: "/login" },
    { name: "Register", href: "/register" },
  ];
  const items = [
    {
      title: "Navigation",
      links: links,
    },
    {
      title: "Test",
      links: [
        { name: "Test 1", href: "/" },
        { name: "Test 2", href: "/" },
        { name: "Test 3", href: "/" },
      ],
    },
  ];
  return (
    <>
      <TokenKick>
        <Header links={links} />
        <main className="flex-1 bg-gray-100 flex">
          <Image
            src="/hemoinsightLogo.svg"
            alt="Hemoinsight Logo"
            width={100}
            height={100}
            className="p-4"
            style={{ height: "50rem", width: "auto", margin: "auto" }}
            priority
          />
        </main>
        <Footer items={items} />
      </TokenKick>
    </>
  );
};

export default Page;
