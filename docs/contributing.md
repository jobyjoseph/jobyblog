# Contributing

Thank you for your interest in contributing to Headless Shopify! This project welcomes contributions from the community.

## How to Contribute

Contributions can take many forms:

- 🐛 Bug reports
- 💡 Feature requests
- 📝 Documentation improvements
- 🔧 Code contributions
- 🧪 Testing and quality assurance

## Getting Started

### 1. Fork the Repository

Fork the [headless-shopify repository](https://github.com/jobyjoseph/headless-shopify) to your GitHub account.

### 2. Clone Your Fork

```bash
git clone https://github.com/YOUR_USERNAME/headless-shopify.git
cd headless-shopify
```

### 3. Create a Branch

Create a feature branch for your changes:

```bash
git checkout -b feature/your-feature-name
```

Branch naming conventions:

- `feature/` - for new features
- `fix/` - for bug fixes
- `docs/` - for documentation updates
- `refactor/` - for code refactoring

### 4. Make Your Changes

Follow the project's coding standards and style guide. Ensure your code:

- Follows TypeScript best practices
- Includes proper type definitions
- Is properly formatted
- Passes linting checks

### 5. Test Your Changes

```bash
# Run linting
pnpm lint

# Build the project
pnpm build

# Test locally
pnpm dev
```

### 6. Commit Your Changes

Write clear, descriptive commit messages:

```bash
git add .
git commit -m "feat: add new product filter feature"
```

Follow conventional commit format:

- `feat:` - new features
- `fix:` - bug fixes
- `docs:` - documentation changes
- `style:` - formatting changes
- `refactor:` - code refactoring
- `test:` - adding tests
- `chore:` - maintenance tasks

### 7. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 8. Open a Pull Request

1. Go to the original repository
2. Click "New Pull Request"
3. Select your fork and branch
4. Fill out the PR template
5. Submit the pull request

## Pull Request Guidelines

### Before Submitting

- [ ] Code follows the project's style guide
- [ ] All tests pass
- [ ] Documentation is updated if needed
- [ ] Commit messages are clear and descriptive
- [ ] Branch is up to date with main

### PR Description

Include in your PR:

- **Purpose**: What does this PR do?
- **Changes**: What changes were made?
- **Testing**: How was it tested?
- **Screenshots**: If applicable, add screenshots
- **Related Issues**: Reference any related issues

## Code Style

### TypeScript

- Use TypeScript strictly
- Avoid `any` types
- Define proper interfaces and types
- Use functional components for React

### React Components

```typescript
// Good
interface Props {
  title: string;
  count: number;
}

export function Component({ title, count }: Props) {
  return <div>{title}: {count}</div>;
}
```

### File Naming

- React components: `PascalCase.tsx`
- Utilities: `camelCase.ts`
- Types: `camelCase.types.ts`
- Tests: `*.test.ts` or `*.spec.ts`

### Imports

Organize imports in this order:

1. React imports
2. Third-party libraries
3. Local components
4. Utils and types
5. Styles

## Reporting Bugs

When reporting bugs, please include:

1. **Description**: Clear description of the bug
2. **Steps to Reproduce**: How to reproduce the issue
3. **Expected Behavior**: What should happen
4. **Actual Behavior**: What actually happens
5. **Environment**:
   - OS
   - Node.js version
   - Browser (if applicable)
6. **Screenshots**: If applicable

## Feature Requests

For feature requests, please:

1. Check if the feature already exists or is planned
2. Clearly describe the feature
3. Explain the use case
4. Describe the expected behavior

## Questions and Discussions

For questions:

- Check existing [Issues](https://github.com/jobyjoseph/headless-shopify/issues)
- Open a new issue with the "question" label
- Contact: [reachjoby@gmail.com](mailto:reachjoby@gmail.com)

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on what is best for the community
- Show empathy towards others

## Security

If you discover a security vulnerability:

- **Do not** open a public issue
- Email [reachjoby@gmail.com](mailto:reachjoby@gmail.com)
- Provide details of the vulnerability
- Allow time for a fix before public disclosure

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

## Recognition

Contributors will be recognized in:

- README.md contributors section
- Release notes
- Project documentation

## Thank You!

Your contributions help make this project better for everyone. Thank you for taking the time to contribute! 🎉
