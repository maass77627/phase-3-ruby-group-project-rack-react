# db/migrate/02_add_favorite_food_to_artists.rb

class AddImageToFoods < ActiveRecord::Migration[4.2]
    def change
      add_column :foods, :image, :string
    end
  end 