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
            white_border = 4 * bg.scale.to_i
            bg.scale < 5 ? shadow = 3*bg.scale.to_i : shadow = 10

            "https://res.cloudinary.com/picfair-test/image/upload/c_fill,h_#{img_height},l_#{publicId},w_#{img_width},r_0,bo_#{white_border}px_solid_rgb:000000,x_#{bg.pic_x},y_#{bg.pic_y}/e_shadow:20,x_#{shadow},y_#{shadow}/v1615990196/#{bg.pictureId}"
        end
    end

    def add_canvas(publicId="sample.jpg", size="100x100", orientation="portrait")
        backgrounds = Background.where(orientation: orientation).all
        backgrounds.map do |bg|
            img_width = (size.split("x")[0].to_i * bg.scale).to_i
            img_height = (size.split("x")[1].to_i * bg.scale).to_i
            deep = 4 * bg.scale.to_i
            bg.scale < 5 ? shadow = 3*bg.scale.to_i : shadow = 10

            "https://res.cloudinary.com/picfair-test/image/upload/$w_#{img_width},$h_#{img_height},l_#{publicId},$dp_#{deep},$wadp_$w_add_$dp,$hadp_$h_add_$dp/w_$w,h_$h,c_fill/w_$w,h_$h,c_fill,l_#{publicId},o_60/w_$dp,h_$h,c_crop,g_east/a_hflip/e_distort:0:0:$dp:$dp:$dp:$hadp:0:$h/x_$dp_mul_-1,g_north_east,fl_layer_apply/w_$w,h_$h,c_fill,l_#{publicId},o_60/w_$w,h_$dp,c_crop,g_south/a_vflip/e_distort:0:0:$w:0:$wadp:$dp:$dp:$dp/g_south,fl_layer_apply/f_auto,q_auto/#{bg.pictureId}"
          # "https://res.cloudinary.com/picfair-test/image/upload/$w_450,$h_810,l_fdhvzllc6ry5wziw1mo3,$dp_36,$wadp_$w_add_$dp,$hadp_$h_add_$dp/w_$w,h_$h,c_fill/w_$w,h_$h,c_fill,l_fdhvzllc6ry5wziw1mo3,o_60/w_$dp,h_$h,c_crop,g_east/a_hflip/e_distort:0:0:$dp:$dp:$dp:$hadp:0:$h/x_$dp_mul_-1,g_north_east,fl_layer_apply,x_100,y_-100/w_$w,h_$h,c_fill,l_fdhvzllc6ry5wziw1mo3,o_60/w_$w,h_$dp,c_crop,g_south/a_vflip/e_distort:0:0:$w:0:$wadp:$dp:$dp:$dp/g_south,fl_layer_apply,x_100,y_-100/f_auto,q_auto/v1615990196/chair_d9uybo.png"
          "https://res.cloudinary.com/picfair-test/image/upload/v1615990196/sample.jpg"
        end
    end

end
