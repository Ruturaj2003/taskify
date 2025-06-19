import { create } from '@/actions/create-boards';
import { Button } from '@/components/ui/button';
import { db } from '@/lib/db';
import Board from './Board';
const OrganizationIdPage = async () => {
  const boards = await db.board.findMany();
  return (
    <div className="flex flex-col space-y-4">
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
      <div className="space-y-2">
        {boards.map((board) => (
          <Board key={board.id} id={board.id} title={board.title}></Board>
        ))}
      </div>
    </div>
  );
};
export default OrganizationIdPage;
