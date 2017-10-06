Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "welcome#index"

  devise_for :users
  resources :welcome, only: [:index]
  resources :users, only: [:index, :show]
  resources :computer, only: [:index]
  resources :friend, only: [:index]


end
