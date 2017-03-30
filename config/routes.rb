Rails.application.routes.draw do
  root 'pages#index'
  get '/rooms-available-list', to: 'pages#rooms_available_list'
  get '/our-stuffs', to: 'pages#our_staffs'
  get '/our-location', to: 'pages#location'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
