require 'pry'
require 'json'

class Application

  def call(env)
    resp = Rack::Response.new
    req = Rack::Request.new(env)

    if req.path.match(/foods/) && req.get?
      resp.write Food.all.to_json

    elsif req.path.match(/foods/) && req.post?
       data = JSON.parse req.body.read
       food = Food.create(name: data["name"], description: data["description"], category: data["category"], calories: data["calories"], image: data["image"])
    
       resp.write(food.to_json)
      
    elsif req.delete?
      puts "recieved request"
      id = req.path.split("/foods/").last
      Food.find(id).delete
    else
      resp.write "Path Not Found"
    end
    resp.finish
    end

    end
