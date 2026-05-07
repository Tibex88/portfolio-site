# Asset Guide

This scaffold assumes licensed reuse is allowed only where the asset fits the portfolio criteria.

## Asset categories to collect or recreate

- `hero-image`
  Large visual anchors for each featured project section.
- `cutout`
  Transparent image fragments that can float above or beside project panels.
- `scribble`
  Handwritten notes, marks, arrows, circles, or callout overlays triggered on hover/click.
- `label`
  Small editorial tags, index markers, or floating metadata chips.
- `cursor`
  Cursor-specific graphics or text badges for `inspect`, `open`, and `drag` states.
- `texture`
  Paper grain, scan noise, or subtle background imperfections.

## Reference-site interaction patterns to reproduce

- Fixed custom cursor with mode changes by hovered element.
- Hover-triggered or click-triggered annotation overlays.
- Large gallery items with layered labels and notes.
- Slight transform motion on hover, not heavy animation.
- Sparse editorial layout with oversized project rhythm.

## Source handling

- Put approved reused assets in `src/assets/reference/`.
- Put original/generated project visuals in `src/assets/local/`.
- Keep filenames descriptive and stable because arrays in state will point to them.

## First assets needed

- 3 project hero images
- 3 to 6 scribble overlays
- 3 cursor badges or cursor-state visuals
- 1 paper/noise texture
- optional transparent cutout accents
