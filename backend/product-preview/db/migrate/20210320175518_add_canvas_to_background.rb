class AddCanvasToBackground < ActiveRecord::Migration[5.2]
  def change
    add_column :backgrounds, :canvas, :boolean
  end
end
