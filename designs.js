
var table = document.getElementById("pixelCanvas");
var submitButton = document.getElementById('submitButton');


/**
 * submit function clears the grid 
 */
submitButton.addEventListener('click', function () {

    let color = document.getElementById("colorPicker").value;
    document.getElementById("colorPicker").value = '#ffffff';
    makeGrid();
    document.getElementById("colorPicker").value = color;
});
/**
 * Create a gridview based on dimensions specify through the parameters
 * @param {*} width The widht of gridview
 * @param {*} height The height of gridview
 */
function makeGrid() {

    var width = document.getElementById("inputWidth").value;
    var height = document.getElementById("inputHeight").value;

    for (var i = 0; i < table.rows.length; i++) {
        document.getElementById("pixelCanvas").deleteRow(i--);
    }

    for (var i = 0; i < height; i++) {

        var row = document.createElement("TR");
        row.setAttribute("id", "row" + i);
        table.appendChild(row);
        for (var j = 0; j < width; j++) {

            var data = document.createElement("TD");
            var node = document.createTextNode("");
            data.appendChild(node);
            document.getElementById("row" + i).appendChild(data);
            table.rows[i].cells[j].onclick = function () {

                this.style.backgroundColor = document.getElementById("colorPicker").value;
            };
        }
    }

}


