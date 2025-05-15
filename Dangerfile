require 'gitlab-dangerfiles'

Gitlab::Dangerfiles.for_project(self) do |dangerfiles|
  # Import all plugins from the gem
  dangerfiles.import_plugins
  dangerfiles.import_dangerfiles(only: %w[commit_messages])
end
