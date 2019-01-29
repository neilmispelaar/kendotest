$(function() {

	// Append three empty divs that will be used by Kendo to convert to kendo objects
	$("#app").append("<input id=\"q1\" />")
	$("#app").append("<input id=\"q2\" />")
	//$("#app").append("<input id=\"q3\" />")


	$("#q1").kendoDropDownList({
		dataTextField: "ProductName",
		dataValueField: "ProductID",
		dataSource: {
			transport: {
				read: {
					dataType: "jsonp",
					url: "/js/temp.js",
				}
			}
		}
	});


	$("#q2").kendoDropDownList({
		index: 0,
		dataTextField: "ProductName",
		dataValueField: "ProductID",
		dataSource: {
			transport: {
				read: {
					dataType: "jsonp",
					url: "https://demos.telerik.com/kendo-ui/service/Products"
				}
			}
		}
	});

	/*
	$("#q3").kendoDropDownList({
		index: 0,
		dataTextField: "ProductName",
		dataValueField: "ProductID",
		filter: "contains",
		dataSource: {
			transport: {
				read: {
					dataType: "jsonp",
					url: "https://demos.telerik.com/kendo-ui/service/Products"
				}
			}
		}
	});
	*/


});
