Rails.application.routes.draw do
  devise_for :users

  root 'pages#test_0'

  resources :pages, only: [] do
    collection do
      get :test_0, :test_1, :test_2, :test_3, :test_4
      get :test_5, :test_6
      post :test_2, :test_4
    end
  end
    namespace :cypress do
      delete 'cleanup', to: 'cleanup#destroy'
      resource :factories, only: %i[create]
    end
  end


