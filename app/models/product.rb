class Product < ActiveRecord::Base
  attr_accessible :category, :name, :price, :quantity
  # belongs_to :category
end
