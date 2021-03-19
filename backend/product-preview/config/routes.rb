Rails.application.routes.draw do
  resources :products
  post '/add-frame', to: "products#add_frame"
  post '/add-print', to: "products#add_print"
  post '/add-canvas', to: "products#add_canvas"
end
