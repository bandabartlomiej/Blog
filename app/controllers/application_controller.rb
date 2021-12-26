class ApplicationController < ActionController::Base
    def check_author_role!
        redirect_to root_url, notice: "You don't have access" unless current_user.author
      end
end
