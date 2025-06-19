'use server';

import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { z } from 'zod';
export type State = {
  errors?: {
    title?: string[];
  };
  message?: string | null;
};

const CreateBoard = z.object({
  title: z.string().min(3, {
    message: 'Min Length Should Be three',
  }),
});

export async function create(
  prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = CreateBoard.safeParse({
    title: formData.get('title'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields',
    };
  }
  const { title } = validatedFields.data;

  try {
    await db.board.create({
      data: {
        title,
      },
    });
  } catch (error) {
    return {
      message: 'DB Error',
    };
  }

  revalidatePath('/organization/org_2tOPhnDAcDl18hvxqGe3PhmzDN1');
  redirect('/organization/org_2tOPhnDAcDl18hvxqGe3PhmzDN1');
}
