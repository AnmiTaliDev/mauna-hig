# Mauna HIG Documentation

[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](LICENSE)
[![Documentation License: CC BY-SA 4.0](https://img.shields.io/badge/Content-CC_BY--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)

## About

This repository contains the official documentation website for the Mauna Human Interface Guidelines. It is designed for developers, designers, and contributors building text-focused software on top of the Mauna design system.

## Dependencies

- Node.js 20 or higher
- npm 9 or higher

## Build

To install dependencies and build the static website:

```bash
npm install
npm run build
```

To run the local development server:

```bash
npm run dev
```

To preview the built production output:

```bash
npm run preview
```

## Content Structure

Documentation pages are written in MDX and managed via Astro Content Collections in `src/content/docs/`. Navigation items and page ordering correspond to the sequential sections defined in the Mauna Human Interface Guidelines specification.

## Acknowledgments

- SIL Open Font License for the Courier Prime and Inter typefaces
- Apache License 2.0 for JetBrains Mono
- Creative Commons for the CC BY-SA 4.0 licensing framework

## Links to docs and CONTRIBUTING

- Documentation site: [maunahig.anmitali.dev](https://maunahig.anmitali.dev)
- Contribution guidelines: [CONTRIBUTING.md](CONTRIBUTING.md)

## License

- Source code: GNU Affero General Public License v3.0 (see [LICENSE](LICENSE)).
- Documentation text and guidelines: Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0).
