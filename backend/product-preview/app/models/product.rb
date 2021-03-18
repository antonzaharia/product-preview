class Product < ApplicationRecord
    def make_product(publicId="sample", scale=1, size="100x100")
        img_width = size.split("x")[0].to_i * scale.to_i
        img_height = size.split("x")[1].to_i * scale.to_i
        left_white = "c_fill,h_#{img_height + 10},l_white_xeach0,w_10,x_-#{(img_width / 2).to_i}"
        right_white = "c_fill,h_#{img_height + 10},l_white_xeach0,w_10,x_#{(img_width / 2).to_i}"
        top_white = "c_fill,h_10,l_white_xeach0,w_#{img_width + 10},y_-#{(img_height / 2).to_i}"
        bottom_white = "c_fill,h_10,l_white_xeach0,w_#{img_width + 10},y_#{(img_height / 2).to_i}"
        left_black = "c_fill,h_#{img_height + 30},l_black_xcxxhv,w_10,x_-#{(img_width / 2).to_i + 10}"
        right_black = "c_fill,h_#{img_height + 30},l_black_xcxxhv,w_10,x_#{(img_width / 2).to_i + 15}"
        top_black = "c_fill,h_10,l_black_xcxxhv,w_#{img_width + 20},y_-#{(img_height / 2 + 10).to_i}"
        bottom_black = "c_fill,h_10,l_black_xcxxhv,w_#{img_width + 20},y_#{(img_height / 2 + 10).to_i}"

        "https://res.cloudinary.com/picfair-test/image/upload/c_fill,h_#{img_height},w_#{img_width}/c_fill,h_#{img_height},w_#{img_width}/#{left_white}/#{right_white}/#{top_white}/#{bottom_white}/#{left_black}/#{right_black}/#{top_black}/#{bottom_black}/v1615990196/#{publicId}"
    end
end
