require 'pry'

class Application

  def call(env)
    resp = Rack::Response.new
    req = Rack::Request.new(env)

    

    if req.path.match(/foods/) && req.get?
      # return [200, { 'Content-Type' => 'application/json' }, [ {:message => "test response!"}.to_json ]]
      resp.write Food.all.to_json

    elsif req.path.match(/foods/) && req.post?
       data = JSON.parse req.body.read
      #  binding.pry
      food = Food.create(name: data["name"], description: data["description"], category: data["category"], calories: data["calories"], image: data["image"])
    #  binding.pry
       resp.write food.to_json
    #  binding.pry
      #  return [200, { 'Content-Type' => 'application/json' }, [ {:food => food}.to_json ]]   

    end
  

    resp.finish
  end

end
