class Blog.Models.Product extends Backbone.Model
  paramRoot: 'product'

  # url: () ->
  # 	return '/products/' + this.id + '.json'

  defaults:
    name: null
    price: null
    quantity: null
    category: null

class Blog.Collections.ProductsCollection extends Backbone.Collection
  model: Blog.Models.Product
  url: '/products'

# productModel = Backbone.Model.extend()

# pro = new productModel()

# pro.url = "products.json"
# pro.fetch()