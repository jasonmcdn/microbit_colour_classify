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
        list.push(list2.shift())
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
let n_list_colours = 0
let i = 0
let next_dry_soil_rgb: number[] = []
let next_stem_rgb: number[] = []
let next_wet_soil_rgb: number[] = []
let next_leaf_rgb: number[] = []
let pressed_A = 0
let last_l = 0
let last_b = 0
let last_g = 0
let last_r = 0
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
basic.forever(function () {
    basic.showIcon(IconNames.Happy)
    control.waitMicros(1000)
    basic.clearScreen()
    control.waitMicros(5000)
})
