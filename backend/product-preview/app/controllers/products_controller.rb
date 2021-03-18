class ProductsController < ApplicationController
    def index
        products = Product.all

        render json: products
    end

    def add_frame
        link = Product.new.add_frame(params[:publicId], params[:scale], params[:size])

        render json: { link: link }
    end
end
