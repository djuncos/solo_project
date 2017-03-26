class SpacesController < ApplicationController



		def new
		    @space = Space.new
		end


		def show
		    @space = Space.find(params[:id])
    		@location = Geocoder.search(@destination.address)
    		@coordinates = [@location[0].latitude,@location[0].longitude]
		end
	

		def create
		    @space = current_user.spaces.new(space_params)	   
		    if @space.save
			  flash[:notice] = "Space was successfully created."
			  redirect_to @space
		    else
		      redirect_to :back
		    end
		end


		# def update
		#     @destination = Destination.find(params[:id])
		#     if @destination.update_attributes(destination_params)
		#       flash[:notice] = "Destination was successfully updated."
		#       redirect_to :back
		#     else
		#       render :back
		#     end
	 #  	end

	  	def destroy
		    Space.find(params[:id]).destroy
		    flash[:notice] = "Space was successfully deleted."
		    redirect_to root_url
		end


		private

	    def space_params
	      params.require(:space).permit(:user_id, :latitude, :longitude)
	    end


end
