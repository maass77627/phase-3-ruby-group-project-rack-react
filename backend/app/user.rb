
class User < ActiveRecord::Base

has_many :foods

# attr_accessor :firstname, :lastname, :email, :hometown

# def initialize(firstname, lastname, email, hometown)
#     @firstname = firstname
#     @lastname = lastname
#     @email = email
#     @hometown = hometown

# end

def self.create_table
    sql = <<-SQL
    CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY, 
    firstname TEXT,
    lastname TEXT,
    email TEXT, 
    hometown TEXT 
    )
    SQL
    # DB[:conn].execute(sql)
    ActiveRecord::Base.connection.execute(sql) 

end

end