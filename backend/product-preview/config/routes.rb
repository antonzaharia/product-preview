Rails.application.routes.draw do
  resources :products
  post '/make-product', to: "products#make"
end
