# Screens

Goal:

- Keep responsive breakpoints centralized in `tailwind.config.ts`.

Current direction:

- `sm: 735px`
- `md: 810px`
- `xl: 1310px`

Possible future work:

- Add `2xl` if a larger desktop breakpoint is needed.
- Add container widths aligned to the layout system.
- Keep using one min breakpoint and inverse responsive variants like `max-md:` instead of creating separate `809px`-style screens.

Notes:

- This only affects Tailwind utility classes.
- Raw CSS `@media` rules still need manual cleanup later.
