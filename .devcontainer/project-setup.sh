#!/bin/sh
# Project-specific setup for BNDH Consulting (Next.js + Prisma + SQLite).
# Hand-written, not generated: `codeyam-editor editor devcontainer-setup`
# installs the editor, Claude Code and Chromium, but not this app's own
# dependencies or database.
#
# Runs on creation (postCreateCommand) and on every start (postStartCommand),
# so a codespace stopped before creation finished is repaired the next time
# it starts. Each step does nothing when it is already done, and it never
# deletes or reseeds an existing database.

set -e

# 1. npm packages, exactly as pinned in package-lock.json. The package's
#    postinstall also downloads Playwright's Chromium.
if [ ! -d node_modules ] || [ package-lock.json -nt node_modules/.package-lock.json ]; then
  echo 'Installing project packages (npm ci)...'
  npm ci
fi

# 2. Prisma client + SQLite schema. `db push` only adds what is missing; it
#    never drops data on an additive schema.
fresh_db=0
[ -f dev.db ] || fresh_db=1
echo 'Syncing the database schema (prisma db push + generate)...'
npm run db:push

# 3. Demo data, only into a brand-new database.
if [ "$fresh_db" = 1 ]; then
  echo 'Seeding the new database...'
  npm run db:seed
fi

echo 'Project setup complete.'
