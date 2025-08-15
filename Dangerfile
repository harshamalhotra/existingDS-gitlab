require 'gitlab-dangerfiles'

Gitlab::Dangerfiles.for_project(self) do |dangerfiles|
  # Import all plugins from the gem
  dangerfiles.import_plugins

  dangerfiles.config.included_optional_codeowners_sections_for_roulette.push(
    'Engineering',
    'GitLab UI Charts',
    'GitLab UI Technical Writing',
    'UX reviewers',
    'Objects',
    'AI',
  )

  dangerfiles.import_dangerfiles(except: %w[changelog simple_roulette])
end
