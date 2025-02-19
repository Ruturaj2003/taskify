import { Footer } from './_components/Footer';
import { Navbar } from './_components/Navbar';

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-sky-100">
      {/* NavBar */}
      <Navbar></Navbar>
      {/* Main Content */}
      <main className="pt-40 pb-20 bg-sky-100">{children}</main>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};
export default MarketingLayout;
