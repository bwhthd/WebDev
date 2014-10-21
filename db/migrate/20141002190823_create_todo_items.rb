class CreateTodoItems < ActiveRecord::Migration
  def change
  	create_table :todo_items do |t|
  		t.string :name
  		t.string :details
  		t.string :due
  	end
  end
end
