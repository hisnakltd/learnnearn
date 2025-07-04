// This file is disabled for static export
// Sign out requires server-side functionality
export function POST() {
  return new Response('Sign out not available in static export', { status: 501 });
}