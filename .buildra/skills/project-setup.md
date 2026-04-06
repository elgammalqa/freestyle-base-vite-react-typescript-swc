# Project Setup

Complete these steps before writing any UI code.

## 1. Read All Skill Files

Read every file in `.buildra/skills/` — they contain your component library, styling system, and rules.

## 2. Rename the Project

Update `package.json` name field to match the app being built:

```bash
sed -i 's/"name": "freestyle-base-vite-react-typescript-swc"/"name": "my-app-name"/' package.json
```

Replace `my-app-name` with a kebab-case version of the user's app name.

## 3. Generate README.md

Overwrite `README.md` with the app's name and description:

```markdown
# App Name

Brief description of what this app does.

Built with [Buildra](https://buildra.dev)
```

## 4. Search for Images

Call `searchImagesTool` to find real Unsplash photos BEFORE writing any UI code. See the `images.md` skill for details.

## 5. Plan Your Component Structure

Before writing code, plan which pre-built components you'll use for each section. Map every UI element to a component from `src/components/ui/`.

## Rules

- **Do NOT run `npm install`** — all packages are pre-installed
- **Do NOT create new component files in `src/components/ui/`** — use what's there
- **Do NOT use raw HTML elements** when a pre-built component exists
- **Always import from `@/components/ui/[component]`** — never from a barrel file
