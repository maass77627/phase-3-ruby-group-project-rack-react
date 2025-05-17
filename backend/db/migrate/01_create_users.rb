class CreateUsers < ActiveRecord::Migration[4.2]
    def change
      create_table :users do |t|
        t.string :firstname
        t.string :lastname
        t.string :email
        t.integer :age
        t.string :hometown
      end
    end
  end 