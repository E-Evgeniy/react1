Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  resources :tests

  root to: 'generals#index'
  
  resources :messages
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
