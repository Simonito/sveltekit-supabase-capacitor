import { json } from "@sveltejs/kit"

export const Fail = (
  error: { 
    message: string; 
    status?: number; 
    name?: string;
    phone?: string;
    verify?: boolean;
  }, 
  data?: { 
    email?: string;
    nickname?: string;
    phone?: string;
    verify?: boolean;
  }
) => {
  return json(
    { message: error.message, data: { ...data } },
    { status: error.status ?? 400 }
  );
}
