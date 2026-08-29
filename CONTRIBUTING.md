# Contributing to Mauna HIG Documentation

Thank you for your interest in contributing to the Mauna Human Interface Guidelines documentation.

## Guidelines

1. Content accuracy: Changes to guideline specifications must match official design system decisions.
2. Structure: Documentation files reside in `src/content/docs/` in MDX format.
3. Code standards: Follow existing formatting without adding unnecessary markup or custom styles outside the token system.
4. Testing: Ensure the site builds without errors before submitting a pull request:

```bash
npm run build
```

## Pull Request Process

1. Fork the repository and create a branch for your changes.
2. Make your edits in `src/` or `src/content/docs/`.
3. Verify that `npm run build` succeeds.
4. Submit a pull request with a descriptive title explaining your modifications.
