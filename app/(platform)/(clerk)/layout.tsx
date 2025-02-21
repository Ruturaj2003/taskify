const ClerkLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex  bg-gradient-to-r from-teal-200 to-sky-300 justify-center items-center w-full h-full  ">
      <div className="">{children}</div>
    </div>
  );
};
export default ClerkLayout;
