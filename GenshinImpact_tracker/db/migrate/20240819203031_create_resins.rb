class CreateResins < ActiveRecord::Migration[7.1]
  def change
    create_table :resins do |t|
      t.integer :current_level

      t.timestamps
    end
  end
end
