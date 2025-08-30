import { supabaseAdmin } from '../../../lib/supabaseAdmin';

function checkAdminKey(req) {
  const key = req.headers.get('x-admin-key');
  return key && key === process.env.ADMIN_KEY;
}

export async function GET(request) {
  if (!checkAdminKey(request)) {
    return new Response('Unauthorized', { status: 401 });
  }

  const { data, error } = await supabaseAdmin
    .from('applications')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) return new Response(error.message, { status: 500 });
  return Response.json(data);
}

export async function PATCH(request) {
  if (!checkAdminKey(request)) {
    return new Response('Unauthorized', { status: 401 });
  }

  const body = await request.json(); // { id, approved }
  if (!body?.id || typeof body?.approved !== 'boolean') {
    return new Response('Bad request', { status: 400 });
  }

  const { error } = await supabaseAdmin
    .from('applications')
    .update({ approved: body.approved })
    .eq('id', body.id);

  if (error) return new Response(error.message, { status: 500 });
  return Response.json({ ok: true });
}

