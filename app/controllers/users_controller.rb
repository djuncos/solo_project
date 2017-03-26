class UsersController < ApplicationController
  
  def index
    @destination = Destination.new 
  end


  def edit
    @user = User.find(params[:id])
  end

 
end



