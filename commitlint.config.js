const types = {
  wip: {
    description: 'Work in progress',
    emoji: '🚧',
    value: 'wip',
  },
  chore: {
    description: 'Build process or auxiliary tool changes',
    emoji: '🤖',
    value: 'chore',
  },
  ci: {
    description: 'CI related changes',
    emoji: '🎡',
    value: 'ci',
  },
  docs: {
    description: 'Documentation only changes',
    emoji: '✏️',
    value: 'docs',
  },
  feat: {
    description: 'A new feature',
    emoji: '🎸',
    value: 'feat',
  },
  fix: {
    description: 'A bug fix',
    emoji: '🐛',
    value: 'fix',
  },
  perf: {
    description: 'A code change that improves performance',
    emoji: '⚡️',
    value: 'perf',
  },
  refactor: {
    description: 'A code change that neither fixes a bug or adds a feature',
    emoji: '💡',
    value: 'refactor',
  },
  style: {
    description: 'Markup, white-space, formatting, missing semi-colons...',
    emoji: '💄',
    value: 'style',
  },
  test: {
    description: 'Adding missing tests',
    emoji: '💍',
    value: 'test',
  },
  merge: {
    description: 'Merge branch',
    emoji: '🔗',
    value: 'merge',
  },
  track: {
    description: '埋点 & 数据上报',
    emoji: '📡',
    value: 'track',
  },
};

module.exports = {
  parserPreset: 'conventional-changelog-conventionalcommits',
  rules: {
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [2, 'always', 100],
    'footer-leading-blank': [1, 'always'],
    'footer-max-line-length': [2, 'always', 100],
    'header-max-length': [2, 'always', 100],
    'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [2, 'always', Object.keys(types)],
  },
  prompt: {
    questions: {
      type: {
        description: "Select the type of change that you're committing",
        enum: types,
      },
      scope: {
        description: 'What is the scope of this change (e.g. component or file name)',
      },
      subject: {
        description: 'Write a short, imperative tense description of the change',
      },
      body: {
        description: 'Provide a longer description of the change',
      },
      isBreaking: {
        description: 'Are there any breaking changes?',
      },
      breakingBody: {
        description:
          'A BREAKING CHANGE commit requires a body. Please enter a longer description of the commit itself',
      },
      breaking: {
        description: 'Describe the breaking changes',
      },
      isIssueAffected: {
        description: 'Does this change affect any open issues?',
      },
      issuesBody: {
        description:
          'If issues are closed, the commit requires a body. Please enter a longer description of the commit itself',
      },
      issues: {
        description: 'Add issue references (e.g. "fix #123", "re #123".)',
      },
    },
  },
};
