# Contributing to JUNO

Thank you for your interest in contributing to JUNO! This document provides guidelines for contributing to the project.

## 🤝 Community

- 💬 **Discord:** [Join our community](https://discord.gg/juno)
- 📧 **Email:** support@juno.dev
- 🐛 **Issues:** [GitHub Issues](https://github.com/yourusername/juno/issues)

## 📋 How to Contribute

### 1. Bug Reports

When reporting bugs, please include:

- **Clear description** of the issue
- **Steps to reproduce** the problem
- **Expected behavior** vs actual behavior
- **Environment details** (OS, Node.js version, browser)
- **Screenshots** if applicable
- **Error messages** or console logs

### 2. Feature Requests

For new features:

- **Clear use case** description
- **Proposed solution** or approach
- **Alternative solutions** considered
- **Additional context** or references

### 3. Code Contributions

#### Setup Development Environment

```bash
# Clone the repository
git clone https://github.com/yourusername/juno.git
cd juno

# Install dependencies
bun install
# or npm install

# Copy environment variables
cp env.example .env

# Start development server
bun dev
```

#### Development Guidelines

1. **Code Style**
   - Use TypeScript strict mode
   - Follow ESLint configuration
   - Use Prettier for formatting
   - Write meaningful commit messages

2. **Testing**
   - Add tests for new features
   - Ensure existing tests pass
   - Test accessibility with axe-core
   - Test responsive design

3. **Documentation**
   - Update README if needed
   - Add JSDoc comments
   - Update changelog for significant changes

#### Pull Request Process

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

#### PR Guidelines

- **Clear title** describing the change
- **Detailed description** of what was changed and why
- **Screenshots** for UI changes
- **Test instructions** for reviewers
- **Breaking changes** clearly marked

## 🎯 Areas for Contribution

### High Priority
- 🐛 **Bug fixes** - Any reported issues
- 📱 **Mobile improvements** - Better responsive design
- ♿ **Accessibility** - WCAG 2.1 AA compliance improvements
- 🧪 **Tests** - More comprehensive test coverage
- 📚 **Documentation** - Improving guides and examples

### Medium Priority
- 🎨 **UI/UX improvements** - Design enhancements
- ⚡ **Performance** - Optimization opportunities
- 🔧 **Developer experience** - Better tooling and scripts
- 🌍 **Internationalization** - Multi-language support
- 📊 **Analytics** - Better tracking and insights

### Low Priority
- 🎨 **Themes** - Additional color schemes
- 🔌 **Integrations** - Third-party service integrations
- 📱 **PWA features** - Progressive web app capabilities
- 🤖 **Automation** - CI/CD improvements

## 🏗️ Project Structure

```
juno/
├── src/
│   ├── app/              # Next.js pages and routes
│   ├── components/       # React components
│   ├── collections/      # Payload CMS collections
│   ├── blocks/          # Content blocks
│   ├── utilities/       # Helper functions
│   └── data/            # Example data
├── docs/                # Documentation
├── tests/               # Test files
└── public/              # Static assets
```

## 🧪 Testing

### Run Tests

```bash
# All tests
bun test

# E2E tests only
bun test:e2e

# Accessibility tests
bun test:a11y

# Unit tests
bun run test:int
```

### Writing Tests

- **E2E Tests:** Use Playwright for user interactions
- **Unit Tests:** Use Vitest for component testing
- **Accessibility:** Use axe-core for WCAG compliance

## 📝 Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inspiring community for all. Please be respectful and constructive in all interactions.

### Expected Behavior

- ✅ Use welcoming and inclusive language
- ✅ Be respectful of differing viewpoints
- ✅ Accept constructive criticism gracefully
- ✅ Focus on what's best for the community
- ✅ Show empathy towards other community members

### Unacceptable Behavior

- ❌ Harassment, discrimination, or hate speech
- ❌ Trolling, insulting, or derogatory comments
- ❌ Personal or political attacks
- ❌ Public or private harassment
- ❌ Publishing private information without permission

## 📄 License

By contributing to JUNO, you agree that your contributions will be licensed under the MIT License.

## 🎉 Recognition

Contributors will be recognized in:
- **README.md** contributors section
- **CHANGELOG.md** for significant contributions
- **Discord** community highlights
- **GitHub** contributor graph

## 💡 Ideas and Suggestions

Have an idea? We'd love to hear it!

- 💬 **Discord:** Share in #ideas channel
- 📧 **Email:** Send detailed proposals
- 🐛 **GitHub:** Create an issue with the "enhancement" label

## 🚀 Getting Started

New to contributing? Here are some good first issues:

1. **Fix typos** in documentation
2. **Improve accessibility** of components
3. **Add tests** for existing features
4. **Update examples** with better content
5. **Improve mobile** responsiveness

## 📞 Questions?

Don't hesitate to reach out:

- 💬 **Discord:** [Join the conversation](https://discord.gg/juno)
- 📧 **Email:** support@juno.dev
- 📖 **Documentation:** [Full docs](./docs/README.md)

---

**Thank you for contributing to JUNO! Together we're building something amazing. 🚀**
