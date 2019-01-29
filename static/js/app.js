$(function() {

	// Append three empty divs that will be used by Kendo to convert to kendo objects
	$("#app").append("<input id=\"cities\" />")
    $("#app").append("<input id=\"modes\" />")
	//$("#app").append("<input id=\"q3\" />")




	var cities = $("#cities").kendoDropDownList({
        placeholder: "Select city",
        dataTextField: "englishOfficeName",
		dataValueField: "officeId",
		dataSource: {
			transport: {
				read: {
					dataType: "json",
					url: "/js/data.js",
				}
			}
		}
	}).data("kendoComboBox");


	var modes = $("#modes").kendoDropDownList({
        autoBind: false,
        cascadeFrom: "cities",
        index: 0,
		dataTextField: "frenchOfficeName",
		dataValueField: "modeTypeId",
		dataSource: {
			transport: {
				read: {
					dataType: "json",
					url: "/js/data.js",
				}
			}
		}
	}).data("kendoComboBox");

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
