// lib/ip-util.js
export function getClientIp(request) {
  // Try to get IP from headers (behind proxy)
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  
  // Fallback to direct connection
  return request.headers.get('x-real-ip') || 
         request.socket?.remoteAddress || 
         'unknown';
}