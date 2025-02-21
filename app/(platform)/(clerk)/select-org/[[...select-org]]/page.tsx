import { OrganizationList } from '@clerk/nextjs';

export default function CreateOranizationPage() {
  return (
    <OrganizationList
      hidePersonal
      afterSelectOrganizationUrl={'/organization/:id'}
      afterCreateOrganizationUrl={'/organization/:id'}
    ></OrganizationList>
  );
}
