class CreateFoods < ActiveRecord::Migration[4.2]
    def change
      create_table :foods do |t|
        t.string :name
        t.string :description
        t.string :category
        t.integer :user_id
      end
    end
  end 