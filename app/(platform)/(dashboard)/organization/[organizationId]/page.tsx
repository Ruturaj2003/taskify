import { create } from '@/actions/create-boards';
import { Button } from '@/components/ui/button';

const OrganizationIdPage = async () => {
  return (
    <div>
      <form action={create}>
        <input
          type="text"
          name="title"
          id="title"
          required
          placeholder="Enter Board title"
          className="border-black border"
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};
export default OrganizationIdPage;
