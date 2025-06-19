import { deleteBoard } from '@/actions/delete-boards';
import { Button } from '@/components/ui/button';

interface BoardProps {
  title: string;
  id: string;
}

const Board = ({ title, id }: BoardProps) => {
  const deleteBoardWithId = deleteBoard.bind(null, id);
  return (
    <form action={deleteBoardWithId} className="flex items-center gap-x-2">
      <p>Board title : {title}</p>
      <Button size={'sm'} variant={'destructive'}>
        Delete
      </Button>
    </form>
  );
};
export default Board;
