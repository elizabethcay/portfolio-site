---
title: how the shazam algorithm works & how i cloned it
description: short-time fourier transforms and extremely efficient hashing
date: 2026-08-02
draft: false
---

i built a song-recognition algorithm from scratch this summer, and the part that
stuck with me wasn't the fourier math — it was the indexing.

## the naive version is unusably slow

the first version matched query fingerprints against the database point by point.
correct, but hopeless at any real scale.

the fix was a **combinatorial hashing scheme**: instead of hashing single spectral
peaks, hash *pairs* of peaks along with the time delta between them. suddenly each
fingerprint is far more distinctive, and lookups become a hash-table hit instead of
a scan — about a **10,000× speedup** in query time.

## recognition held up in noise

using time-offset histogram matching, the recognizer hit ~90% accuracy at
signal-to-noise ratios above +7 dB. the histogram trick is elegant: correct matches
all agree on the *same* time offset, so they pile up into one tall bin while noise
scatters flat.

there's a longer write-up coming, but the short version: the interesting engineering
was never the transform. it was making the search cheap.
