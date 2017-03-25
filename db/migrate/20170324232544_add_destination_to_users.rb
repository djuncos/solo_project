class AddDestinationToUsers < ActiveRecord::Migration[5.0]
  def change

  	add_column :users, :dest_latitude, :decimal
  	add_column :users, :dest_longitude, :decimal


  end
end
