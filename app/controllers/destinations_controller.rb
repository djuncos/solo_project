class DestinationsController < ApplicationController



		def new
		    @destination = Destination.new
		    @user = User.edit
		end


		def show
		    @user = current_user
		    @spaces = Space.all
		    @destination = Destination.find(params[:id])
    		@location = Geocoder.search(@destination.address)
    		@dest_coordinates = [@location[0].latitude,@location[0].longitude]
    		@user_coordinates = [@user.latitude,@user.longitude]
		end
	

		def create
		    @destination = current_user.destinations.new(destination_params)	   
		    if @destination.save
			  flash[:notice] = "Destination was successfully created."
			  redirect_to @destination
		    else
		      redirect_to :back
		    end
		end


		def update
		    @destination = Destination.find(params[:id])
		    if @destination.update_attributes(destination_params)
		      flash[:notice] = "Destination was successfully updated."
		      redirect_to :back
		    else
		      render :back
		    end
	  	end

	  	def destroy
		    Destination.find(params[:id]).destroy
		    flash[:notice] = "Destination was successfully deleted."
		    redirect_to root_url
		end


		private

	    def destination_params
	      params.require(:destination).permit(:address)
	    end



end
