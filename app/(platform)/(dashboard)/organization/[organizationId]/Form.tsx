import { create } from '@/actions/create-boards';
import { Button } from '@/components/ui/button';
import { useFormState } from 'react-dom';
const Form = () => {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(create, initialState);
  return (
    <form action={dispatch}>
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
  );
};
export default Form;
