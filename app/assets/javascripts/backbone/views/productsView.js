ProductsView = Backbone.View.extend({

	el:'#products',

	initialize: function() {
		this.render()
	},

	render: function(){
		pcs=this.options.collections
		d =  document.createDocumentFragment()
		console.log ('rendering', pcs.length)
		for(var j=0;j<pcs.length;j++)
		{
			pc = pcs[j]
			//self = this;
			i=1;
			 //d =  document.createDocumentFragment()
			d1 = document.createDocumentFragment()
			d2 = document.createDocumentFragment()
			t=0
			pc.each(function(m){
					console.log("inside")
					view=new ProductView({model:m, counter:i++})
					d1.appendChild(view.el)
					++t
					if(t==3){
						t=0
						d2 = document.createElement('div')
						d2.className = 'row'
	  					d2.appendChild(d1)
						d1 = document.createDocumentFragment()
						d.appendChild(d2)
					}
			})
			if(t>0)
			{
				d2 = document.createElement('div')
				d2.className = 'row'
	  			d2.appendChild(d1)
	  			d.appendChild(d2)
			}
			//this.$el.append(d);
		}
		this.$el.append(d);

	}
})