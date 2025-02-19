const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-sky-100">
      {/* NavBar */}

      {/* Main Content */}
      <main className="pt-40 pb-20 bg-sky-100">{children}</main>

      {/* Footer */}
    </div>
  );
};
export default MarketingLayout;
