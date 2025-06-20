import { db } from '@/lib/db';
import Board from './Board';
import Form from './Form';
const OrganizationIdPage = async () => {
  const boards = await db.board.findMany();
  return (
    <div className="flex flex-col space-y-4">
      <Form></Form>
      <div className="space-y-2">
        {boards.map((board) => (
          <Board key={board.id} id={board.id} title={board.title}></Board>
        ))}
      </div>
    </div>
  );
};
export default OrganizationIdPage;
