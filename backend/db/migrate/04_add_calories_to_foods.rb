class AddCaloriesToFoods < ActiveRecord::Migration[4.2]
    def change
      add_column :foods, :calories, :integer
    end
  end 