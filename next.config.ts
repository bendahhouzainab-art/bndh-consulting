import type { NextConfig } from 'next';

// GitHub Pages build only. The deploy workflow sets GITHUB_PAGES=true, which
// turns the site into plain static files served under the repository's
// subpath (https://<owner>.github.io/bndh-consulting/). Local dev and the
// CodeYam preview never set it, so they keep the normal server behaviour.
const githubPages = process.env.GITHUB_PAGES === 'true';
const pagesBasePath = process.env.PAGES_BASE_PATH ?? '/bndh-consulting';

const nextConfig: NextConfig = {
  ...(githubPages
    ? {
        output: 'export' as const,
        basePath: pagesBasePath,
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {}),

  // Required: better-sqlite3 is a native module that can't be bundled
  serverExternalPackages: ['better-sqlite3'],

  // Dev only — KEEP THIS LINE. CodeYam never serves the preview from the
  // origin this dev server binds: it serves it from the editor host, or from
  // a dedicated preview host. Next.js blocks cross-origin access to dev
  // resources (the HMR socket, chunks) by default, and with the socket blocked
  // the app never hydrates — the page renders as a server-rendered shell whose
  // controls do nothing, with NO console error. That looks like an unrelated
  // bug, which is why this line is an obvious-looking candidate for deletion
  // and must not be deleted. `**.` matches any subdomain depth, so it survives
  // a preview host being re-slugged. For a self-hosted or custom preview
  // domain, set CODEYAM_PREVIEW_HOSTS (comma-separated) in the `env` block of
  // `.codeyam/editor.json`. Dev-scoped by construction: `allowedDevOrigins` is
  // read only by the dev server, so it widens nothing in production.
  allowedDevOrigins: (process.env.CODEYAM_PREVIEW_HOSTS ?? '**.codeyam.com')
    .split(',')
    .map((host) => host.trim())
    .filter(Boolean),

  turbopack: {
    // Required: prevents Turbopack from inferring a parent directory as root
    // when .codeyam/ exists above the project (which breaks import resolution)
    root: '.',
  },
};

export default nextConfig;
