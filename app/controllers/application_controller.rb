class ApplicationController < ActionController::Base
    product_from_forgery with: :exception
end
 