//width:100%;height:98vh;"
let cont_id = "zamfaraId"
let sketch = `
<h1></h1>
     <span id="jstip" class="jstip"></span>
        <div id="mapwrapper">
            <div id="map_base">

            <g id="visnames">
            <div>
        </div>
     `;
     let zamfara = new MakeMap(cont_id)
     zamfara.sketchMap(k_sketch)            
 $(document).ready(function(){    
     zamfara.CalMap(zamfara.propertyMaker());
 })