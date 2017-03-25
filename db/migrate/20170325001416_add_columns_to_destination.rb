class AddColumnsToDestination < ActiveRecord::Migration[5.0]
  def change


  	add_column :destinations, :number, :string
  	add_column :destinations, :street, :string
  	add_column :destinations, :city, :string
  	add_column :destinations, :state, :string

  	add_column :destinations, :longitude, :decimal
  	add_column :destinations, :latitude, :decimal

  end
end
