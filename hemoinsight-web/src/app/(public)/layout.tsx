import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TokenKick from "@/components/TokenKick";

const Layout = ({ children }: { children: React.ReactNode }) => {
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
        {children}
        <Footer items={items} />
      </TokenKick>
    </>
  );
};

export default Layout;
