# esbuild TS Config Extends Repro Repo

Repro repo to test whether esbuild supports module specifiers in `tsconfig.json` `extends`.

To reproduce, clone this repo, and in its root directory run:

`npm install`

`node --test`

If the test passes, esbuild supports (the tested) module specifier(s).
