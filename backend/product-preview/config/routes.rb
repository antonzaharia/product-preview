Rails.application.routes.draw do
  resources :products
  post '/add-frame', to: "products#add_frame"
end
