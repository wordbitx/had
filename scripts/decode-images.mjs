// Decodes the base64 image sources in public/images/*.b64 into the real
// image files next to them (public/images/*.webp / *.png).
//
// Why: this repository is pushed through the GitHub API, which only accepts
// UTF-8 text files, so the original image bytes are stored as base64 text.
// npm runs this automatically before build and dev (prebuild / predev in
// package.json), and Vercel runs it the same way. The decoded files are
// byte-identical to the originals — no recompression, no resize, no
// re-encoding. They are git-ignored build outputs; the .b64 files are the
// committed source of truth.
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const dir = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'images');
let n = 0;
for (const name of readdirSync(dir)) {
  if (!name.endsWith('.b64')) continue;
  const out = join(dir, name.slice(0, -4));
  const b64 = readFileSync(join(dir, name), 'utf8').replace(/\s+/g, '');
  writeFileSync(out, Buffer.from(b64, 'base64'));
  n += 1;
}
console.log(`decode-images: decoded ${n} image(s) into public/images/`);
