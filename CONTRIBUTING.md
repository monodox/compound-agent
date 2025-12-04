# Contributing to Compound Agent

Thank you for your interest in contributing to Compound Agent! We welcome contributions from the community and are excited to see what you'll build.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git
- Basic knowledge of React, Next.js, and TypeScript

### Development Setup

1. **Fork and clone the repository**
   ```bash
   git clone https://github.com/your-username/compound-agent.git
   cd compound-agent
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📋 How to Contribute

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When creating a bug report, include:

- **Clear title and description**
- **Steps to reproduce** the issue
- **Expected vs actual behavior**
- **Screenshots** if applicable
- **Environment details** (OS, browser, Node.js version)

### Suggesting Features

We welcome feature suggestions! Please:

- **Check existing feature requests** first
- **Provide clear use cases** and benefits
- **Include mockups or examples** if helpful
- **Consider implementation complexity**

### Pull Request Process

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Follow our coding standards
   - Add tests if applicable
   - Update documentation

3. **Test your changes**
   ```bash
   npm run build
   npm run lint
   ```

4. **Commit your changes**
   ```bash
   git commit -m "feat: add new feature description"
   ```

5. **Push and create PR**
   ```bash
   git push origin feature/your-feature-name
   ```

## 🎨 Coding Standards

### Code Style

- **TypeScript**: Use strict typing, avoid `any`
- **Components**: Use functional components with hooks
- **Naming**: Use descriptive names (camelCase for variables, PascalCase for components)
- **Imports**: Group and sort imports logically

### File Structure

```
src/
├── app/                 # Next.js app router pages
├── components/          # Reusable components
│   ├── ui/             # shadcn/ui components
│   └── ...             # Custom components
├── lib/                # Utility functions
└── types/              # TypeScript type definitions
```

### Component Guidelines

```tsx
// Good component structure
interface ComponentProps {
  title: string
  isActive?: boolean
}

export function Component({ title, isActive = false }: ComponentProps) {
  return (
    <div className="component-class">
      <h2>{title}</h2>
    </div>
  )
}
```

### Styling Guidelines

- **Use Tailwind CSS** for styling
- **Follow design system** colors and spacing
- **Use shadcn/ui components** when possible
- **Responsive design** with mobile-first approach

## 🧪 Testing

### Running Tests

```bash
npm run test        # Run tests
npm run test:watch  # Run tests in watch mode
npm run test:coverage # Run tests with coverage
```

### Writing Tests

- Write tests for new features and bug fixes
- Use descriptive test names
- Test both happy path and edge cases
- Mock external dependencies

## 📝 Documentation

### Code Documentation

- **Comment complex logic** and algorithms
- **Use JSDoc** for function documentation
- **Update README** for new features
- **Include examples** in documentation

### Commit Messages

Follow conventional commits format:

```
type(scope): description

feat(auth): add social login support
fix(dashboard): resolve data loading issue
docs(readme): update installation instructions
style(ui): improve button hover states
refactor(api): simplify error handling
test(auth): add login flow tests
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

## 🔍 Code Review Process

### What We Look For

- **Code quality** and maintainability
- **Performance** considerations
- **Security** best practices
- **Accessibility** compliance
- **Test coverage** for new features

### Review Timeline

- Initial review within 2-3 business days
- Follow-up reviews within 1 business day
- Merge after approval and CI passes

## 🏷️ Issue Labels

- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Improvements to docs
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention needed
- `priority: high` - Critical issues
- `priority: low` - Nice to have

## 🎯 Areas for Contribution

### High Priority
- **Performance optimizations**
- **Accessibility improvements**
- **Test coverage expansion**
- **Documentation updates**

### Feature Areas
- **Workflow templates**
- **Integration connectors**
- **Analytics dashboards**
- **Mobile responsiveness**

### Good First Issues
- **UI component improvements**
- **Documentation fixes**
- **Small bug fixes**
- **Code cleanup**

## 💬 Community

### Getting Help

- **GitHub Discussions** for questions and ideas
- **GitHub Issues** for bugs and feature requests
- **Email** support@compoundagent.com for sensitive issues

### Communication Guidelines

- Be respectful and inclusive
- Provide context and details
- Use clear, concise language
- Follow our [Code of Conduct](CODE_OF_CONDUCT.md)

## 🏆 Recognition

Contributors will be:
- **Listed in our contributors section**
- **Mentioned in release notes**
- **Invited to contributor events**
- **Eligible for contributor swag**

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

## ❓ Questions?

Don't hesitate to ask! We're here to help:
- Open a [GitHub Discussion](https://github.com/your-username/compound-agent/discussions)
- Email us at contribute@compoundagent.com
- Check our [FAQ](https://github.com/your-username/compound-agent/wiki/FAQ)

Thank you for contributing to Compound Agent! 🚀