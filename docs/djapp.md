# DJ App — Project Context

_Last updated: 2026-09-22_

## What it is

A real-time, shared-state, multi-user DJ application. One controller manipulates playback (play/pause, seek, gain, rate, loop points) and every connected user hears the same thing simultaneously — audio renders locally from each user's own track files, only state crosses the network.

## Status

Under active development. Core multi-user sync lands at M7.

Milestones complete: M0–M5
- M5 done: real `DeckComponent` UI — load/play/pause/seek/gain/rate, loop capture, confirmed on Windows host

## Tech stack

- **Client:** C++20, JUCE 8.0.12
- **Sync server:** Node.js 22 + `ws`
- **Build:** CMake + Ninja (Linux container), MSVC (Windows host for audio/GUI)
- **Testing:** ctest (client), shared protocol fixtures for wire-contract tests
- **Dev environment:** Dev Container for builds + tests; Windows host for audio playback

## Portfolio notes

- This is a personal/hobby project showing C++ and real-time systems skills
- GitHub repo is **public**: `github.com/NagareNegishi/DJ-App`
- Good showcase for: C++, JUCE, real-time sync, WebSocket protocol design
