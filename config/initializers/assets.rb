# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
# Rails.application.config.assets.precompile += %w( search.js )
Rails.application.config.assets.precompile += %w(*.png *.jpg *.jpeg *.gif)
Rails.application.config.assets.precompile += %w( gmap3_min.js )
Rails.application.config.assets.precompile += %w( jquery-2_1_4_min.js )
Rails.application.config.assets.precompile += %w( jquery-ui-1_10_4_custom_min.js )
Rails.application.config.assets.precompile += %w( jquery_ba-outside-events_min.js )
Rails.application.config.assets.precompile += %w( jquery_matchHeight-min.js )
Rails.application.config.assets.precompile += %w( jquery_vide_min.js )
Rails.application.config.assets.precompile += %w( jqueryui.js )
Rails.application.config.assets.precompile += %w( owl_carousel_min.js )
Rails.application.config.assets.precompile += %w( scripts.js )
Rails.application.config.assets.precompile += %w( tab.js )
Rails.application.config.assets.precompile += %w( transition.js )