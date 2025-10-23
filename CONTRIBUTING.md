# Contributing to JUNO

Thank you for your interest in contributing to JUNO! This document provides guidelines for contributing to our professional website generation system.

---

## 🎯 **Contribution Guidelines**

### **Code of Conduct**

- Be respectful and professional
- Focus on quality over quantity
- Follow established patterns and conventions
- Test your changes thoroughly
- Document your contributions

### **Quality Standards**

- **TypeScript** - All code must be properly typed
- **Testing** - New features require tests
- **Accessibility** - WCAG 2.1 AA compliance
- **Performance** - Lighthouse 90+ scores
- **Documentation** - Clear, comprehensive docs

---

## 🚀 **Getting Started**

### **Development Setup**

```bash
# Fork and clone the repository
git clone https://github.com/yourusername/juno.git
cd juno

# Install dependencies
bun install

# Start development server
bun dev

# Run tests
bun test
```

### **Project Structure**

```
juno/
├── cli/                    # Site generation CLI
├── src/
│   ├── templates/         # Website templates
│   ├── components/         # Reusable components
│   ├── app/               # Next.js app
│   └── collections/        # Payload CMS models
├── docs/                   # Documentation
├── tests/                  # Test files
└── .github/               # GitHub workflows
```

---

## 🚀 **Quick Push Guide**

### **Before Pushing to GitHub**

Run this ONE command to validate your changes:

```bash
bun run ci:validate
```

This checks everything GitHub will check in ~5 minutes.

### **What Gets Tested**

| Test          | Time | Can Block Deployment? |
| ------------- | ---- | --------------------- |
| TypeScript    | 45s  | ❌ Yes - BLOCKS       |
| Build         | 3min | ❌ Yes - BLOCKS       |
| Documentation | 15s  | ✅ No - Info only     |
| Security      | 10s  | ✅ No - Info only     |
| Linting       | 30s  | ✅ No - Warnings OK   |

### **If Tests Fail**

#### **TypeScript Errors**

```bash
bun run typecheck
# Fix the errors shown in output
```

#### **Build Errors**

```bash
bun run ci:build
# Check the error output and fix
```

#### **Format & Fix All Issues**

```bash
bun run format     # Fix formatting
bun run lint:fix   # Auto-fix linting issues
```

### **Push Workflow**

```bash
# 1. Validate changes locally
bun run ci:validate

# 2. Commit changes
git add .
git commit -m "feat: your feature description"

# 3. Push to GitHub
git push origin your-branch-name
```

### **Commit Message Format**

Follow conventional commits:

```bash
# Features
git commit -m "feat: add new pricing table component"

# Bug fixes
git commit -m "fix: resolve mobile navigation issue"

# Documentation
git commit -m "docs: update deployment guide"

# Performance
git commit -m "perf: optimize image loading"

# Refactoring
git commit -m "refactor: simplify auth logic"
```

---

## 🧪 **Testing Requirements**

### **Test Coverage**

- **Unit Tests**: 80%+ code coverage
- **Integration Tests**: 70%+ coverage
- **E2E Tests**: 60%+ critical path coverage
- **Accessibility Tests**: 100% WCAG compliance

### **Running Tests**

```bash
# Unit tests
bun test

# E2E tests
bun run test:e2e

# Accessibility tests
bun run test:accessibility

# Performance tests
bun run test:performance

# All tests
bun run test:all
```

---

## 📝 **Pull Request Process**

### **Before Submitting**

1. **Fork the repository** and create a feature branch
2. **Write tests** for your changes
3. **Ensure all tests pass** locally
4. **Update documentation** if needed
5. **Follow coding standards** and conventions

### **Pull Request Template**

```markdown
## Description

Brief description of changes

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing

- [ ] Unit tests pass
- [ ] E2E tests pass
- [ ] Accessibility tests pass
- [ ] Performance tests pass

## Checklist

- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] Tests added/updated
```

### **Review Process**

1. **Automated checks** must pass
2. **Code review** by maintainers
3. **Testing** on multiple environments
4. **Documentation** review
5. **Approval** and merge

---

## 🎨 **Design Standards**

### **Template Development**

- **Awwwards Standards** - 7.0+/10 quality score
- **Mobile-First** - Responsive design approach
- **Accessibility** - WCAG 2.1 AA compliance
- **Performance** - Lighthouse 90+ scores
- **Documentation** - Clear usage examples

### **Component Development**

- **TypeScript** - Proper type definitions
- **Testing** - Unit and integration tests
- **Accessibility** - ARIA labels and keyboard navigation
- **Performance** - Optimized for speed
- **Documentation** - JSDoc comments

---

## 🚀 **Deployment Standards**

### **Quality Gates**

- **Build Success** - No build errors
- **Test Coverage** - Minimum coverage requirements
- **Performance** - Lighthouse scores 90+
- **Accessibility** - WCAG 2.1 AA compliance
- **Security** - No vulnerabilities

### **Environment Requirements**

- **Node.js** - Version 18 or higher
- **Bun** - Latest version
- **TypeScript** - Version 5.0+
- **Next.js** - Version 15+

---

## 📚 **Documentation Standards**

### **Code Documentation**

```typescript
/**
 * Component description
 *
 * @param props - Component props
 * @returns JSX element
 * @example
 * <Component title="Hello" />
 */
export function Component(props: ComponentProps) {
  // Implementation
}
```

### **README Updates**

- **Clear descriptions** of new features
- **Usage examples** with code snippets
- **Installation instructions** if needed
- **Breaking changes** clearly marked

---

## 🐛 **Bug Reports**

### **Bug Report Template**

```markdown
## Bug Description

Clear description of the bug

## Steps to Reproduce

1. Go to '...'
2. Click on '...'
3. See error

## Expected Behavior

What should happen

## Actual Behavior

What actually happens

## Environment

- OS: [e.g. macOS, Windows, Linux]
- Browser: [e.g. Chrome, Firefox, Safari]
- Version: [e.g. 1.0.0]

## Screenshots

If applicable, add screenshots

## Additional Context

Any other relevant information
```

---

## ✨ **Feature Requests**

### **Feature Request Template**

```markdown
## Feature Description

Clear description of the feature

## Use Case

Why is this feature needed?

## Proposed Solution

How should this feature work?

## Alternatives Considered

Other solutions you've considered

## Additional Context

Any other relevant information
```

---

## 🏆 **Recognition**

### **Contributor Recognition**

- **Contributors** listed in README
- **GitHub** contributor recognition
- **Documentation** credits
- **Community** appreciation

### **Types of Contributions**

- **Code** - Bug fixes, features, improvements
- **Documentation** - Guides, examples, tutorials
- **Testing** - Test cases, bug reports
- **Design** - Templates, components, UI/UX
- **Community** - Support, feedback, discussions

---

## 📞 **Getting Help**

### **Support Channels**

- **GitHub Issues** - Bug reports and feature requests
- **GitHub Discussions** - Community support and questions
- **Documentation** - Comprehensive guides in `/docs`
- **Code Review** - Feedback on pull requests

### **Community Guidelines**

- **Be respectful** and professional
- **Help others** when you can
- **Share knowledge** and best practices
- **Follow** the code of conduct

---

## 🎯 **Success Criteria**

### **Quality Metrics**

- **Code Quality** - Clean, maintainable code
- **Test Coverage** - Comprehensive test suite
- **Performance** - Fast, efficient code
- **Accessibility** - Inclusive design
- **Documentation** - Clear, helpful docs

### **Business Impact**

- **Client Success** - Better results for clients
- **Developer Experience** - Easier to use and maintain
- **Community Growth** - More contributors and users
- **Quality Improvement** - Higher standards and better outcomes

---

**Thank you for contributing to JUNO! Together, we're building the future of professional website generation.** 🚀
