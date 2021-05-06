function downHeap (left: number, right: number) {
    temp = ls[left]
    parent = left
    while (parent < Math.trunc((right + 1) / 2)) {
        cl = parent * 2 + 1
        cr = cl + 1
        if (cr <= right && ls[cr] > ls[cl]) {
            child = cr
        } else {
            child = cl
        }
        if (temp >= ls[child]) {
            break;
        }
        ls[parent] = ls[child]
        onLED(parent, 255)
        basic.pause(500)
        onLED(parent, 64)
        parent = child
    }
    ls[parent] = temp
    onLED(parent, 255)
    basic.pause(500)
    onLED(parent, 64)
}
input.onButtonPressed(Button.A, function () {
    cnt += 1
    if (cnt >= algorithm.length) {
        cnt = 0
    }
    basic.showString(algorithm[cnt].charAt(0))
    for (let y = 0; y <= 4; y++) {
        onLED(y + indexLED, 64)
    }
})
function doQuickSort (left: number, right: number) {
    pl = left
    pr = right
    p = ls[Math.trunc((pl + pr) / 2)]
    while (true) {
        while (ls[pl] < p) {
            pl += 1
        }
        while (ls[pr] > p) {
            pr += -1
        }
        if (pl <= pr) {
            temp = ls[pl]
            ls[pl] = ls[pr]
            ls[pr] = temp
            onLED(pl, 255)
            onLED(pr, 255)
            basic.pause(500)
            onLED(pl, 64)
            onLED(pr, 64)
            pl += 1
            pr += -1
        }
        if (pl > pr) {
            break;
        }
    }
    if (left < pr) {
        doQuickSort(left, pr)
    }
    if (pl < right) {
        doQuickSort(pl, right)
    }
}
function onLED (row: number, brightness: number) {
    for (let x = 0; x <= MAX_NUM - 1; x++) {
        led.unplot(x, row - indexLED)
        if (x < ls[row]) {
            led.plotBrightness(x, row - indexLED, brightness)
        }
    }
}
input.onButtonPressed(Button.AB, function () {
    angle = input.rotation(Rotation.Pitch)
})
function doHeapSort () {
    i = Math.trunc((LEN - 1) / 2)
    while (i >= 0) {
        downHeap(i, LEN - 1)
        i += -1
    }
    i = LEN - 1
    while (i > 0) {
        temp = ls[0]
        ls[0] = ls[i]
        ls[i] = temp
        onLED(0, 255)
        onLED(i, 255)
        basic.pause(500)
        onLED(0, 64)
        onLED(i, 64)
        downHeap(0, i - 1)
        i += -1
    }
}
input.onButtonPressed(Button.B, function () {
    if (algorithm[cnt] == "Bubble") {
        doBubbleSort()
    } else if (algorithm[cnt] == "Shell") {
        doShellSort()
    } else if (algorithm[cnt] == "Quick") {
        doQuickSort(0, LEN - 1)
    } else if (algorithm[cnt] == "Merge") {
        doMergeSort(0, LEN - 1)
    } else {
        doHeapSort()
    }
    basic.showString("Sorted")
    for (let y = 0; y <= 4; y++) {
        onLED(y + indexLED, 64)
    }
})
function doMergeSort (left: number, right: number) {
    if (left < right) {
        buff = []
        for (let index = 0; index < LEN; index++) {
            buff.push(0)
        }
        center = Math.trunc((left + right) / 2)
        doMergeSort(left, center)
        center = Math.trunc((left + right) / 2)
        doMergeSort(center + 1, right)
        center = Math.trunc((left + right) / 2)
        p = 0
        i = left
        while (i <= center) {
            buff[p] = ls[i]
            p += 1
            i += 1
        }
        j = 0
        k = left
        while (i <= right && j < p) {
            if (buff[j] <= ls[i]) {
                ls[k] = buff[j]
                onLED(k, 255)
                basic.pause(500)
                onLED(k, 64)
                j += 1
            } else {
                ls[k] = ls[i]
                onLED(k, 255)
                basic.pause(500)
                onLED(k, 64)
                i += 1
            }
            k += 1
        }
        while (j < p) {
            ls[k] = buff[j]
            onLED(k, 255)
            basic.pause(500)
            onLED(k, 64)
            k += 1
            j += 1
        }
    }
}
function doShellSort () {
    h = Math.trunc(LEN / 2)
    while (h > 0) {
        i = h
        while (i < LEN) {
            temp = ls[i]
            j = i - h
            while (j >= 0 && ls[j] > temp) {
                ls[j + h] = ls[j]
                onLED(j + h, 255)
                basic.pause(500)
                onLED(j + h, 64)
                j = j - h
            }
            ls[j + h] = temp
            onLED(j + h, 255)
            basic.pause(500)
            onLED(j + h, 64)
            i += 1
        }
        h = Math.trunc(h / 2)
    }
}
function doBubbleSort () {
    i = 0
    while (i < LEN - 1) {
        j = LEN - 1
        while (j > i) {
            if (ls[j - 1] > ls[j]) {
                temp = ls[j - 1]
                ls[j - 1] = ls[j]
                ls[j] = temp
                onLED(j - 1, 255)
                onLED(j, 255)
                basic.pause(500)
                onLED(j - 1, 64)
                onLED(j, 64)
            }
            j += -1
        }
        i += 1
    }
}
let h = 0
let k = 0
let j = 0
let center = 0
let buff: number[] = []
let i = 0
let p = 0
let pr = 0
let pl = 0
let child = 0
let cr = 0
let cl = 0
let parent = 0
let temp = 0
let indexLED = 0
let angle = 0
let algorithm: string[] = []
let cnt = 0
let ls: number[] = []
let MAX_NUM = 0
let LEN = 0
LEN = 10
MAX_NUM = 5
ls = []
for (let index = 0; index < LEN; index++) {
    ls.push(randint(1, MAX_NUM))
}
cnt = 0
algorithm = ["Bubble", "Shell", "Quick", "Merge", "Heap"]
angle = input.rotation(Rotation.Pitch)
indexLED = 0
for (let y = 0; y <= 4; y++) {
    onLED(y + indexLED, 64)
}
basic.forever(function () {
    if (input.rotation(Rotation.Pitch) > angle + 15 && indexLED > 0) {
        indexLED += -1
        for (let y = 0; y <= 4; y++) {
            onLED(y + indexLED, 64)
        }
        basic.pause(200)
    }
    if (input.rotation(Rotation.Pitch) < angle - 15 && indexLED < LEN - 5) {
        indexLED += 1
        for (let y = 0; y <= 4; y++) {
            onLED(y + indexLED, 64)
        }
        basic.pause(200)
    }
})
