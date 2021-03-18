class Product < ApplicationRecord
    def add_frame(publicId="sample.jpg", scale=1, size="100x100", background="sample.jpg")
        img_width = size.split("x")[0].to_i * scale.to_i
        img_height = size.split("x")[1].to_i * scale.to_i
        left_white = "c_fill,h_#{img_height + 10},l_white_xeach0,w_10,x_-#{(img_width / 2).to_i}"
        right_white = "c_fill,h_#{img_height + 10},l_white_xeach0,w_10,x_#{(img_width / 2).to_i}"
        top_white = "c_fill,h_10,l_white_xeach0,w_#{img_width + 10},y_-#{(img_height / 2).to_i}"
        bottom_white = "c_fill,h_10,l_white_xeach0,w_#{img_width + 10},y_#{(img_height / 2).to_i}"
        left_black = "c_fill,h_#{img_height + 15},l_black_xcxxhv,w_5,x_-#{(img_width / 2).to_i + 5}"
        right_black = "c_fill,h_#{img_height + 15},l_black_xcxxhv,w_5,x_#{(img_width / 2).to_i + 5}"
        top_black = "c_fill,h_5,l_black_xcxxhv,w_#{img_width + 15},y_-#{(img_height / 2 + 5).to_i}"
        bottom_black = "c_fill,h_5,l_black_xcxxhv,w_#{img_width + 15},y_#{(img_height / 2 + 5).to_i}"

        "https://res.cloudinary.com/picfair-test/image/upload/c_fill,h_#{img_height},l_#{publicId},w_#{img_width}/#{left_white}/#{right_white}/#{top_white}/#{bottom_white}/#{left_black}/#{right_black}/#{top_black}/#{bottom_black}/v1615990196/#{background}"
    end

end