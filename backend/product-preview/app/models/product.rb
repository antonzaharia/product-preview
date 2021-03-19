class Product < ApplicationRecord
    def add_frame(publicId="sample.jpg", size="100x100", orientation="portrait")
        backgrounds = Background.where(orientation: orientation).all
        backgrounds.map do |bg|
            img_width = (size.split("x")[0].to_i * bg.scale).to_i
            img_height = (size.split("x")[1].to_i * bg.scale).to_i
            "https://res.cloudinary.com/picfair-test/image/upload/c_scale,h_#{img_height},l_#{publicId},w_#{img_width},r_0,bo_10px_solid_rgb:ffffff/bo_10px_solid_rgb:000000/e_shadow:20,x_5,y_5/fl_layer_apply,x_#{bg.pic_x},y_#{bg.pic_y}/v1615990196/#{bg.pictureId}"
        end
    end

end
