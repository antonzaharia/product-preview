class ProductsController < ApplicationController
    def index
        products = Product.all

        render json: products
    end

    def make_product
        link = Product.new.make_product(params[:publicId], params[:scale], params[:size])

        render json: { link: link }
    end
end
