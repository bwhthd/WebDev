class Users < ActiveRecord::Migration
  def change
  	create_table :users do |u|
  		u.string :name
  		u.string :email	
  	end

  	change_table :todo_items do |t|
  		t.integer :user_id
  	end
  end
end