@AGENTS.md

# AdoteMe

Pet adoption / rescue app built with Expo SDK 56 (dev client, not Expo Go), React Native 0.85, React 19, TypeScript strict, React Compiler enabled (`experiments.reactCompiler`).

## Commands

- `npm start` / `npm run android` / `npm run ios`: these wrap `expo start` with `EXPO_ROUTER_DISABLE_RN_NAVIGATION_CHECK=1` via cross-env. Always use the npm scripts, not a bare `npx expo start`.
- `npm run lint`: `expo lint`
- No test setup exists.
- Native config lives in `app.config.ts` (typed `ExpoConfig`). Secrets come from `.env` (`GOOGLE_MAPS_API_KEY`), which is gitignored. Changing plugins or native config requires a new dev build.

## Architecture

- Entry: `index.js` → `src/App.tsx` (SafeAreaView + `RootLayout`).
- Navigation: React Navigation, **not expo-router** (ignore the README).
  - `src/routes/root.tsx`: native stack (`home-tabs`)
  - `src/routes/home.tsx`: bottom tabs (home, explore, map, rescue, profile) with lucide icons via `<Icon>`
  - New screens are registered here.
- `src/screens/<name>/`: `index.tsx` (default export `XScreen`), `styles.ts`, and `components/` for screen-only pieces.
- `src/components/<Name>/index.tsx`: shared components (default export). Larger ones keep a sibling `styles.ts` and nested `components/` (see `Form/`, `Dropdown/`).
- `src/services/`: cross-cutting logic as HOCs (e.g. `withLocationService` injects a `location` prop and renders `NeedsPermission` until it's available).
- `src/styles/`: design tokens (`COLORS`, `FONTS`, `globalStyles`, `MapStyles`).
- `src/utils/`: small pure helpers (`debounce`, `formatNumber`).
- Mock data currently lives inline in screens / `src/utils`. There is no backend yet.

## Conventions

- Imports use the `@/` alias (→ `src/`, `@/assets/*` → `assets/`). Relative imports only for same-folder files (`./styles`, `./components/X`).
- Components: `export default function Name(props: Props)`. Props are a local `type Props = {...}`; exported prop types are named `XProps`. Destructure props in the signature with defaults there.
- Styling: `StyleSheet.create` only, no inline color or font literals. Use `COLORS.*` and `FONTS.fontSize/fontWeight/fontFamily` tokens. Screen styles go in `styles.ts` as `export const styles`. Small components define `styles` at the top of the file. Compose styles with arrays `[styles.x, cond ? {...} : null]`.
- Text: use `@/components/Text` (applies DM Sans, disables font scaling) instead of RN `Text`. Screen titles use `globalStyles.screenTitle` (Playfair Display).
- Icons: `<Icon name="..." />` from `@/components/Icons` (lucide-react-native names, typed `IconNames`).
- Variants: a map object keyed by mode (see `Button/index.tsx` `BUTTON_TYPES`).
- Lists: `FlatList` with `keyExtractor`, a `useCallback` `renderItem`, and header/empty components.
- User-facing strings are in **Brazilian Portuguese**. Code identifiers are in English.
- Formatting: Prettier defaults (double quotes, semicolons, trailing commas). VS Code organizes imports on save.
- Commits: Conventional Commits (`feat:`, `fix:`, `refactor:`, `chore:`, `wip:`), lowercase, short.

## Architecture principles (always apply)

Every implementation must follow **SOLID**, with special emphasis on **SRP (Single Responsibility Principle)**:

- **S: Single Responsibility.** Each component, hook, service or util has one reason to change.
  - Split UI from logic: screens compose, components render, and side effects (permissions, pickers, location, API calls) live in hooks (`useX`) or `src/services/`, not inline in JSX components.
  - Split a component when it mixes concerns (e.g. picker logic + preview + empty state), or when it grows past roughly 150 lines.
  - Styles stay in `styles.ts`, static data and mocks stay outside the render function, and pure helpers go in `src/utils/`.
- **O: Open/Closed.** Extend through props, variant maps (e.g. `BUTTON_TYPES`) and composition (`trigger`, render props such as `leftElement`). Don't add `if`/`switch` branches inside an existing component for each new case.
- **L: Liskov Substitution.** Variants and wrappers keep the contract of what they wrap. `NumberInput` accepts `InputProps`, and `Text` accepts `TextProps`, so they can be used wherever the base is expected.
- **I: Interface Segregation.** Keep props small and specific to what the component uses. Prefer several focused props or components over one large configurable one. Don't pass whole objects when a component needs only 1–2 fields.
- **D: Dependency Inversion.** Components depend on abstractions passed in (callbacks, values, HOCs or hooks such as `withLocationService`), not on concrete native modules or data sources. Controlled inputs receive `value`/`onChange` from their parent. Data fetching and native APIs are wrapped so they can be swapped or mocked in tests.

## Explaining implementations (always)

Every implementation summary must end with a **"Princípios e conceitos"** section (in Portuguese when the conversation is in Portuguese) explaining:

- which SOLID principles were applied and how, especially SRP;
- the design patterns used (HOC, controlled component, composition, variant map, custom hook, etc.);
- the platform or library concepts involved (e.g. Android `BlurTargetView`, safe area insets, runtime permissions).

Tie each point to the specific file or code it shaped, not generic definitions. Call out trade-offs and any place where a principle was knowingly bent.

## Gotchas

- Location on the Android emulator: set a location in Extended Controls before testing. `getCurrentPositionAsync` throws "Current location is unavailable" otherwise. `withLocationService` falls back to `getLastKnownPositionAsync`.
- Maps use `PROVIDER_GOOGLE` and require `GOOGLE_MAPS_API_KEY` at build time.
