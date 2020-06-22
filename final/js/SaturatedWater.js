var temperature = [0.01, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195, 200]
var satPressure = [0.6117, 0.8725, 1.2281, 1.7057, 2.3392, 3.1698, 4.2469, 5.6291, 7.3851, 9.5953, 12.352, 15.763, 19.947, 25.043, 31.202, 38.597, 47.416, 57.868, 70.183, 84.609, 101.42, 120.9, 143.38, 169.18, 198.67, 232.23, 270.28, 313.22, 361.53, 415.68, 476.16, 543.49, 618.23, 700.93, 792.18, 892.6, 1002.8, 1123.5, 1255.2, 1398.8, 1554.9]
var satLiquidSpecificVolume = [0.001, 0.001, 0.001, 0.001001, 0.001002, 0.001003, 0.001004, 0.001006, 0.001008, 0.00101, 0.001012, 0.001015, 0.001017, 0.00102, 0.001023, 0.001026, 0.001029, 0.001032, 0.001036, 0.00104, 0.001043, 0.001047, 0.001052, 0.001056, 0.00106, 0.001065, 0.00107, 0.001075, 0.00108, 0.001085, 0.001091, 0.001096, 0.001102, 0.001108, 0.001114, 0.001121, 0.001127, 0.001134, 0.001141, 0.001149, 0.001157]
var satVaporSpecificVolume = [206, 147.03, 106.32, 77.885, 57.762, 43.34, 32.879, 25.205, 19.515, 15.251, 12.026, 9.5639, 7.667, 6.1935, 5.0396, 4.1291, 3.4053, 2.8261, 2.3593, 1.9808, 1.672, 1.4186, 1.2094, 1.036, 0.89133, 0.77012, 0.66808, 0.58179, 0.5085, 0.446, 0.39248, 0.34648, 0.3068, 0.27244, 0.2426, 0.21659, 0.19384, 0.1739, 0.15636, 0.14089, 0.12721]
var satLiquidInternalEnergy = [0, 21.019, 42.02, 62.98, 83.913, 104.83, 125.73, 146.63, 167.53, 188.43, 209.33, 230.24, 251.16, 272.09, 293.04, 313.99, 334.97, 355.96, 376.97, 398, 419.06, 440.15, 461.27, 482.42, 503.6, 524.83, 546.1, 567.41, 588.77, 610.19, 631.66, 653.19, 674.79, 696.46, 718.2, 740.02, 761.92, 783.91, 806, 828.18, 850.46]
var EvapInternalEnergy = [2374.9, 2360.8, 2346.6, 2332.5, 2318.4, 2304.3, 2290.2, 2276, 2261.9, 2247.7, 2233.4, 2219.1, 2204.7, 2190.3, 2175.8, 2161.3, 2146.6, 2131.9, 2117, 2102, 2087, 2071.8, 2056.4, 2040.9, 2025.3, 2009.5, 1993.4, 1977.3, 1960.9, 1944.2, 1927.4, 1910.3, 1893, 1875.4, 1857.5, 1839.4, 1820.9, 1802.1, 1783, 1763.6, 1743.7]
var satVaporInternalEnergy = [2374.9, 2381.8, 2388.7, 2395.5, 2402.3, 2409.1, 2415.9, 2422.7, 2429.4, 2436.1, 2442.7, 2449.3, 2455.9, 2462.4, 2468.9, 2475.3, 2481.6, 2487.8, 2494, 2500.1, 2506, 2511.9, 2517.7, 2523.3, 2528.9, 2534.3, 2539.5, 2544.7, 2549.6, 2554.4, 2559.1, 2563.5, 2567.8, 2571.9, 2575.7, 2579.4, 2582.8, 2586, 2589, 2591.7, 2594.2]
var satLiquidEnthalpy = [0.001, 21.02, 42.022, 62.982, 83.915, 104.83, 125.74, 146.64, 167.53, 188.44, 209.34, 230.26, 251.18, 272.12, 293.07, 314.03, 335.02, 356.02, 377.04, 398.09, 419.17, 440.28, 461.42, 482.59, 503.81, 525.07, 546.38, 567.75, 589.16, 610.64, 632.18, 653.79, 675.47, 697.24, 719.08, 741.02, 763.05, 785.19, 807.43, 829.78, 852.26]
var EvapEnthalpy = [2500.9, 2489.1, 2477.2, 2465.4, 2453.5, 2441.7, 2429.8, 2417.9, 2406, 2394, 2382, 2369.8, 2357.7, 2345.4, 2333, 2320.6, 2308, 2295.3, 2282.5, 2269.6, 2256.4, 2243.1, 2229.7, 2216, 2202.1, 2188.1, 2173.7, 2159.1, 2144.3, 2129.2, 2113.8, 2098, 2082, 2065.6, 2048.8, 2031.7, 2014.2, 1996.2, 1977.9, 1959, 1939.8]
var satVaporEnthalpy = [2500.9, 2510.1, 2519.2, 2528.3, 2537.4, 2546.5, 2555.6, 2564.6, 2573.5, 2582.4, 2591.3, 2600.1, 2608.8, 2617.5, 2626.1, 2634.6, 2643, 2651.4, 2659.6, 2667.6, 2675.6, 2683.4, 2691.1, 2698.6, 2706, 2713.1, 2720.1, 2726.9, 2733.5, 2739.8, 2745.9, 2751.8, 2757.5, 2762.8, 2767.9, 2772.7, 2777.2, 2781.4, 2785.3, 2788.8, 2792]
var satLiquidEntropy = [0, 0.0763, 0.1511, 0.2245, 0.2965, 0.3672, 0.4368, 0.5051, 0.5724, 0.6386, 0.7038, 0.768, 0.8313, 0.8937, 0.9551, 1.0158, 1.0756, 1.1346, 1.1929, 1.2504, 1.3072, 1.3634, 1.4188, 1.4737, 1.5279, 1.5816, 1.6346, 1.6872, 1.7392, 1.7908, 1.8418, 1.8924, 1.9426, 1.9923, 2.0417, 2.0906, 2.1392, 2.1875, 2.2355, 2.2831, 2.3305]
var EvapEntropy = [9.1556, 8.9487, 8.7488, 8.5559, 8.3696, 8.1895, 8.0152, 7.8466, 7.6832, 7.5247, 7.371, 7.2218, 7.0769, 6.936, 6.7989, 6.6655, 6.5355, 6.4089, 6.2853, 6.1647, 6.047, 5.9319, 5.8193, 5.7092, 5.6013, 5.4956, 5.3919, 5.2901, 5.1901, 5.0919, 4.9953, 4.9002, 4.8066, 4.7143, 4.6233, 4.5335, 4.4448, 4.3572, 4.2705, 4.1847, 4.0997]
var satVaporEntropy = [9.1556, 9.0249, 8.8999, 8.7803, 8.6661, 8.5567, 8.452, 8.3517, 8.2556, 8.1633, 8.0748, 7.9898, 7.9082, 7.8296, 7.754, 7.6812, 7.6111, 7.5435, 7.4782, 7.4151, 7.3542, 7.2952, 7.2382, 7.1829, 7.1292, 7.0771, 7.0265, 6.9773, 6.9294, 6.8827, 6.8371, 6.7927, 6.7492, 6.7067, 6.665, 6.6242, 6.5841, 6.5447, 6.5059, 6.4678, 6.4302]


var tableData = creatWaterTable();

function creatWaterTable() {
    var res = '<div class="row label align-items-end">'
        + '<div class="col-1">'
        + '<div class="row label">'
        + '<div class="col"></div>'
        + '</div>'
        + '<div class="row label">'
        + '<div class="col">Temp.<br>T (&degC)</div>'
        + '</div>'
        + '</div>'

        + '<div class="col-1">'
        + '<div class="row label">'
        + '<div class="col"></div>'
        + '</div>'
        + '<div class="row label">'
        + '<div class="col">Sat. press.<br>P<sub>sat</sub> (kPa)</div>'
        + '</div>'
        + '</div>'

        + '<div class="col-2">'
        + '<div class="row label botBorder sideMargin">'
        + '<div class="col">Specific volume<br>m<sup>3</sup>/kg</div>'
        + '</div>'
        + '<div class="row label align-items-end">'
        + '<div class="col">Sat. liquid<br>V<sub>f</sub></div>'
        + '<div class="col">Sat. vapor<br>V<sub>g</sub></div>'
        + '</div>'
        + '</div>'

        + '<div class="col">'
        + '<div class="row label botBorder sideMargin">'
        + '<div class="col">Internal energy<br>kJ/kg</div>'
        + '</div>'
        + '<div class="row label align-items-end">'
        + '<div class="col">Sat. liquid<br>U<sub>f</sub></div>'
        + '<div class="col">Evap.<br>U<sub>fg</sub></div>'
        + '<div class="col">Sat. vapor<br>U<sub>g</sub></div>'
        + '</div>'
        + '</div>'

        + '<div class="col">'
        + '<div class="row label botBorder sideMargin">'
        + '<div class="col">Enthalpy<br>kJ/kg</div>'
        + '</div>'
        + '<div class="row label align-items-end">'
        + '<div class="col">Sat. liquid<br>h<sub>f</sub></div>'
        + '<div class="col">Evap.<br>h<sub>fg</sub></div>'
        + '<div class="col">Sat. vapor<br>h<sub>g</sub></div>'
        + '</div>'
        + '</div>'

        + '<div class="col">'
        + '<div class="row label botBorder sideMargin">'
        + '<div class="col">Entropy<br>kJ/kg&#8729;K</div>'
        + '</div>'
        + '<div class="row label align-items-end">'
        + '<div class="col">Sat. liquid<br>s<sub>f</sub></div>'
        + '<div class="col">Evap.<br>s<sub>fg</sub></div>'
        + '<div class="col">Sat. vapor<br>s<sub>g</sub></div>'
        + '</div>'
        + '</div>'
        + '</div>'

    for (var i = 0; i < temperature.length; i++) {
        if (i == 0) {
            res += '<div class="row even">'
                + '<div class="col-1">' + temperature[i].toFixed(2) + '</div>'
                + '<div class="col-1">' + satPressure[i].toFixed(4) + '</div>'
                + '<div class="col-1">' + satLiquidSpecificVolume[i].toFixed(6) + '</div>'
                + '<div class="col-1">' + satVaporSpecificVolume[i].toFixed(5) + '</div>'
                + '<div class="col">' + satLiquidInternalEnergy[i].toFixed(3) + '</div>'
                + '<div class="col">' + EvapInternalEnergy[i].toFixed(1) + '</div>'
                + '<div class="col">' + satVaporInternalEnergy[i].toFixed(1) + '</div>'
                + '<div class="col">' + satLiquidEnthalpy[i].toFixed(3) + '</div>'
                + '<div class="col">' + EvapEnthalpy[i].toFixed(1) + '</div>'
                + '<div class="col">' + satVaporEnthalpy[i].toFixed(1) + '</div>'
                + '<div class="col">' + satLiquidEntropy[i].toFixed(4) + '</div>'
                + '<div class="col">' + EvapEntropy[i].toFixed(4) + '</div>'
                + '<div class="col">' + satVaporEntropy[i].toFixed(4) + '</div>'
                + '</div>'
        }
        else if (i % 10 < 5 && i != 40) {
            res += '<div class="row even">'
                + '<div class="col-1">' + temperature[i].toFixed(0) + '</div>'
                + '<div class="col-1">' + satPressure[i].toFixed(4) + '</div>'
                + '<div class="col-1">' + satLiquidSpecificVolume[i].toFixed(6) + '</div>'
                + '<div class="col-1">' + satVaporSpecificVolume[i].toFixed(5) + '</div>'
                + '<div class="col">' + satLiquidInternalEnergy[i].toFixed(3) + '</div>'
                + '<div class="col">' + EvapInternalEnergy[i].toFixed(1) + '</div>'
                + '<div class="col">' + satVaporInternalEnergy[i].toFixed(1) + '</div>'
                + '<div class="col">' + satLiquidEnthalpy[i].toFixed(3) + '</div>'
                + '<div class="col">' + EvapEnthalpy[i].toFixed(1) + '</div>'
                + '<div class="col">' + satVaporEnthalpy[i].toFixed(1) + '</div>'
                + '<div class="col">' + satLiquidEntropy[i].toFixed(4) + '</div>'
                + '<div class="col">' + EvapEntropy[i].toFixed(4) + '</div>'
                + '<div class="col">' + satVaporEntropy[i].toFixed(4) + '</div>'
                + '</div>'
        }
        else {
            res += '<div class="row odd">'
                + '<div class="col-1">' + temperature[i].toFixed(0) + '</div>'
                + '<div class="col-1">' + satPressure[i].toFixed(4) + '</div>'
                + '<div class="col-1">' + satLiquidSpecificVolume[i].toFixed(6) + '</div>'
                + '<div class="col-1">' + satVaporSpecificVolume[i].toFixed(5) + '</div>'
                + '<div class="col">' + satLiquidInternalEnergy[i].toFixed(3) + '</div>'
                + '<div class="col">' + EvapInternalEnergy[i].toFixed(1) + '</div>'
                + '<div class="col">' + satVaporInternalEnergy[i].toFixed(1) + '</div>'
                + '<div class="col">' + satLiquidEnthalpy[i].toFixed(3) + '</div>'
                + '<div class="col">' + EvapEnthalpy[i].toFixed(1) + '</div>'
                + '<div class="col">' + satVaporEnthalpy[i].toFixed(1) + '</div>'
                + '<div class="col">' + satLiquidEntropy[i].toFixed(4) + '</div>'
                + '<div class="col">' + EvapEntropy[i].toFixed(4) + '</div>'
                + '<div class="col">' + satVaporEntropy[i].toFixed(4) + '</div>'
                + '</div>'
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

$(() => {
    $(".table").html(tableData)
    var i = 3
    $("#temperature").val(temperature[i].toFixed(2))
    $("#satPressure").val(satPressure[i].toFixed(4))
    $("#satLiquidSpecificVolume").val(satLiquidSpecificVolume[i].toFixed(6))
    $("#satVaporSpecificVolume").val(satVaporSpecificVolume[i].toFixed(5))
    $("#satLiquidInternalEnergy").val(satLiquidInternalEnergy[i].toFixed(3))
    $("#EvapInternalEnergy").val(EvapInternalEnergy[i].toFixed(1))
    $("#satVaporInternalEnergy").val(satVaporInternalEnergy[i].toFixed(1))
    $("#satLiquidEnthalpy").val(satLiquidEnthalpy[i].toFixed(3))
    $("#EvapEnthalpy").val(EvapEnthalpy[i].toFixed(1))
    $("#satVaporEnthalpy").val(satVaporEnthalpy[i].toFixed(4))
    $("#satLiquidEntropy").val(satLiquidEntropy[i].toFixed(4))
    $("#EvapEntropy").val(EvapEntropy[i].toFixed(4))
    $("#satVaporEntropy").val(satVaporEntropy[i].toFixed(4))
})

$("#temperature").keyup(function(){
    var i = trendIndexIncreasing(temperature, Number($("#temperature").val()))
    // $("#temperature").val(trend(temperature, i).toFixed(2))
    $("#satPressure").val(trend(satPressure, i).toFixed(4))
    $("#satLiquidSpecificVolume").val(trend(satLiquidSpecificVolume, i).toFixed(6))
    $("#satVaporSpecificVolume").val(trend(satVaporSpecificVolume, i).toFixed(5))
    $("#satLiquidInternalEnergy").val(trend(satLiquidInternalEnergy, i).toFixed(3))
    $("#EvapInternalEnergy").val(trend(EvapInternalEnergy, i).toFixed(1))
    $("#satVaporInternalEnergy").val(trend(satVaporInternalEnergy, i).toFixed(1))
    $("#satLiquidEnthalpy").val(trend(satLiquidEnthalpy, i).toFixed(3))
    $("#EvapEnthalpy").val(trend(EvapEnthalpy, i).toFixed(1))
    $("#satVaporEnthalpy").val(trend(satVaporEnthalpy, i).toFixed(1))
    $("#satLiquidEntropy").val(trend(satLiquidEntropy, i).toFixed(4))
    $("#EvapEntropy").val(trend(EvapEntropy, i).toFixed(4))
    $("#satVaporEntropy").val(trend(satVaporEntropy, i).toFixed(4))
})

$("#satPressure").keyup(function(){
    var i = trendIndexIncreasing(satPressure, Number($("#satPressure").val()))
    $("#temperature").val(trend(temperature, i).toFixed(2))
    // $("#satPressure").val(trend(satPressure, i).toFixed(4))
    $("#satLiquidSpecificVolume").val(trend(satLiquidSpecificVolume, i).toFixed(6))
    $("#satVaporSpecificVolume").val(trend(satVaporSpecificVolume, i).toFixed(5))
    $("#satLiquidInternalEnergy").val(trend(satLiquidInternalEnergy, i).toFixed(3))
    $("#EvapInternalEnergy").val(trend(EvapInternalEnergy, i).toFixed(1))
    $("#satVaporInternalEnergy").val(trend(satVaporInternalEnergy, i).toFixed(1))
    $("#satLiquidEnthalpy").val(trend(satLiquidEnthalpy, i).toFixed(3))
    $("#EvapEnthalpy").val(trend(EvapEnthalpy, i).toFixed(1))
    $("#satVaporEnthalpy").val(trend(satVaporEnthalpy, i).toFixed(1))
    $("#satLiquidEntropy").val(trend(satLiquidEntropy, i).toFixed(4))
    $("#EvapEntropy").val(trend(EvapEntropy, i).toFixed(4))
    $("#satVaporEntropy").val(trend(satVaporEntropy, i).toFixed(4))
})

$("#satLiquidSpecificVolume").keyup(function(){
    var i = trendIndexIncreasing(satLiquidSpecificVolume, Number($("#satLiquidSpecificVolume").val()))
    $("#temperature").val(trend(temperature, i).toFixed(2))
    $("#satPressure").val(trend(satPressure, i).toFixed(4))
    // $("#satLiquidSpecificVolume").val(trend(satLiquidSpecificVolume, i).toFixed(6))
    $("#satVaporSpecificVolume").val(trend(satVaporSpecificVolume, i).toFixed(5))
    $("#satLiquidInternalEnergy").val(trend(satLiquidInternalEnergy, i).toFixed(3))
    $("#EvapInternalEnergy").val(trend(EvapInternalEnergy, i).toFixed(1))
    $("#satVaporInternalEnergy").val(trend(satVaporInternalEnergy, i).toFixed(1))
    $("#satLiquidEnthalpy").val(trend(satLiquidEnthalpy, i).toFixed(3))
    $("#EvapEnthalpy").val(trend(EvapEnthalpy, i).toFixed(1))
    $("#satVaporEnthalpy").val(trend(satVaporEnthalpy, i).toFixed(1))
    $("#satLiquidEntropy").val(trend(satLiquidEntropy, i).toFixed(4))
    $("#EvapEntropy").val(trend(EvapEntropy, i).toFixed(4))
    $("#satVaporEntropy").val(trend(satVaporEntropy, i).toFixed(4))
})

$("#satVaporSpecificVolume").keyup(function(){
    var i = trendIndex(satVaporSpecificVolume, Number($("#satVaporSpecificVolume").val()))
    $("#temperature").val(trend(temperature, i).toFixed(2))
    $("#satPressure").val(trend(satPressure, i).toFixed(4))
    $("#satLiquidSpecificVolume").val(trend(satLiquidSpecificVolume, i).toFixed(6))
    // $("#satVaporSpecificVolume").val(trend(satVaporSpecificVolume, i).toFixed(5))
    $("#satLiquidInternalEnergy").val(trend(satLiquidInternalEnergy, i).toFixed(3))
    $("#EvapInternalEnergy").val(trend(EvapInternalEnergy, i).toFixed(1))
    $("#satVaporInternalEnergy").val(trend(satVaporInternalEnergy, i).toFixed(1))
    $("#satLiquidEnthalpy").val(trend(satLiquidEnthalpy, i).toFixed(3))
    $("#EvapEnthalpy").val(trend(EvapEnthalpy, i).toFixed(1))
    $("#satVaporEnthalpy").val(trend(satVaporEnthalpy, i).toFixed(1))
    $("#satLiquidEntropy").val(trend(satLiquidEntropy, i).toFixed(4))
    $("#EvapEntropy").val(trend(EvapEntropy, i).toFixed(4))
    $("#satVaporEntropy").val(trend(satVaporEntropy, i).toFixed(4))
})

$("#satLiquidInternalEnergy").keyup(function(){
    var i = trendIndexIncreasing(satLiquidInternalEnergy, Number($("#satLiquidInternalEnergy").val()))
    $("#temperature").val(trend(temperature, i).toFixed(2))
    $("#satPressure").val(trend(satPressure, i).toFixed(4))
    $("#satLiquidSpecificVolume").val(trend(satLiquidSpecificVolume, i).toFixed(6))
    $("#satVaporSpecificVolume").val(trend(satVaporSpecificVolume, i).toFixed(5))
    // $("#satLiquidInternalEnergy").val(trend(satLiquidInternalEnergy, i).toFixed(3))
    $("#EvapInternalEnergy").val(trend(EvapInternalEnergy, i).toFixed(1))
    $("#satVaporInternalEnergy").val(trend(satVaporInternalEnergy, i).toFixed(1))
    $("#satLiquidEnthalpy").val(trend(satLiquidEnthalpy, i).toFixed(3))
    $("#EvapEnthalpy").val(trend(EvapEnthalpy, i).toFixed(1))
    $("#satVaporEnthalpy").val(trend(satVaporEnthalpy, i).toFixed(1))
    $("#satLiquidEntropy").val(trend(satLiquidEntropy, i).toFixed(4))
    $("#EvapEntropy").val(trend(EvapEntropy, i).toFixed(4))
    $("#satVaporEntropy").val(trend(satVaporEntropy, i).toFixed(4))
})

$("#EvapInternalEnergy").keyup(function(){
    var i = trendIndex(EvapInternalEnergy, Number($("#EvapInternalEnergy").val()))
    $("#temperature").val(trend(temperature, i).toFixed(2))
    $("#satPressure").val(trend(satPressure, i).toFixed(4))
    $("#satLiquidSpecificVolume").val(trend(satLiquidSpecificVolume, i).toFixed(6))
    $("#satVaporSpecificVolume").val(trend(satVaporSpecificVolume, i).toFixed(5))
    $("#satLiquidInternalEnergy").val(trend(satLiquidInternalEnergy, i).toFixed(3))
    // $("#EvapInternalEnergy").val(trend(EvapInternalEnergy, i).toFixed(1))
    $("#satVaporInternalEnergy").val(trend(satVaporInternalEnergy, i).toFixed(1))
    $("#satLiquidEnthalpy").val(trend(satLiquidEnthalpy, i).toFixed(3))
    $("#EvapEnthalpy").val(trend(EvapEnthalpy, i).toFixed(1))
    $("#satVaporEnthalpy").val(trend(satVaporEnthalpy, i).toFixed(1))
    $("#satLiquidEntropy").val(trend(satLiquidEntropy, i).toFixed(4))
    $("#EvapEntropy").val(trend(EvapEntropy, i).toFixed(4))
    $("#satVaporEntropy").val(trend(satVaporEntropy, i).toFixed(4))
})

$("#satVaporInternalEnergy").keyup(function(){
    var i = trendIndexIncreasing(satVaporInternalEnergy, Number($("#satVaporInternalEnergy").val()))
    $("#temperature").val(trend(temperature, i).toFixed(2))
    $("#satPressure").val(trend(satPressure, i).toFixed(4))
    $("#satLiquidSpecificVolume").val(trend(satLiquidSpecificVolume, i).toFixed(6))
    $("#satVaporSpecificVolume").val(trend(satVaporSpecificVolume, i).toFixed(5))
    $("#satLiquidInternalEnergy").val(trend(satLiquidInternalEnergy, i).toFixed(3))
    $("#EvapInternalEnergy").val(trend(EvapInternalEnergy, i).toFixed(1))
    // $("#satVaporInternalEnergy").val(trend(satVaporInternalEnergy, i).toFixed(1))
    $("#satLiquidEnthalpy").val(trend(satLiquidEnthalpy, i).toFixed(3))
    $("#EvapEnthalpy").val(trend(EvapEnthalpy, i).toFixed(1))
    $("#satVaporEnthalpy").val(trend(satVaporEnthalpy, i).toFixed(1))
    $("#satLiquidEntropy").val(trend(satLiquidEntropy, i).toFixed(4))
    $("#EvapEntropy").val(trend(EvapEntropy, i).toFixed(4))
    $("#satVaporEntropy").val(trend(satVaporEntropy, i).toFixed(4))
})

$("#satLiquidEnthalpy").keyup(function(){
    var i = trendIndexIncreasing(satLiquidEnthalpy, Number($("#satLiquidEnthalpy").val()))
    $("#temperature").val(trend(temperature, i).toFixed(2))
    $("#satPressure").val(trend(satPressure, i).toFixed(4))
    $("#satLiquidSpecificVolume").val(trend(satLiquidSpecificVolume, i).toFixed(6))
    $("#satVaporSpecificVolume").val(trend(satVaporSpecificVolume, i).toFixed(5))
    $("#satLiquidInternalEnergy").val(trend(satLiquidInternalEnergy, i).toFixed(3))
    $("#EvapInternalEnergy").val(trend(EvapInternalEnergy, i).toFixed(1))
    $("#satVaporInternalEnergy").val(trend(satVaporInternalEnergy, i).toFixed(1))
    // $("#satLiquidEnthalpy").val(trend(satLiquidEnthalpy, i).toFixed(3))
    $("#EvapEnthalpy").val(trend(EvapEnthalpy, i).toFixed(1))
    $("#satVaporEnthalpy").val(trend(satVaporEnthalpy, i).toFixed(1))
    $("#satLiquidEntropy").val(trend(satLiquidEntropy, i).toFixed(4))
    $("#EvapEntropy").val(trend(EvapEntropy, i).toFixed(4))
    $("#satVaporEntropy").val(trend(satVaporEntropy, i).toFixed(4))
})

$("#EvapEnthalpy").keyup(function(){
    var i = trendIndex(EvapEnthalpy, Number($("#EvapEnthalpy").val()))
    $("#temperature").val(trend(temperature, i).toFixed(2))
    $("#satPressure").val(trend(satPressure, i).toFixed(4))
    $("#satLiquidSpecificVolume").val(trend(satLiquidSpecificVolume, i).toFixed(6))
    $("#satVaporSpecificVolume").val(trend(satVaporSpecificVolume, i).toFixed(5))
    $("#satLiquidInternalEnergy").val(trend(satLiquidInternalEnergy, i).toFixed(3))
    $("#EvapInternalEnergy").val(trend(EvapInternalEnergy, i).toFixed(1))
    $("#satVaporInternalEnergy").val(trend(satVaporInternalEnergy, i).toFixed(1))
    $("#satLiquidEnthalpy").val(trend(satLiquidEnthalpy, i).toFixed(3))
    // $("#EvapEnthalpy").val(trend(EvapEnthalpy, i).toFixed(1))
    $("#satVaporEnthalpy").val(trend(satVaporEnthalpy, i).toFixed(1))
    $("#satLiquidEntropy").val(trend(satLiquidEntropy, i).toFixed(4))
    $("#EvapEntropy").val(trend(EvapEntropy, i).toFixed(4))
    $("#satVaporEntropy").val(trend(satVaporEntropy, i).toFixed(4))
})

$("#satVaporEnthalpy").keyup(function(){
    var i = trendIndexIncreasing(satVaporEnthalpy, Number($("#satVaporEnthalpy").val()))
    $("#temperature").val(trend(temperature, i).toFixed(2))
    $("#satPressure").val(trend(satPressure, i).toFixed(4))
    $("#satLiquidSpecificVolume").val(trend(satLiquidSpecificVolume, i).toFixed(6))
    $("#satVaporSpecificVolume").val(trend(satVaporSpecificVolume, i).toFixed(5))
    $("#satLiquidInternalEnergy").val(trend(satLiquidInternalEnergy, i).toFixed(3))
    $("#EvapInternalEnergy").val(trend(EvapInternalEnergy, i).toFixed(1))
    $("#satVaporInternalEnergy").val(trend(satVaporInternalEnergy, i).toFixed(1))
    $("#satLiquidEnthalpy").val(trend(satLiquidEnthalpy, i).toFixed(3))
    $("#EvapEnthalpy").val(trend(EvapEnthalpy, i).toFixed(1))
    // $("#satVaporEnthalpy").val(trend(satVaporEnthalpy, i).toFixed(1))
    $("#satLiquidEntropy").val(trend(satLiquidEntropy, i).toFixed(4))
    $("#EvapEntropy").val(trend(EvapEntropy, i).toFixed(4))
    $("#satVaporEntropy").val(trend(satVaporEntropy, i).toFixed(4))
})

$("#satLiquidEntropy").keyup(function(){
    var i = trendIndexIncreasing(satLiquidEntropy, Number($("#satLiquidEntropy").val()))
    $("#temperature").val(trend(temperature, i).toFixed(2))
    $("#satPressure").val(trend(satPressure, i).toFixed(4))
    $("#satLiquidSpecificVolume").val(trend(satLiquidSpecificVolume, i).toFixed(6))
    $("#satVaporSpecificVolume").val(trend(satVaporSpecificVolume, i).toFixed(5))
    $("#satLiquidInternalEnergy").val(trend(satLiquidInternalEnergy, i).toFixed(3))
    $("#EvapInternalEnergy").val(trend(EvapInternalEnergy, i).toFixed(1))
    $("#satVaporInternalEnergy").val(trend(satVaporInternalEnergy, i).toFixed(1))
    $("#satLiquidEnthalpy").val(trend(satLiquidEnthalpy, i).toFixed(3))
    $("#EvapEnthalpy").val(trend(EvapEnthalpy, i).toFixed(1))
    $("#satVaporEnthalpy").val(trend(satVaporEnthalpy, i).toFixed(1))
    // $("#satLiquidEntropy").val(trend(satLiquidEntropy, i).toFixed(4))
    $("#EvapEntropy").val(trend(EvapEntropy, i).toFixed(4))
    $("#satVaporEntropy").val(trend(satVaporEntropy, i).toFixed(4))
})

$("#EvapEntropy").keyup(function(){
    var i = trendIndex(EvapEntropy, Number($("#EvapEntropy").val()))
    $("#temperature").val(trend(temperature, i).toFixed(2))
    $("#satPressure").val(trend(satPressure, i).toFixed(4))
    $("#satLiquidSpecificVolume").val(trend(satLiquidSpecificVolume, i).toFixed(6))
    $("#satVaporSpecificVolume").val(trend(satVaporSpecificVolume, i).toFixed(5))
    $("#satLiquidInternalEnergy").val(trend(satLiquidInternalEnergy, i).toFixed(3))
    $("#EvapInternalEnergy").val(trend(EvapInternalEnergy, i).toFixed(1))
    $("#satVaporInternalEnergy").val(trend(satVaporInternalEnergy, i).toFixed(1))
    $("#satLiquidEnthalpy").val(trend(satLiquidEnthalpy, i).toFixed(3))
    $("#EvapEnthalpy").val(trend(EvapEnthalpy, i).toFixed(1))
    $("#satVaporEnthalpy").val(trend(satVaporEnthalpy, i).toFixed(1))
    $("#satLiquidEntropy").val(trend(satLiquidEntropy, i).toFixed(4))
    // $("#EvapEntropy").val(trend(EvapEntropy, i).toFixed(4))
    $("#satVaporEntropy").val(trend(satVaporEntropy, i).toFixed(4))
})

$("#satVaporEntropy").keyup(function(){
    var i = trendIndex(satVaporEntropy, Number($("#satVaporEntropy").val()))
    $("#temperature").val(trend(temperature, i).toFixed(2))
    $("#satPressure").val(trend(satPressure, i).toFixed(4))
    $("#satLiquidSpecificVolume").val(trend(satLiquidSpecificVolume, i).toFixed(6))
    $("#satVaporSpecificVolume").val(trend(satVaporSpecificVolume, i).toFixed(5))
    $("#satLiquidInternalEnergy").val(trend(satLiquidInternalEnergy, i).toFixed(3))
    $("#EvapInternalEnergy").val(trend(EvapInternalEnergy, i).toFixed(1))
    $("#satVaporInternalEnergy").val(trend(satVaporInternalEnergy, i).toFixed(1))
    $("#satLiquidEnthalpy").val(trend(satLiquidEnthalpy, i).toFixed(3))
    $("#EvapEnthalpy").val(trend(EvapEnthalpy, i).toFixed(1))
    $("#satVaporEnthalpy").val(trend(satVaporEnthalpy, i).toFixed(1))
    $("#satLiquidEntropy").val(trend(satLiquidEntropy, i).toFixed(4))
    $("#EvapEntropy").val(trend(EvapEntropy, i).toFixed(4))
    // $("#satVaporEntropy").val(trend(satVaporEntropy, i).toFixed(4))
})
