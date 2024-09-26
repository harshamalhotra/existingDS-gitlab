require 'gitlab-dangerfiles'

Gitlab::Dangerfiles.for_project(self) do |dangerfiles|
  # Import all plugins from the gem
  dangerfiles.import_plugins
  danger.import_dangerfile(path: 'danger/commit')
end
