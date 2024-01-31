import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NoTokenKick from "@/components/NoTokenKick";

const Layout = ({ children }: { children: React.ReactNode }) => {
    const links = [{ name: "Dashboard", href: "/dashboard" }];
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
            <NoTokenKick>
                <Header links={links} />
                {children}
                <Footer items={items} />
            </NoTokenKick>
        </>
    );
};

export default Layout;
