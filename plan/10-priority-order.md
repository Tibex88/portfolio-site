# Priority Order

Recommended implementation order:

1. `colors`
2. `fontFamily`
3. `boxShadow`
4. `borderRadius`
5. `spacing`
6. `keyframes` and `animation`

Why this order:

- Colors and fonts remove the most repetition first.
- Shadows, radius, and spacing clean up component styling next.
- Animations can follow once the visual system is more stable.
