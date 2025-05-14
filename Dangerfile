require 'gitlab-dangerfiles'

Gitlab::Dangerfiles.for_project(self) do |dangerfiles|
  # Import all plugins from the gem
  dangerfiles.import_plugins

  dangerfiles.config.files_to_category = {
    %r{\Adoc/} => :docs,
    %r{.*} => :frontend
  }.freeze

  dangerfiles.import_dangerfiles(except: %w[changelog])
end
