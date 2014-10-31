# app.rb
# this is a simple Sinatra app that will test to make sure that your 
# system is set up for the class correctly

# use bundler
require 'rubygems'
require 'bundler/setup'

# load all of the gems in the gemfile
Bundler.require
require './models/TodoItem.rb'
require './models/User.rb'

if ENV['DATABASE_URL']
  ActiveRecord::Base.establish_connection(ENV['DATABASE_URL'])
else
  ActiveRecord::Base.establish_connection(
    :adapter  => 'sqlite3',
    :database => 'db/development.db',
    :encoding => 'utf8'
  )
end

get '/delete' do
	TodoItem.find(params[:id]).destroy
	redirect '/' + params[:name]
end

get '/:name' do
	@user = User.find_by(name: params[:name])
	@allItems = @user.todo_items
	erb :user
end

post '/:name' do
	@user = User.find_by(name: params[:name])
	TodoItem.create(name: params[:title], details: params[:details], due: params[:due], user_id: @user.id)
	redirect '/' + params[:name]
end

get '/' do
	erb :index
end

post '/' do
	User.create(name: params[:name])
	redirect '/' + params[:name]
end







