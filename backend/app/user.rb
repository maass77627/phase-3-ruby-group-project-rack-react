
class User < ActiveRecord::Base

has_many :foods



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
    
    ActiveRecord::Base.connection.execute(sql) 

end

end