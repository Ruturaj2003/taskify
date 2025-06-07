import { db } from '@/lib/db';

const OrganizationIdPage = async () => {
  async function create(formData: FormData) {
    'use server';

    const title = formData.get('title') as string;

    await db.board.create({
      data: {
        title,
      },
    });
  }

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
      </form>
    </div>
  );
};
export default OrganizationIdPage;
