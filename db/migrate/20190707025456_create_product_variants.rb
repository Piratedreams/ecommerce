class CreateProductVariants < ActiveRecord::Migration[5.2]
  def change
    create_table :product_variants do |t|
      t.string :title, null: false
      t.decimal :price, precision: 15, scale: 2, null: false

      t.timestamps
    end
  end
end
