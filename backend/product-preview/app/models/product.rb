class Product < ApplicationRecord
    def add_frame(publicId="sample.jpg", size="100x100", orientation="portrait")
        backgrounds = Background.where(orientation: orientation).all
        backgrounds.map do |bg|
            img_width = (size.split("x")[0].to_i * bg.scale).to_i
            img_height = (size.split("x")[1].to_i * bg.scale).to_i
            black_border = 4 * bg.scale.to_i
            white_border = 4 * bg.scale.to_i
            bg.scale < 5 ? shadow = 3*bg.scale.to_i : shadow = 10

            "https://res.cloudinary.com/picfair-test/image/upload/c_fill,h_#{img_height},l_#{publicId},w_#{img_width},r_0,bo_#{white_border}px_solid_rgb:ffffff/bo_#{black_border}px_solid_rgb:000000/e_shadow:20,x_#{shadow},y_#{shadow}/fl_layer_apply,x_#{bg.pic_x},y_#{bg.pic_y}/v1615990196/#{bg.pictureId}"
        end
    end

    def add_print(publicId="sample.jpg", size="100x100", orientation="portrait")
        backgrounds = Background.where(orientation: orientation).all
        backgrounds.map do |bg|
            img_width = (size.split("x")[0].to_i * bg.scale).to_i
            img_height = (size.split("x")[1].to_i * bg.scale).to_i
            black_border = 4 * bg.scale.to_i
            white_border = 8 * bg.scale.to_i
            bg.scale < 5 ? shadow = 3*bg.scale.to_i : shadow = 7

            "https://res.cloudinary.com/picfair-test/image/upload/c_fill,h_#{img_height},l_#{publicId},w_#{img_width},r_0,bo_#{white_border}px_solid_rgb:ffffff/bo_#{black_border}px_solid_rgb:000000/e_shadow:20,x_#{shadow},y_#{shadow}/fl_layer_apply,x_#{bg.pic_x},y_#{bg.pic_y}/v1615990196/#{bg.pictureId}"
        end
    end

    def add_canvas(publicId="sample.jpg", size="100x100", orientation="portrait")
        backgrounds = Background.where(orientation: orientation).all
        backgrounds.map do |bg|
            img_width = (size.split("x")[0].to_i * bg.scale).to_i
            img_height = (size.split("x")[1].to_i * bg.scale).to_i
            black_border = 4 * bg.scale.to_i
            white_border = 8 * bg.scale.to_i
            bg.scale < 5 ? shadow = 3*bg.scale.to_i : shadow = 7

            "https://res.cloudinary.com/picfair-test/image/upload/c_fill,h_#{img_height},l_#{publicId},w_#{img_width},r_0,bo_#{white_border}px_solid_rgb:ffffff/bo_#{black_border}px_solid_rgb:000000/e_shadow:20,x_#{shadow},y_#{shadow}/fl_layer_apply,x_#{bg.pic_x},y_#{bg.pic_y}/v1615990196/#{bg.pictureId}"
        end
    end

end
