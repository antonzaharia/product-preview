# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Product.delete_all
Background.delete_all
products = [
    {name: "canvas", url: "https://res.cloudinary.com/picfair-test/image/upload/v1616343163/canvas_hbf4lb.png"},
    {name: "print", url: "https://res.cloudinary.com/picfair-test/image/upload/v1616339828/print_aghzbg.jpg"},
    {name: "frame", url: "https://res.cloudinary.com/picfair-test/image/upload/v1616339827/frame_eqmenj.jpg"}
]

products.each do |p|
    Product.create(p)
end

backgrounds = [
    {pictureId: "couch_kvrh1r.png", orientation: "portrait", scale: 1.7, pic_x: -15, pic_y: -50, canvas: nil},
    {pictureId: "free_wall_rfudiq.jpg", orientation: "landscape", scale: 10.0, pic_x: -150, pic_y: 0, canvas: nil},
    {pictureId: "free_wall_rfudiq.jpg", orientation: "portrait", scale: 8.0, pic_x: -150, pic_y: 0, canvas: nil},
    {pictureId: "chair_d9uybo.png", orientation: "portrait", scale: 9.0, pic_x: 100, pic_y: -650, canvas: nil},
    {pictureId: "white_rvxbgw", orientation: "portrait", scale: 8.0, pic_x: 0, pic_y: 0, canvas: true},
    {pictureId: "test_pu9rdm", orientation: "landscape", scale: 3.5, pic_x: -100, pic_y: 0, canvas: true},
    {pictureId: "test_pu9rdm", orientation: "portrait", scale: 3.2, pic_x: -100, pic_y: 0, canvas: true},
    {pictureId: "white_rvxbgw", orientation: "landscape", scale: 8.0, pic_x: 0, pic_y: 0, canvas: true},
    {pictureId: "Untitled_t5nnpa", orientation: "landscape", scale: 10.0, pic_x: 0, pic_y: -100, canvas: true},
    {pictureId: "Untitled_t5nnpa", orientation: "portrait", scale: 10.0, pic_x: 0, pic_y: -100, canvas: true}
]

backgrounds.each do |bg|
    Background.create(bg)
end