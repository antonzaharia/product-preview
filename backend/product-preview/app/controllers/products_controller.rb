class ProductsController < ApplicationController
    def index
        products = Product.all

        render json: products
    end

    def add_frame
        links = Product.new.add_frame(params[:publicId], params[:size], params[:orientation])

        render json: { link: links }
    end

    def add_print
        links = Product.new.add_print(params[:publicId], params[:size], params[:orientation])

        render json: { link: links }
    end

    def add_canvas
        links = Product.new.add_canvas(params[:publicId], params[:size], params[:orientation])

        render json: { link: links }
    end
end
