// front-end/src/app/admin/api.ts
export async function getUsuarios() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/usuarios`, {
    credentials: 'include', // if using cookies/session
  });
  if (!res.ok) throw new Error('Erro ao buscar usuários');
  return res.json();
}