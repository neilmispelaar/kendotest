<script id="template" type="text/x-kendo-template">
    <ul>
    # for (var i = 0; i < data.length; i++) { #
        <li>#= data[i] #</li>
    # } #
    </ul>
</script>

$(function() {
    

    var index = new kendo.View('<span>Hello World!</span>');

    var myFirstComboBox = new kendo.ui.ComboBox( , {

                            }


    index.render("#app");


    // Render a combobox 



});