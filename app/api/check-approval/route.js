import { createClient } from '@supabase/supabase-js';

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { auth: { persistSession: false } }
);

export async function POST(request) {
  try {
    const { email } = await request.json();
    if (!email) return new Response('Email required', { status: 400 });

    const { data, error } = await supabaseAdmin
      .from('applications')
      .select('approved')
      .eq('email', email.trim().toLowerCase())
      .order('created_at', { ascending: false })
      .limit(1);

    if (error) return new Response(error.message, { status: 500 });

    const approved = data?.[0]?.approved === true;
    return Response.json({ approved });
  } catch (e) {
    return new Response('Bad request', { status: 400 });
  }
}
