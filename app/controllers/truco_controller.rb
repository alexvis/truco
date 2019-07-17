class TrucoController < ApplicationController
  before_action :authorize_user

  def index
  end

  def authorize_user
    if !user_signed_in?
      raise ActionController::RoutingError.new("Not Found")
    end
  end

end
