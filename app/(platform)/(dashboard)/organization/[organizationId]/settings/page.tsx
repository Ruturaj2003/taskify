import { OrganizationProfile } from '@clerk/nextjs';

const SettingsPage = () => {
  return (
    <div className="w-full">
      <OrganizationProfile
        routing="hash"
        appearance={{
          elements: {
            rootBox: {
              boxShadow: 'none',
              width: '100%',
              height: '100vh',
            },
            card: {
              border: '1px solid #e7f8a1',
              boxShadow: 'none',
              width: '100%',
            },
            cardBox: {
              height: '80vh',
              border: '1px solid #ff9f51 ',
              boxShadow: 'none',
              width: '100%',
            },
          },
        }}
      ></OrganizationProfile>
    </div>
  );
};
export default SettingsPage;
