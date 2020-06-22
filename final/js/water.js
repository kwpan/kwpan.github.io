var temperature = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]
var density = [1000, 1000, 1000, 999, 998, 997, 996, 994, 992, 990, 988, 986, 983, 980, 978, 975, 972, 969, 965, 962, 958]
var dynamicViscosity = [0.00176, 0.00151, 0.0013, 0.00114, 0.00101, 0.000893, 0.0008, 0.000721, 0.000653, 0.000595, 0.000546, 0.000502, 0.000464, 0.000431, 0.000401, 0.000375, 0.000352, 0.000331, 0.000312, 0.000295, 0.000279]
var kinematicViscosity = [0.0000017600 , 0.0000015100 , 0.0000013000 , 0.0000011400 , 0.0000010100 , 0.0000008960 , 0.0000008030 , 0.0000007250 , 0.0000006590 , 0.0000006020 , 0.0000005520 , 0.0000005090 , 0.0000004720 , 0.0000004400 , 0.0000004100 , 0.0000003850 , 0.0000003620 , 0.0000003410 , 0.0000003230 , 0.0000003060 , 0.0000002920]
var surfaceTension = [0.0757, 0.0749, 0.0742, 0.0735, 0.0727, 0.072, 0.0712, 0.0704, 0.0696, 0.0688, 0.0679, 0.0671, 0.0662, 0.0654, 0.0645, 0.0636, 0.0627, 0.0618, 0.0608, 0.0599, 0.0589]

var tableData = creatWaterTable();

function creatWaterTable(){
    var res = '<div class="row label align-items-end">'
                +'<div class="col">Temperature<br>T (&degC)</div>'
                +'<div class="col">Density<br>&rho; (kg/m<sup>3</sup>)</div>'
                +'<div class="col">Dynamic Viscosity<br>&mu; (N&#8729;s/m<sup>2</sup>)</div>'
                +'<div class="col">Kinematic Viscosity<br>&nu; (m<sup>2</sup>/s)</div>'
                +'<div class="col">Surface Tension<br>&sigma; (N/m)</div>'
              +'</div>'
    
    for(var i=0; i<temperature.length; i++){
        if(i%2 == 0){
            res+='<div class="row even">'
                    +'<div class="col">' + temperature[i] + '</div>'
                    +'<div class="col">' + density[i] + '</div>'
                    +'<div class="col">' + dynamicViscosity[i].toExponential(2).toUpperCase() +'</div>'
                    +'<div class="col">' + kinematicViscosity[i].toExponential(2).toUpperCase() + '</div>'
                    +'<div class="col">' + surfaceTension[i].toFixed(4) + '</div>'
                  +'</div>'
        }
        else{
            res+='<div class="row odd">'
                    +'<div class="col">' + temperature[i] + '</div>'
                    +'<div class="col">' + density[i] + '</div>'
                    +'<div class="col">' + dynamicViscosity[i].toExponential(2).toUpperCase() +'</div>'
                    +'<div class="col">' + kinematicViscosity[i].toExponential(2).toUpperCase() + '</div>'
                    +'<div class="col">' + surfaceTension[i].toFixed(4) + '</div>'
                  +'</div>'
        }
        
    }

    return res
}

function trendIndexIncreasing(target, val){
    var i = 0
    var res = 0
    while(val >= target[i]){
        i++
    }
    if(val == target[i]){
        res = i
    }
    else{
        res = i + (val - target[i]) / (target[i+1] - target[i])
    }
    return res
}
function trendIndex(target, val){
    var i = 0
    var res = 0
    while(val <= target[i]){
        i++
    }
    if(val == target[i]){
        res = i
    }
    else{
        res = i-1 + (val - target[i-1]) / (target[i] - target[i-1])
    }
    return res
}

function trend(target, index){
    var res
    if(index % 1 == 0){
        res = target[index]
    }
    else{
        var i = index - index%1
        res = target[i] + (index-i) * (target[i+1]-target[i])
    }
    return res
}

$(()=>{
    $(".container.table").html(tableData)
})


$("#temperature").keyup(function(){
    $("#density").val(trend(density, trendIndexIncreasing(temperature, Number($("#temperature").val()))))
    $("#dynamicViscosity").val(trend(dynamicViscosity, trendIndexIncreasing(temperature, Number($("#temperature").val()))).toExponential(2).toUpperCase())
    $("#kinematicViscosity").val(trend(kinematicViscosity, trendIndexIncreasing(temperature, Number($("#temperature").val()))).toExponential(2).toUpperCase())
    $("#surfaceTension").val(trend(surfaceTension, trendIndexIncreasing(temperature, Number($("#temperature").val()))).toFixed(4))
})

$("#density").keyup(function(){
    $("#temperature").val(trend(temperature, trendIndex(density, Number($("#density").val()))).toFixed(4))
    $("#dynamicViscosity").val(trend(dynamicViscosity, trendIndex(density, Number($("#density").val()))).toExponential(2).toUpperCase())
    $("#kinematicViscosity").val(trend(kinematicViscosity, trendIndex(density, Number($("#density").val()))).toExponential(2).toUpperCase())
    $("#surfaceTension").val(trend(surfaceTension, trendIndex(density, Number($("#density").val()))).toFixed(4))
})

$("#dynamicViscosity").keyup(function(){
    $("#temperature").val(trend(temperature, trendIndex(dynamicViscosity, Number($("#dynamicViscosity").val()))).toFixed(4))
    $("#density").val(trend(density, trendIndex(dynamicViscosity, Number($("#dynamicViscosity").val()))))
    $("#kinematicViscosity").val(trend(kinematicViscosity, trendIndex(dynamicViscosity, Number($("#dynamicViscosity").val()))).toExponential(2).toUpperCase())
    $("#surfaceTension").val(trend(surfaceTension, trendIndex(dynamicViscosity, Number($("#dynamicViscosity").val()))).toFixed(4))
})

$("#kinematicViscosity").keyup(function(){
    $("#temperature").val(trend(temperature, trendIndex(kinematicViscosity, Number($("#kinematicViscosity").val()))).toFixed(4))
    $("#density").val(trend(density, trendIndex(kinematicViscosity, Number($("#kinematicViscosity").val()))))
    $("#dynamicViscosity").val(trend(dynamicViscosity, trendIndex(kinematicViscosity, Number($("#kinematicViscosity").val()))).toExponential(2).toUpperCase())
    $("#surfaceTension").val(trend(surfaceTension, trendIndex(kinematicViscosity, Number($("#kinematicViscosity").val()))).toFixed(4))
})

$("#surfaceTension").keyup(function(){
    $("#temperature").val(trend(temperature, trendIndex(surfaceTension, Number($("#surfaceTension").val()))).toFixed(4))
    $("#density").val(trend(density, trendIndex(surfaceTension, Number($("#surfaceTension").val()))))
    $("#dynamicViscosity").val(trend(dynamicViscosity, trendIndex(surfaceTension, Number($("#surfaceTension").val()))).toExponential(2).toUpperCase())
    $("#kinematicViscosity").val(trend(kinematicViscosity, trendIndex(surfaceTension, Number($("#surfaceTension").val()))).toExponential(2).toUpperCase())
})
