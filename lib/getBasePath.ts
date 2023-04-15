import path from 'path';

export function getBasePath() {
  let basePath = process.cwd();
  if (process.env.NODE_ENV === 'production') {
    basePath = path.join(process.cwd(), '.next/server/chunks');
  }
  return basePath;
}
