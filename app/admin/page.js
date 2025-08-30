'use client';
import { useState } from 'react';

export default function AdminPage() {
  const [adminKey, setAdminKey] = useState('');
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');

  async function fetchApps(key) {
    try {
      setLoading(true);
      setErr('');
      const res = await fetch('/api/admin/applications', {
        headers: { 'x-admin-key': key }
      });
      if (!res.ok) throw new Error(await res.text());
      const data = await res.json();
      setApps(data);
    } catch (e) {
      setErr(e.message || 'Error loading applications');
      setApps([]);
    } finally {
      setLoading(false);
    }
  }

  async function toggleApprove(id, approved) {
    try {
      const res = await fetch('/api/admin/applications', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-key': adminKey
        },
        body: JSON.stringify({ id, approved })
      });
      if (!res.ok) throw new Error(await res.text());
      setApps(a => a.map(row => row.id === id ? { ...row, approved } : row));
    } catch (e) {
      alert(e.message || 'Update failed');
    }
  }

  return (
    <main style={{ maxWidth: 900, margin: '40px auto', padding: 16 }}>
      <h1>Admin — Applications</h1>

      {!adminKey ? (
        <div style={{ marginTop: 16 }}>
          <p>Enter admin key:</p>
          <input
            type="password"
            onChange={e => setAdminKey(e.target.value)}
            placeholder="Admin key"
            style={{ width: 280 }}
          />
          <button onClick={() => fetchApps(adminKey)} style={{ marginLeft: 8 }}>
            Unlock
          </button>
          {err && <p style={{ color: 'crimson' }}>{err}</p>}
        </div>
      ) : (
        <>
          <div style={{ marginTop: 12 }}>
            <button onClick={() => fetchApps(adminKey)} disabled={loading}>
              {loading ? 'Refreshing…' : 'Refresh'}
            </button>
            {err && <span style={{ color: 'crimson', marginLeft: 12 }}>{err}</span>}
          </div>

          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 16 }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', borderBottom: '1px solid #ddd' }}>Name</th>
                <th style={{ textAlign: 'left', borderBottom: '1px solid #ddd' }}>Email</th>
                <th style={{ textAlign: 'left', borderBottom: '1px solid #ddd' }}>Reason</th>
                <th style={{ textAlign: 'left', borderBottom: '1px solid #ddd' }}>Approved</th>
                <th style={{ textAlign: 'left', borderBottom: '1px solid #ddd' }}>Created</th>
                <th style={{ textAlign: 'left', borderBottom: '1px solid #ddd' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {apps.map(a => (
                <tr key={a.id}>
                  <td style={{ padding: '6px 8px' }}>{a.name}</td>
                  <td style={{ padding: '6px 8px' }}>{a.email}</td>
                  <td style={{ padding: '6px 8px' }}>{a.reason}</td>
                  <td style={{ padding: '6px 8px' }}>{String(a.approved)}</td>
                  <td style={{ padding: '6px 8px' }}>{new Date(a.created_at).toLocaleString()}</td>
                  <td style={{ padding: '6px 8px' }}>
                    {a.approved ? (
                      <button onClick={() => toggleApprove(a.id, false)}>Revoke</button>
                    ) : (
                      <button onClick={() => toggleApprove(a.id, true)}>Approve</button>
                    )}
                  </td>
                </tr>
              ))}
              {apps.length === 0 && !loading && (
                <tr><td colSpan="6" style={{ padding: 12, color: '#666' }}>No applications yet.</td></tr>
              )}
            </tbody>
          </table>
        </>
      )}
    </main>
  );
}
