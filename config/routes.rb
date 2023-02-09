Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  get 'bye_world', to: 'hello_world#index'
  

  root to: 'generals#index'


  get '*path', to: 'generals#index'

  

  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
