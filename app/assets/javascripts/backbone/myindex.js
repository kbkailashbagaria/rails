var create_view=function(){
	console.log ('creating view')
	var pv =new ProductsView({
			collections:pcs
		});

	//console.log("pc",pc, 'pv', pv);
}

// var pc = new Blog.Collections.ProductsCollection()
// pc.url= "http://10.1.2.49:3000/products.json"
// pc.fetch({
// success:create_view
// });

// var MyCollection = new Blog.Collections.ProductsCollection()
// 	MyCollection.url="/products.json"

// var RahulBCollection = new Blog.Collections.ProductsCollection()
// 	RahulBCollection.url= 'http://10.1.2.49:3000/products.json'

var RahulYCollection = new Blog.Collections.ProductsCollection()
	RahulYCollection.url= 'http://10.1.2.64:3000/products.json'

// var KishoreCollection = new Blog.Collections.ProductsCollection()
// 	KishoreCollection.url= 'http://10.1.2.27:3000/products.json'



var pcs=new Array()
//pcs[0]= MyCollection
 pcs[0]= RahulYCollection
// pcs[2]= RahulBCollection
// pcs[3]= KishoreCollection

var success_counter = 0
var update_counter = function() {
	success_counter++
	console.log(success_counter, success_counter == pcs.length)
	if (success_counter == pcs.length) {
		console.log("calling create_view")
		create_view()
	}
}

for (var i=0;i<pcs.length;i++)
{ 
	// beforeSend: function(){sucess: alert("yeyyy!")};
	pcs[i].fetch({
		complete: update_counter
	});
}