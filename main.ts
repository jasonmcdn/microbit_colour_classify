function getAllDists () {
    leaf_dists = allDists(leaf_rgb, last_r, last_g, last_b)
    stem_dists = allDists(stem_rgb, last_r, last_g, last_b)
    dry_soil_dists = allDists(dry_soil_rgb, last_r, last_g, last_b)
    wet_soil_dists = allDists(wet_soil_rgb, last_r, last_g, last_b)
}
function setLeafRGB () {
    // Stem 1 R G B
    next_leaf_rgb = [11, 11, 11]
    leaf_rgb = next_leaf_rgb
    // Stem 2 R G B
    next_leaf_rgb = [11, 11, 11]
    leaf_rgb = concatLists(leaf_rgb, next_leaf_rgb)
    // Stem 2 R G B
    next_leaf_rgb = [11, 11, 11]
    leaf_rgb = concatLists(leaf_rgb, next_leaf_rgb)
    // Stem 2 R G B
    next_leaf_rgb = [11, 11, 11]
    leaf_rgb = concatLists(leaf_rgb, next_leaf_rgb)
}
input.onButtonPressed(Button.A, function () {
    envirobit.setColourIntegrationTime(100)
    pins.digitalWritePin(DigitalPin.P0, 1)
    control.waitMicros(400)
    last_l = envirobit.getLight()
    last_r = envirobit.getRed()
    last_g = envirobit.getGreen()
    last_b = envirobit.getBlue()
    if (last_l > 30) {
        basic.showIcon(IconNames.Yes)
        pressed_A = 1
    } else {
        basic.showIcon(IconNames.No)
        pressed_A = 0
    }
    control.waitMicros(400)
    pins.digitalWritePin(DigitalPin.P0, 0)
})
function setWetSoilRGB () {
    // Dry Soil1 R G B
    next_wet_soil_rgb = [41, 41, 41]
    wet_soil_rgb = next_wet_soil_rgb
    // Dry Soil 2 RGB
    next_wet_soil_rgb = [41, 41, 41]
    wet_soil_rgb = concatLists(wet_soil_rgb, next_wet_soil_rgb)
    next_wet_soil_rgb = [41, 41, 41]
    wet_soil_rgb = concatLists(wet_soil_rgb, next_wet_soil_rgb)
    next_wet_soil_rgb = [41, 41, 41]
    wet_soil_rgb = concatLists(wet_soil_rgb, next_wet_soil_rgb)
}
function getPrediction () {
    getAllDists()
    prediction_d = leaf_dists[0]
    prediction_index = 0
    if (stem_dists[0] < prediction_d) {
        prediction_d = stem_dists[0]
        prediction_index = 1
    } else if (dry_soil_dists[0] < prediction_d) {
        prediction_d = dry_soil_dists[0]
        prediction_index = 2
    } else if (wet_soil_dists[0] < prediction_d) {
        prediction_d = wet_soil_dists[0]
        prediction_index = 3
    }
}
function insert (list: any[], num: number) {
    i = 0
    while (results[i] >= num) {
        i += 1
    }
    results.insertAt(i, num)
}
function setStemRGB () {
    // Stem 1 R G B
    next_stem_rgb = [31, 31, 31]
    stem_rgb = next_stem_rgb
    // Stem 2 R G B
    next_stem_rgb = [31, 31, 31]
    stem_rgb = concatLists(stem_rgb, next_stem_rgb)
    // Stem 2 R G B
    next_stem_rgb = [31, 31, 31]
    stem_rgb = concatLists(stem_rgb, next_stem_rgb)
    // Stem 2 R G B
    next_stem_rgb = [31, 31, 31]
    stem_rgb = concatLists(stem_rgb, next_stem_rgb)
}
function setDrySoilRGB () {
    // Dry Soil1 R G B
    next_dry_soil_rgb = [21, 21, 21]
    dry_soil_rgb = next_dry_soil_rgb
    // Dry Soil 2 RGB
    next_dry_soil_rgb = [21, 21, 21]
    dry_soil_rgb = concatLists(dry_soil_rgb, next_dry_soil_rgb)
    next_dry_soil_rgb = [21, 21, 21]
    dry_soil_rgb = concatLists(dry_soil_rgb, next_dry_soil_rgb)
    next_dry_soil_rgb = [21, 21, 21]
    dry_soil_rgb = concatLists(dry_soil_rgb, next_dry_soil_rgb)
}
function concatLists (list: number[], list2: number[]) {
    while (list2.length > 0) {
        results.push(list2.shift())
    }
    return list
}
function show_rgb (list: any[]) {
    i = 0
    n_list_colours = (list.length - 2) / 3
    for (let index = 0; index <= n_list_colours; index++) {
        basic.showNumber(index)
        basic.showString("  R: ")
        basic.showNumber(list[i])
        i += 1
        basic.showString("G: ")
        basic.showNumber(list[i])
        i += 1
        basic.showString("B: ")
        basic.showNumber(list[i])
        i += 1
    }
}
function showAllRGB () {
    basic.showString("Leaves")
    show_rgb(leaf_rgb)
    basic.showString("Stems")
    show_rgb(stem_rgb)
    basic.showString("Dry Soil")
    show_rgb(dry_soil_rgb)
    basic.showString("Wet Soil")
    show_rgb(wet_soil_rgb)
}
input.onButtonPressed(Button.AB, function () {
    envirobit.setColourIntegrationTime(100)
    control.waitMicros(400)
    last_l = envirobit.getLight()
    last_r = envirobit.getRed()
    last_g = envirobit.getGreen()
    last_b = envirobit.getBlue()
    if (last_l > 30) {
        basic.showIcon(IconNames.Yes)
        pressed_A = 1
    } else {
        basic.showIcon(IconNames.No)
        pressed_A = 0
    }
    control.waitMicros(400)
    basic.showIcon(IconNames.SmallHeart)
    control.waitMicros(400)
})
function distance (num1: number, num2: number, num3: number, num1a: number, num2a: number, num3a: number) {
    result = (num1 - num1a) ** 2
    result += (num2 - num2a) ** 2
    result += (num3 - num3a) ** 2
    result = Math.sqrt(result)
    return result
}
input.onButtonPressed(Button.B, function () {
    if (pressed_A == 0) {
        basic.showString("Press A")
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        control.waitMicros(400)
    } else {
        getPrediction()
        basic.showString("" + (prediction_names[prediction_index]))
    }
})
function allDists (list: number[], num1a: number, num2a: number, num3a: number) {
    results = [distance(list.shift(), list.shift(), list.shift(), num1a, num2a, num3a)]
    while (list.length > 0) {
        insert(results, distance(list.shift(), list.shift(), list.shift(), num1a, num2a, num3a))
    }
    return results
}
let result: number = []
let n_list_colours: number = []
let next_dry_soil_rgb: number[] = []
let next_stem_rgb: number[] = []
let results: number[] = []
let i: number = []
let next_wet_soil_rgb: number[] = []
let next_leaf_rgb: number[] = []
let prediction_names: string[] = []
let wet_soil_dists: number[] = []
let dry_soil_dists: number[] = []
let stem_dists: number[] = []
let leaf_dists: number[] = []
let prediction_index: number = []
let prediction_d: number = []
let pressed_A: number = []
let last_l: number = []
let last_b: number = []
let last_g: number = []
let last_r: number = []
let wet_soil_rgb: number[] = []
let dry_soil_rgb: number[] = []
let stem_rgb: number[] = []
let leaf_rgb: number[] = []
leaf_rgb = [0]
setLeafRGB()
stem_rgb = [0]
setStemRGB()
dry_soil_rgb = [0]
setDrySoilRGB()
wet_soil_rgb = [0]
setWetSoilRGB()
last_r = 0
last_g = 0
last_b = 0
last_l = 0
pressed_A = 0
prediction_d = 1000
prediction_index = 0
leaf_dists = [0]
stem_dists = [0]
dry_soil_dists = [0]
wet_soil_dists = [0]
prediction_names = [
"Leaf",
"Stem",
"Dry Soil",
"Wet Soil"
]
basic.forever(function () {
    basic.showIcon(IconNames.Happy)
    control.waitMicros(1000)
    basic.clearScreen()
    control.waitMicros(5000)
})
