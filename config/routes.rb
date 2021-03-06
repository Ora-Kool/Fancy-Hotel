Rails.application.routes.draw do
  root 'pages#index'
  get '/rooms-available-list', to: 'pages#rooms_available_list'
  get '/our-stuffs', to: 'pages#our_staffs'
  get '/our-location', to: 'pages#location'
  get '/about-us', to: 'pages#about_us'
  get '/peoples-testimonies', to: 'pages#testimonials'
  get '/contact-us', to: 'pages#contact_us'
  get '/change-locale/:locale', to: 'language_setting#change_locale', as: :change_locale
  


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
