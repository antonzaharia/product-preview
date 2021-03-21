class Product < ApplicationRecord
    def add_frame(publicId="sample.jpg", size="100x100", orientation="portrait")
        backgrounds = Background.where(orientation: orientation)&.order(pictureId: :desc).all
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
        backgrounds = Background.where(orientation: orientation)&.order(pictureId: :desc).all
        backgrounds.map do |bg|
            img_width = (size.split("x")[0].to_i * bg.scale).to_i
            img_height = (size.split("x")[1].to_i * bg.scale).to_i
            black_border = 4 * bg.scale.to_i
            shadow = 5*bg.scale.to_i

            "https://res.cloudinary.com/picfair-test/image/upload/c_fill,h_#{img_height},l_#{publicId},w_#{img_width},r_0,bo_#{black_border}px_solid_rgb:000000/e_shadow:20,x_#{shadow},y_#{shadow},fl_layer_apply,x_#{bg.pic_x},y_#{bg.pic_y}/v1615990196/#{bg.pictureId}"
        end
    end

    def add_canvas(publicId="sample.jpg", size="100x100", orientation="portrait")
        backgrounds = Background.where(orientation: orientation)&.where(canvas: true)&.order(pictureId: :desc).all
        backgrounds.map do |bg|
            img_width = (size.split("x")[0].to_i * bg.scale).to_i
            img_height = (size.split("x")[1].to_i * bg.scale).to_i
            deep = 2 * bg.scale.to_i
            bg.scale > 8 ? shadow = "#{bg.scale.to_i*6},x_10,y_10" : shadow = 30

            # "https://res.cloudinary.com/picfair-test/image/upload/c_fill,h_#{img_height},l_#{publicId},w_#{img_width},x_#{bg.pic_x},y_#{bg.pic_y}/c_fill,e_distort:0:0:#{deep}:#{deep}:#{deep}:#{img_height+deep}:0:#{img_height},h_#{img_height},l_#{publicId},o_60,w_#{deep},x_#{bg.pic_x+(img_width/2)+(deep/2)},y_#{bg.pic_y+(deep/2)}/c_fill,e_distort:0:0:#{img_width}:0:#{img_width+deep}:#{deep}:#{deep}:#{deep},h_#{deep},l_#{publicId},o_60,w_#{img_width},x_#{bg.pic_x+deep/2},y_#{bg.pic_y+(img_height/2)+(deep/2)}/v1616169294/#{bg.pictureId}"
            # "https://res.cloudinary.com/picfair-test/image/upload/$w_300,$h_500,$dp_10,$wadp_$w_add_$dp,$hadp_$h_add_$dp/w_$w,h_$h,c_fill/w_$w,h_$h,c_fill,l_sample,o_60,bo_1px_solid_rgb:FFFFFF/w_$dp,h_$h,c_crop,g_east/a_hflip/e_distort:0:0:$dp:$dp:$dp:$hadp:0:$h/x_$dp_mul_-1,g_north_east,fl_layer_apply/w_$w,h_$h,c_fill,l_sample,o_60,bo_1px_solid_rgb:FFFFFF/w_$w,h_$dp,c_crop,g_south/a_vflip/e_distort:0:0:$w:0:$wadp:$dp:$dp:$dp/g_south,fl_layer_apply/f_auto,q_auto/sample.png"
            # "https://res.cloudinary.com/picfair-test/image/upload/l_sample/w_700,h_500,c_fill/w_700,h_500,c_fill,o_60,bo_1px_solid_rgb:FFFFFF,l_sample/w_20,h_600,c_crop,g_east/a_hflip/e_distort:0:0:20:20:20:520:0:500/x_-20,y_9,g_east,fl_layer_apply/w_700,h_500,c_fill,o_60,bo_1px_solid_rgb:FFFFFF,l_sample/w_700,h_20,c_crop,g_south/a_vflip/e_distort:0:0:700:0:720:20:20:20/y_-1,g_south,fl_layer_apply/f_auto/free_wall_rfudiq.jpg"
            "https://res.cloudinary.com/picfair-test/image/upload/l_#{publicId}/w_#{img_width},h_#{img_height},c_fill/w_#{img_width},h_#{img_height},c_fill,o_60,l_#{publicId}/w_#{deep},h_#{img_height},c_crop,g_east/a_hflip/e_distort:0:0:#{deep}:#{deep}:#{deep}:#{img_height+deep}:0:#{img_height}/x_-#{deep},y_#{(deep/2)-1},g_east,fl_layer_apply/w_#{img_width},h_#{img_height},c_fill,o_60,l_#{publicId}/w_#{img_width},h_#{deep},c_crop,g_south/a_vflip/e_distort:0:0:#{img_width}:0:#{img_width+deep}:#{deep}:#{deep}:#{deep}/y_-1,g_south,fl_layer_apply/f_auto/a_1,c_fill,w_#{img_width},e_shadow:#{shadow}/#{bg.pictureId}"
           
        end
    end

end
