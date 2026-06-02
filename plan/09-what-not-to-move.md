# What Not To Move

These are better left in regular CSS unless they clearly become reusable:

- highly specific one-off layout math
- complex layered notebook backgrounds
- large handcrafted component styling
- timeline card internals with very custom structure

Why:

- Over-configuring these usually makes the code harder to work with.
