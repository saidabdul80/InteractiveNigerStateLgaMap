//style="width:100%;height:98vh;"
cont_id = "calabarId"
sketch = `
     <span id="${cont_id}_jstip" class="jstip"></span>
        <div id="${cont_id}_mapwrapper">
            <div id="${cont_id}_map_base">
  
            <div>
        </div>
     `;
$(document).ready(function(){
    CalMap(cont_id,sketch);

})