ProductView = Backbone.View.extend({

	className: 'prod',

	template:JST['backbone/templates/viewtemplate'],

	render:function(){

		var attributes = this.model.toJSON()
		attributes.count = this.options.counter
		var str =this.template(attributes)
		this.$el.html(str);
	},

	initialize: function(){
		this.render()
	},
	events: {
    "click #buy_product": "buy_product"
  	},
  	
  	buy_product: function() {
  		this.model.url='http://10.1.2.64:3000/products/'+this.model.id+".json"
  		if(this.model.get('quantity')==1)
  		{
  			 //that=this;

	    // 	this.model.destroy({
	    // 		success: function(){
	    // 			console.log(that.parent.collection)
	    // 		}
	    // 	});
			this.model.destroy();
	    	//this.model.collection.remove(that.model);
	    	this.remove()
	    	//this.render()
	    }
	    else
	    {
	    	this.model.attributes.quantity-=1;
	    	console.log(this.model)
	    	this.model.save(this.model.toJSON(),{beforeSend: function(){}})
	    	// this.model.save({'quantity':q},{
	    	// 	success: console.log(this.model)
	    	// })
	    	this.render()
	    }
  }
})
