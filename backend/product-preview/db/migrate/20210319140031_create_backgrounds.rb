class CreateBackgrounds < ActiveRecord::Migration[5.2]
  def change
    create_table :backgrounds do |t|
      t.string :pictureId
      t.string :orientation
      t.float :scale
      t.integer :pic_x
      t.integer :pic_y

      t.timestamps
    end
  end
end
