// This file is disabled for static export
// Authentication callbacks require server-side functionality
export function GET() {
  return new Response('Authentication not available in static export', { status: 501 });
}